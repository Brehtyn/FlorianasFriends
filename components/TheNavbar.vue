<template>
  <nav class="w-100 shadow-lg text-gray-700 text-lg shadow bg-gray-50">
    <ul class="flex justify-between mx-10 p-4 items-center">
      <li class="hover:opacity-80">
        <NuxtLink to="landing.vue">
          <img class="w-16" src="~assets/logo.png" />
        </NuxtLink>
      </li>
      <ul class="flex row w-full justify-evenly p-2">
        <li class="hover:opacity-80">
          <NuxtLink to="landing.vue"> Home </NuxtLink>
        </li>
        <li class="hover:opacity-80">
          <NuxtLink to="/"> Tips </NuxtLink>
        </li>
        <li class="hover:opacity-80">
          <NuxtLink to="/"> Mission </NuxtLink>
        </li>
        <li class="hover:opacity-80">
          <NuxtLink to="/"> Donate </NuxtLink>
        </li>
        <li class="hover:opacity-80">
          <button @click="$router.push('/auth/signout')">Logout</button>
        </li>
      </ul>
      <li class="left-border">
        <div class="flex row w-full pl-4">
          <button class="w-7 hover:opacity-60 mx-4"> 
            <img src="~assets/search.svg" />
          </button>
          <button class="w-12 hover:opacity-60 mx-2"> 
            <img src="~assets/profile.svg" />
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
  .left-border {
    border-left: 1px solid #eaeaea;
  }
</style>