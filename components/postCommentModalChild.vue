<template>
  <div class="PostCommentModalChild">
    <div class="comment_structure">
      <div>
        <img src="~assets/profile.svg" height="16p" width="auto" />
      </div>
      <p><b>  </b></p>
      <span> <b> {{comment.user_username}} </b> | <b> {{lead_bool}} </b> </span>
      <p>{{comment.comment}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      required: true
    },
    // determines if comment is a lead or not
    lead_bool: {
      type: String,
      required: true,
      default: false,
    }
  }
};
</script>

<style scoped>
.PostCommentModalChild {
  width: 100%;
  padding: .5rem;
  margin-bottom: 0.5rem;
}
/* Profile Picture */
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