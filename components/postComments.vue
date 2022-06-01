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
  max-height: 800px;
  padding: 0;
  z-index: 1;
  overflow-y: scroll;
}
</style>