<template>
     <div class="rounded-3xl m-28 p-10 border-2">
      <form
        class="flex flex-col items-center justify-between"
        @submit.stop.prevent="createUser"
      >
        <div class="pt-2">
          <label>Name (First and Last)</label>
          <div>
            <input
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
              v-model="auth.name"
            />
          </div>
        </div>
        <div class="pt2">
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
                        input"
                        v-model="stateSelection"
                      >   
                <AppDropdownContent>
                  <AppDropdownItem>Action 1</AppDropdownItem>
                  <AppDropdownItem>Action 2</AppDropdownItem>
                  <AppDropdownItem>Action 3</AppDropdownItem>
                </AppDropdownContent>
              </AppDropdown>
        </div>
        <div class="pt-2">
          <label>Email</label>
          <div>
            <input
              type="email"
              name="email"
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
              v-model="auth.email"
            />
          </div>
        </div>
        <div class="pt-2">
          <label>Password</label>
          <div>
            <input
              type="password"
              name="password"
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
              v-model="auth.password"
            />
          </div>
        </div>
        <div class="pt-4">
          <button
            type="submit"
            @click="() => createUser()"
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
          >
            Sign Up
          </button>
          <button
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
          >
            <NuxtLink
            to="/auth/signin">Signin</NuxtLink>
          </button>
        </div>
      </form>
    </div>
</template>

<script>
import { states }from '../../data/states'
import AppDropdown from '../../components/AppDropdown.vue'
import AppDropdownContent from '../../components/AppDropdownContent.vue'
import AppDropdownItem from '../../components/AppDropdownItem.vue'


export default {
      components: {
      AppDropdown,
      AppDropdownContent,
      AppDropdownItem,
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
      citiesSelection: null
    };
  },
  //computing states as options
  computed: {
    options: () => states
  },
  // //Creates user and automatically signs you in
  methods: {
    createUser() {
       const db = this.$fire.firestore;

      this.$fire.auth
        .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {
          console.log(error.message);
        })
        .then((user) => {
          //we are signed in
          const userID = user.user.uid
          const userData ={
            userID: userID,
            email: user.user.email,
            name: this.auth.name,
            location: this.location,
            postsLikedOrSaved: [],
            settings: []
          }

          db.collection("users").doc(userID).set(userData).then(() => {
            console.log("User successfully added to the DB!");
          })
          .catch((e) => {
            console.log("Error adding user to the DB: ", e);
          });

          console.log(user);
          console.log('it creates the user')
          $nuxt.$router.push("/");
        });
    },
    debounce() {
      console.log('this is in the debounce function ')
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        //this is where we will fire the request
        //only once one second has passed
        // mutate the location to capitalize the first word bc api search sucks
        this.location = this.capitalizeFirstLetter(this.location)
        this.fetchCities().then(result => console.log(result))

      }, 1000)
    },
    async fetchCities() {
        const where = encodeURIComponent(JSON.stringify({
          "name": {
            "$regex": `${this.location}`
          }
        }));
      const cities = await this.$axios.$get(`https://parseapi.back4app.com/classes/Usabystate_${this.stateSelection}?limit=10&keys=name,containingState&where=${where}`,
      {
        headers: {
          'X-Parse-Application-Id': this.$config.applicationID, // This is your app's application id
          'X-Parse-REST-API-Key': this.$config.apiKey, // This is your app's REST API key
        }
      })
      return { cities }
    },
    userStateSelection(stateOption){
      console.log(stateOption)
        this.stateSelection = this.firstTwo(stateOption)
    },
    //Do not use with the VSelect anymore but could use this to trigger drop down or not
    dropdownShouldOpen(vSelect) {
      if (this.stateSelection !== null) {
        //if there is something selected then enable input
        this.disabled = false
        return vSelect.open
      } else {
        this.disabled = true
      }
      return vSelect.search.length !== 0 && vSelect.open
    },
    dropdownShouldOpenCities(vSelect) {
      if (this.citiesSelection !== null) {
        //if there is something selected then enable input
        return vSelect.open
      } 
      return vSelect.search.length !== 0 && vSelect.open
    },
    firstTwo(str) {
      return str.substring(0, 2);
    },
    capitalizeFirstLetter(str) {
      const words = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
      
      return words
    }
  },
};
</script>
