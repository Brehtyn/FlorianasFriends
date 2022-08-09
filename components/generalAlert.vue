<template>
  <div>
    <div @click="$emit('close-GeneralAlert')" class="bg"></div>
    <div class="generalAlert_modal">
      <p class="generalAlert">{{ message }}</p>
      <button class="exit_button" @click="$emit('close-GeneralAlert')">
        Okay
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "A place for messages",
    },
  },
};
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
  border-radius: 10px;
}
.generalAlert_modal {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -10%);
  background-color: var(--clr-whitebg);
  border-radius: 6px;
  border: 2px solid var(--clr-whiteborder);
  padding: 0;
  z-index: 150;
  filter: drop-shadow(0 0.5mm 0.5mm rgba(0, 0, 0, 0.5));
  display: flex;
  flex-direction: column;
  align-items: center;
}
.generalAlert {
  padding: 2rem;
}

.exit_button {
  background-color: var(--clr-whiteborder);
  border: 1px solid var(--clr-whiteborder);
  border-radius: 8px;
  padding: .5rem 1rem;
  margin-bottom: 1rem;
}
.exit_button:hover {
  opacity: 0.7;
}
</style>