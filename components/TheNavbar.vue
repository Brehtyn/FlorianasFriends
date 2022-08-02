<template>
  <nav class="w-100 shadow-lg text-gray-700 text-lg shadow">
    <ul class="flex justify-between mx-10 p-2 items-center">
      <li class="hover:opacity-80">
        <NuxtLink to="/auth/landing">
          <img class="w-14" src="~assets/logo.png" />
        </NuxtLink>
      </li>
      <ul class="flex row w-full justify-evenly p-2" id="mobile_drop_menu">
        <li class="hover:opacity-80">
          <NuxtLink to="/auth/landing"> Home </NuxtLink>
        </li>
        <li class="hover:opacity-80">
          <NuxtLink to="/auth/tips"> Tips </NuxtLink>
        </li>
        <li class="hover:opacity-80">
          <NuxtLink to="/auth/mission"> Mission </NuxtLink>
        </li>
        <li class="hover:opacity-80">
          <NuxtLink to="/auth/donate"> Donate </NuxtLink>
        </li>
      </ul>
      <li class="left-border">
        <div class="flex row w-full pl-4">
          <button class="w-7 hover:opacity-60 mx-4">
            <img src="~assets/search.svg" />
          </button>
          <button @click="showProfilebar = true" class="w-12 hover:opacity-60 mx-2">
            <img src="~assets/profile.svg" />
          </button>
        </div>
      </li>
    </ul>
    <TheProfilebar v-show="showProfilebar" @close-Profilebar="showProfilebar = false" />
  </nav>
</template>

<script>
import TheProfilebar from "~/components/TheProfilebar.vue";

export default {
  components: { TheProfilebar },
  data() {
    return {
      showProfilebar: false,
    };
  },
};
</script>

<style>
.left-border {
  border-left: 1px solid var(--clr-whiteborder);
}

@media screen and (max-width: 400px) {
  nav {
    display: none;
  }
}


</style>