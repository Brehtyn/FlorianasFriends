<template>
    <nav class="w-100 shadow-lg text-lg shadow bg-gray-50">
      <div class="container mx-auto px-4">
        <ul class="flex justify-around p-2 items-center">
          <li class="hover:opacity-80">
            <NuxtLink to="landing.vue">
              <img class="w-16" src="../assets/logo.png" />
            </NuxtLink>
          </li>
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
          <li class="hover:opacity-80">
            <button><img class="max-w-xs" src="~/assets/menu.svg" /></button>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>