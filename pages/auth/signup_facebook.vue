<template>
  <div class="form-box rounded-3xl p-10 border-2">
    <Nuxt-Img class="auth_page_pic" src="logo.png" />
    <h1 class="auth_page_title">Continue with Facebook</h1>
    <form
      class="flex flex-col items-center justify-between"
      @submit.stop.prevent="createUser"
    >
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
            mb-3
            w-100
            item-highlight-surrounded
          "
        >
          or
        </p>

        <Nuxt-Link
          to="/auth/signup"
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
            align-text-center
            link-button
          "
        >
          Sign up with Email
        </Nuxt-Link>

        <Nuxt-Link
          to="/auth/signup_google"
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
            align-text-center
            link-button
            google
          "
        >
          Sign up with Google
        </Nuxt-Link>

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
import { ValidationProvider } from "vee-validate";
import GeneralAlert from "~/components/generalAlert.vue";

export default {
  components: {
    ValidationProvider,
    GeneralAlert,
  },
  data() {
    return {
      auth: {
        email: "",
      },
      debounceTimer: null,
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
.google {
  background-color: var(--clr-google-blue);
  color: white;
}
.facebook {
  background-color: var(--clr-facebook-blue);
  color: white;
}
</style>
