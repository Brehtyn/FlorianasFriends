<template>
  <div>
    <h1>Logged In Dashboard</h1>
    <p>You are now logged in as {{$nuxt.$fire.auth.currentUser.email}}</p>
    <button @click="$router.push('/auth/signout')">Logout</button>
  </div>
</template>

<script>
export default {

}
</script>
