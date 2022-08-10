<template>
  <div>
    <div class="wrapper"> 
        {{ $nuxt.$fire.auth.currentUser.email }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>