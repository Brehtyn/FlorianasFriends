<template>
  <section>
    <div class="form-box rounded-3xl p-10 border-2">
      <Nuxt-Img class="auth_page_pic" src="logo.png" />
      <h1 class="auth_page_title">Sign In</h1>
      <form
        class="flex flex-col items-center justify-between"
        @submit.stop.prevent="login"
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
        <div class="pt-2">
          <label>Password</label>
          <div>
            <ValidationProvider rules="required" v-slot="{ errors }">
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
            @click="() => login()"
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
            Log In
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
            Don't have an account? Get started
            <NuxtLink class="signup-link text-blue-600" to="/auth/signup"
              >here</NuxtLink
            >.
          </p>
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
            Forgot your password? Reset it
            <NuxtLink class="signup-link text-blue-600" to="/auth/resetpass"
              >here</NuxtLink
            >.
          </p>
        </div>
      </form>
    </div>

    <GeneralAlert
      v-show="showGeneralAlert"
      :message="error_message"
      @close-GeneralAlert="showGeneralAlert = false"
    />
  </section>
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
        password: "",
      },
      showGeneralAlert: false,
      error_message: "There has been an error.",
    };
  },
  methods: {
    login() {
      //used in Nuxt to pass error messages from nested function to parent function
      var vm = this;

      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {
          vm.error_message = error;
          vm.showGeneralAlert = true;
          console.log(error.message);
        })
        .then((user) => {
          //we are signed in
          console.log(user.user);
          $nuxt.$router.push("/");
        });
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