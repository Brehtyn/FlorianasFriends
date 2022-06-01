<template>
  <div>
    <div class="postComments_modal">
      <postCommentsChild />
       <postCommentsChild />
        <postCommentsChild />
         <postCommentsChild />
          <postCommentsChild />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.postComments_modal {
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