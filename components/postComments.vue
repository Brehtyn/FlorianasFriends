<template>
  <div>
    <div class="PostComments_modal">
      <!-- Limit number of comments displayed to a few at max if avaliable -->
      <div v-for="(comment, index) in comments" :key="`comment-${index}`">
        <PostCommentsChild :comment="comment"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comments']
};
</script>

<style scoped>
.PostComments_modal {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: fit-content;
  padding: 0;
  z-index: 1;
}
</style>