<template>
  <div @click="$emit('close-Profilebar')" class="bg">
    <div class="profilebar_modal">
      <button @click="$emit('close-Profilebar')" class="flex row space-around p-6 hover:opacity-80">
        <img class="-mt-2" src="~assets/right_arrow.svg" />
        <p class="px-5">Close</p>
      </button>
      <div class="profilebar_contents">
        <img class="w-1/4" src="~assets/defaults/profile.svg" />
        <span> User Logged In </span>
        <hr />
        <nav>
          <ul>
            <li>Profile</li>
            <li>Posts</li>
            <li>Leads</li>
            <li>Settings</li>
            <li class="hover:opacity-80">
              <button @click="$router.push('/auth/signout')">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.67);
  z-index: 10;
}
.profilebar_modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  height: 100%;
  z-index: 50;
  background-color: var(--clr-whitebg);
  border-left: 2px solid var(--clr-whiteborder);
  filter: drop-shadow(0 -6mm 4mm rgba(0, 0, 0, 0.5));
  animation: left-slide-in 0.5s ease-in;
}
.profilebar_contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.profilebar_contents > nav > ul > li {
  padding: .7rem 0;
}

hr {
  width: 50%;
  border: 0;
  height: 1px;
  background-color: var(--clr-whiteborder);
}
</style>
