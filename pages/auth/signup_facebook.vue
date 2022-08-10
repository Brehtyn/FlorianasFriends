<template>
  <div class="form-box rounded-3xl p-10 border-2">
    <Nuxt-Img class="auth_page_pic" src="logo.png" />
    <h1 class="auth_page_title">Sign Up Facebook</h1>
    <form
      class="flex flex-col items-center justify-between"
      @submit.stop.prevent="createUser"
    >
      <div class="pt-2">
        <label>Full Name</label>
        <div>
          <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }">
            <input
              type="text"
              name="name"
              class="
                textbox-style
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
                mb-3
                input
              "
              v-model="auth.name"
            />
            <div id="validation-error">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
      </div>
      <!-- <div class="pt-2">
        <AppDropdown :toggleTrigger="stateSelection">
          <label slot="dropDown_label">Lable for Slot Component</label>
          <input
            slot="toggler"
            type="text"
            name="name"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-grey-darker
              mb-3
              input
            "
            v-model="stateSelection"
          />
          <AppDropdownContent>
            <AppDropdownItem>Action 1</AppDropdownItem>
            <AppDropdownItem>Action 2</AppDropdownItem>
            <AppDropdownItem>Action 3</AppDropdownItem>
          </AppDropdownContent>
        </AppDropdown>
      </div> -->
      <div class="pt-2">
        <label>Email</label>
        <div>
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <input
              type="email"
              name="email"
              class="
                textbox-style
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
                mb-3
                input
              "
              v-model="auth.email"
            />
            <div id="validation-error">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
      </div>
      <div class="pt-2">
        <label>Password</label>
        <div>
          <ValidationProvider rules="required|min:9" v-slot="{ errors }">
            <input
              type="password"
              name="password"
              class="
                textbox-style
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-grey-darker
                mb-3
                input
              "
              v-model="auth.password"
            />
            <div id="validation-error">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
      </div>
      <div class="pt-4">
        <button
          type="submit"
          @click="() => createUser()"
          class="
            button-hover
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
            mb-3
            input
          "
        >
          Create Account
        </button>
        <p
          class="
            align-text-center
            text-gray-400
            tracking-tight
            font-light
            text-sm
            w-100
          "
        >
          Already have an account? Sign in
          <NuxtLink class="signup-link text-blue-600" to="/auth/signin"
            >here</NuxtLink
          >.
        </p>
      </div>
    </form>

    <GeneralAlert
      v-show="showGeneralAlert"
      :message="error_message"
      @close-GeneralAlert="showGeneralAlert = false"
    />
  </div>
</template>

<script>
import { states } from "../../data/states";
import AppDropdown from "../../components/AppDropdown.vue";
import AppDropdownContent from "../../components/AppDropdownContent.vue";
import AppDropdownItem from "../../components/AppDropdownItem.vue";
import { ValidationProvider } from "vee-validate";
import GeneralAlert from "~/components/generalAlert.vue";

export default {
  components: {
    AppDropdown,
    AppDropdownContent,
    AppDropdownItem,
    ValidationProvider,
    GeneralAlert,
  },
  data() {
    return {
      auth: {
        email: "",
        password: "",
        name: "",
      },
      location: "",
      debounceTimer: null,
      stateSelection: null,
      disabled: true,
      cities: [],
      citiesSelection: null,
      showGeneralAlert: false,
      error_message: "There has been an error.",
    };
  },
  //computing states as options
  computed: {
    options: () => states,
  },
  // //Creates user and automatically signs you in
  methods: {
    createUser() {
      const db = this.$fire.firestore;

      //used in Nuxt to pass error messages from nested function to parent function
      var vm = this;

      this.$fire.auth
        .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {
          console.log(error.message);
          vm.error_message = error.message;
          vm.showGeneralAlert = true;
        })
        .then((user) => {
          //we are signed in
          const userID = user.user.uid;
          const userData = {
            userID: userID,
            email: user.user.email,
            name: this.auth.name,
            location: this.location,
            postsLikedOrSaved: [],
            settings: [],
          };

          db.collection("users")
            .doc(userID)
            .set(userData)
            .then(() => {
              console.log("User successfully added to the DB!");
            })
            .catch((e) => {
              console.log("Error adding user to the DB: ", e);
              vm.error_message = error;
              vm.showGeneralAlert = true;
            });

          console.log(user);
          console.log("it creates the user");
          $nuxt.$router.push("/");
        });
    },
    debounce() {
      console.log("this is in the debounce function ");
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        //this is where we will fire the request
        //only once one second has passed
        // mutate the location to capitalize the first word bc api search sucks
        this.location = this.capitalizeFirstLetter(this.location);
        this.fetchCities().then((result) => console.log(result));
      }, 1000);
    },
    async fetchCities() {
      const where = encodeURIComponent(
        JSON.stringify({
          name: {
            $regex: `${this.location}`,
          },
        })
      );
      const cities = await this.$axios.$get(
        `https://parseapi.back4app.com/classes/Usabystate_${this.stateSelection}?limit=10&keys=name,containingState&where=${where}`,
        {
          headers: {
            "X-Parse-Application-Id": this.$config.applicationID, // This is your app's application id
            "X-Parse-REST-API-Key": this.$config.apiKey, // This is your app's REST API key
          },
        }
      );
      return { cities };
    },
    userStateSelection(stateOption) {
      console.log(stateOption);
      this.stateSelection = this.firstTwo(stateOption);
    },
    //Do not use with the VSelect anymore but could use this to trigger drop down or not
    dropdownShouldOpen(vSelect) {
      if (this.stateSelection !== null) {
        //if there is something selected then enable input
        this.disabled = false;
        return vSelect.open;
      } else {
        this.disabled = true;
      }
      return vSelect.search.length !== 0 && vSelect.open;
    },
    dropdownShouldOpenCities(vSelect) {
      if (this.citiesSelection !== null) {
        //if there is something selected then enable input
        return vSelect.open;
      }
      return vSelect.search.length !== 0 && vSelect.open;
    },
    firstTwo(str) {
      return str.substring(0, 2);
    },
    capitalizeFirstLetter(str) {
      const words = str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );

      return words;
    },
  },
};
</script>

<style scoped>
.form-box {
  width: 80vw;
  max-width: 1250px;
  margin: 12vh auto;
}

.auth_page_title {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
}
.auth_page_pic {
  margin: 0 auto;
  width: 100px;
  max-width: 100%;
  height: auto;
}

.textbox-style {
  width: 65vw;
  max-width: 320px;
  border: 2px solid #eaeaea;
}
#validation-error {
  color: red;
  text-align: center;
  text-decoration: underline;
  font-size: 12px;
}

.signup-link {
  text-decoration: black underline !important;
}
</style>
