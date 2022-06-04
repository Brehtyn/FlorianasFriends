<template>
  <div>
    <div class="PostComments_modal">
      <PostCommentsChild />
       <PostCommentsChild />
        <PostCommentsChild />
         <PostCommentsChild />
          <PostCommentsChild />
    </div>
  </div>
</template>

<script>
export default {};
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