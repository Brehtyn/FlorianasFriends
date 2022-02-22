<template>
  <section>
    <div>
      <div>
        <div>
          <form @submit.stop.prevent="login"> 
            <div>
              <label>Email</label>
              <div>
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="auth.email"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="auth.password"
                />
              </div>
            </div>
            <div>
              <button type="submit" @click="() => login()">Log In</button>
                <button type="submit" @click="() => forgotPassword()">Forgot Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
    return {
      auth: {
        email: '',
        password: ''
      }
    }
  },
methods: {
    login() {
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        console.log(error.message)
      }).then((user) => {
        //we are signed in
        console.log(user.user)
        $nuxt.$router.push('/')
      })
    },
    forgotPassword() {
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
      .then(function (){
        let resetText = 'reset link sent to ' + this.auth.email
        console.log(resetText)
      })
      .catch(function (error) {
        console.log(error.message)
      })

    }
}
}
</script>
