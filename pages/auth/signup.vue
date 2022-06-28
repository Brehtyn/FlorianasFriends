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
        <div class="pt-2">
          <label>State</label>
          <div
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
              input">
          <v-select
            :options="options"
            :value="stateSelection"
            :v-model="stateSelection"
            @input="(stateOption) => userStateSelection(stateOption)"
            :dropdown-should-open="dropdownShouldOpen"
          />
          </div>
        </div>
         <div class="pt-2">
          <label>City</label>
          <div>
            <input
              type="text"
              name="location"
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
              v-model="location"
              @input="debounce"
              :disabled="disabled"
            />
          </div>
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
import vSelect from "vue-select"



export default {
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
      disabled: true
    };
  },
  //computing states as options
  computed: {
    options: () => states
  },
  //v-select component
  components:{
    vSelect
  },
  //Creates user and automatically signs you in
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
    debounce(event) {
      console.log('started typing')
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        //this is where we will fire the request
        //only once one second has passed
        console.log(event.target.value)

        this.fetchCities().then(result => console.log(result))

      }, 1000)
    },
    async fetchCities() {
      //Doesn't work - API works, just cannot read the keys
        const ip = await this.$axios.$get('https://parseapi.back4app.com/classes/Usabystate_AZ?limit=10&keys=name,containingState',
    {
      headers: {
        'X-Parse-Application-Id': process.env.APPLICATION_ID, // This is your app's application id
        'X-Parse-REST-API-Key': process.env.REST_API_KEY, // This is your app's REST API key
      }
    })
        return { ip }
    },
    userStateSelection(stateOption){
        this.stateSelection = stateOption
    },
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
  },
};
</script>
