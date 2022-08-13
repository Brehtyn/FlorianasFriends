<template>
  <div>
    <div @click="$emit('close-PostCommentModal')" class="bg"></div>
    <div class="PostCommentModal_modal">
      <div class="comment_title">
        <h3>
          <span> <b> Lead(s) : # </b> | <b> Comment(s) : # </b> </span>
        </h3>
        <button @click="$emit('close-PostCommentModal')">Close</button>
      </div>

      <div class="comment_feed">
        <div class="comment_item" v-for="(comment, index) in comments" :key="`comment-${index}`">
          <PostCommentModalChild :comment="comment" />
        </div>
      </div>

      <input
        class="comment_input"
        type="text"
        placeholder="Write a comment..."
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["comments"],
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
}
.PostCommentModal_modal {
  position: fixed;
  top: 5%;
  left: 50%;
  width: 100%;
  max-width: 700px;
  height: fit-content;
  max-height: 95%;
  transform: translate(-50%, 0);
  background-color: var(--clr-whitebg);
  border-radius: 6px;
  border: 2px solid var(--clr-whiteborder);
  padding: 0;
  z-index: 50;
  filter: drop-shadow(0 0.5mm 0.5mm rgba(0, 0, 0, 0.5));
}
@media screen and (min-width: 700px) {
  .PostCommentModal_modal {
    top: 10%;
    max-height: 80%;
  }
}

.comment_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0 2rem;
}
.comment_feed:before,
.comment_feed:after {
  content: "";
  display: block;
  width: 98%;
  height: 1px;
  background-color: var(--clr-whiteborder);
  margin: 1rem 0;
}
.comment_feed {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.comment_item:after {
  content: "";
  display: block;
  width: 98%;
  height: 1px;
  background-color: var(--clr-whiteborder);
  margin-bottom: 1rem;
}
.comment_item:last-of-type:after {
  display: none;
}

.comment_input {
  width: 95%;
  height: 50px;
  border: 1px solid var(--clr-whiteborder);
  border-radius: 6px;
  padding: 0.3rem 1rem;
  margin: 2%;
  outline: none;
}

.PostCommentModal_modal:after {
  content: "";
  display: block;
  width: 98%;
  height: 1px;
  background-color: var(--clr-whiteborder);
  margin: .5rem 0;
}
</style>