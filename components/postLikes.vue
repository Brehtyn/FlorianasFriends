<template>
  <div>
    <div @click="$emit('close-postLikes')" class="bg"></div>
    <div class="postLikes_modal">
      <div class="like_title">
        <h3><b> Liked By </b></h3>
        <button @click="$emit('close-postLikes')">Close</button>
      </div>
      <div class="like_feed">
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        <postLikesChild />
        

      </div>
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
.postLikes_modal {
  position: fixed;
  top: 20%;
  left: 50%;
  width: 100%;
  max-width: 700px;
  height: fit-content;
  max-height: 600px;
  transform: translate(-50%, -10%);
  background-color: var(--clr-whitebg);
  border-radius: 6px;
  border: 2px solid var(--clr-whiteborder);
  padding: 0;
  z-index: 50;
  filter: drop-shadow(0 .5mm .5mm rgba(0, 0, 0, 0.5));
  overflow-y: scroll;
}
.like_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0 2rem;
}
.like_feed:before {
  content: "";
  display: block;
  width: 98%;
  height: 1px;
  background-color: var(--clr-whiteborder);
  margin: 1rem 0;
}
.like_feed {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>