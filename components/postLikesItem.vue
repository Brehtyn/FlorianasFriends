<template>
  <div class="like_feed_item">
    <img src="~assets/profile.svg" />
    <h3>likes.user_name</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.like_feed_item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
}
.like_feed_item > img {
  width: 60px;
  height: auto;
  margin-left: 20px;
}
.like_feed_item > h3 {
  padding-left: 20px;
}
</style>