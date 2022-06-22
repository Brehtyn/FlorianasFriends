<template>
     <div class="rounded-3xl m-28 p-10 border-2">
      <form
        class="flex flex-col items-center justify-between"
        @submit.stop.prevent="createUser"
      >
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
            class="shadow appearance-none border rounded w-full py-3 px-6 text-grey-darker m-20 input"
            to="/auth/signin">Signin</NuxtLink>
          </button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      auth: {
        email: "",
        password: "",
      },
    };
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
            email: user.user.email
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
    }
  },
};
</script>
