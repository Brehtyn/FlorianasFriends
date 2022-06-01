<template>
  <div>
    <div @click="$emit('close-PostInfo')" class="bg"></div>
    <div class="PostInfo_modal">
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
.PostInfo_modal {
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