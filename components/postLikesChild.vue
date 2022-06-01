<template>
  <div class="PostLikesChild">
    <img src="~assets/profile.svg" />
    <h3>likes.user_name</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.PostLikesChild {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
}
.PostLikesChild > img {
  width: 60px;
  height: auto;
  margin-left: 20px;
}
.PostLikesChild > h3 {
  padding-left: 20px;
}
</style>