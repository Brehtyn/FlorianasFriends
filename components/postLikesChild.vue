<template>
  <div class="postLikesChild">
    <img src="~assets/profile.svg" />
    <h3>likes.user_name</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.postLikesChild {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
}
.postLikesChild > img {
  width: 60px;
  height: auto;
  margin-left: 20px;
}
.postLikesChild > h3 {
  padding-left: 20px;
}
</style>