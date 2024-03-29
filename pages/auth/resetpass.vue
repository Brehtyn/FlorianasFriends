<template>
  <section>
    <div class="form-box rounded-3xl p-10 border-2">
      <Nuxt-Img class="auth_page_pic" src="logo.png" />
      <h1 class="auth_page_title">Password Reset</h1>
      <form class="flex flex-col items-center justify-between">
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
            @click="() => forgotPassword()"
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
            Send Reset Link
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
    </div>

    <GeneralAlert
      v-show="showGeneralAlert"
      :message="alert_message"
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
      },
      showGeneralAlert: false,
      alert_message: "There has been an error.",
    };
  },
  methods: {
    forgotPassword() {
      //used in Nuxt to pass error messages from nested function to parent function
      var vm = this;

      this.$fire.auth
        .sendPasswordResetEmail(this.auth.email)
        .then(function () {
          let resetText = "Reset link has been emailed to " + this.auth.email;
          console.log(resetText);
          vm.alert_message = resetText;
          vm.showGeneralAlert = true;
        })
        .catch(function (error) {
          console.log(error.message);
          vm.alert_message = error;
          vm.showGeneralAlert = true;
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