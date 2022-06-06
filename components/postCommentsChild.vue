<template>
  <div class="PostCommentsChild">
    <div class="comment_structure">
      <div>
        <img src="~assets/profile.svg" height="16p" width="auto" />
      </div>
      <p><b> Commenter Username: {{comment.user_id}} </b></p>
      <p>{{comment.comment}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment"]
};
</script>

<style scoped>
.PostCommentsChild {
  width: 100%;
  padding: 0 0 0.5rem 0;
  margin-bottom: 0.5rem;
}
.comment_structure > div {
  width: 35px;
  height: 35px;
  float: left;
  margin: 0.5rem calc(10px + 0.5rem) 0 0.5rem;
}
.comment_structure > p {
  width: 100%;
  height: fit-content;
}
</style>