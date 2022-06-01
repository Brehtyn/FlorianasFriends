<template>
  <div>
    <div @click="$emit('close-postInfo')" class="bg"></div>
    <div class="postInfo_modal">
      Area for detailed dog info.
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
.postInfo_modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -10%);
  background-color: var(--clr-whitebg);
  border-radius: 6px;
  border: 2px solid var(--clr-whiteborder);
  padding: 0;
  z-index: 50;
}
</style>