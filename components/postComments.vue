<template>
  <div>
    <div @click="$emit('close-postComments')" class="bg"></div>
    <div class="postComments_modal">
      Area for post's comments.
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
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.67);
}
.postComments_modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -10%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 2px solid rgba(138, 138, 138, 0.5);
  padding: 0;
  z-index: 50;
}
</style>