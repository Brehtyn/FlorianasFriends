<template>
  <section>
    <div class="rounded-3xl m-28 p-10 border-2">
      <form
        class="flex flex-col items-center justify-between"
        @submit.stop.prevent="login"
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
          <button type="submit" @click="() => login()" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 input">
            Log In
          </button>
          <button type="submit" @click="() => forgotPassword()" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 input">
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  </section>
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
  methods: {
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {
          console.log(error.message);
        })
        .then((user) => {
          //we are signed in
          console.log(user.user);
          $nuxt.$router.push("/");
        });
    },
    forgotPassword() {
      this.$fire.auth
        .sendPasswordResetEmail(this.auth.email)
        .then(function () {
          let resetText = "reset link sent to " + this.auth.email;
          console.log(resetText);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
  },
};
</script>
