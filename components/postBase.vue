<template>
  <div>
    <PostSend v-show="showPostSend" @close-PostSend="showPostSend = false" />
    <PostInfo v-show="showPostInfo" @close-PostInfo="showPostInfo = false" />
    <PostLikes
      v-show="showPostLikes"
      @close-PostLikes="showPostLikes = false"
    />

    <div class="PostBase_modal post_style shadow shadow-lg">
      <div class="pet_data">
        <div class="profile_pic">
          <img src="~assets/profile.svg" />
        </div>

        <div class="px-8">
          <div>
            <h2>
              <b>
                <span> Tragic Pet </span>
                <span> from </span>
                <span> Grieving Parent </span>
              </b>
            </h2>
          </div>
          <div>
            <h3>
              <span> Lost on </span>
              <span> This Date </span>
            </h3>
          </div>
        </div>
      </div>
      <button @click="showPostInfo = true">
        <div class="picture_area">
          <img src="~/assets/footer_backdrop.jpg" />
        </div>
      </button>
      <div class="post_buttons">
        <span>
          <button @click="liked = true" v-if="!liked">
            <img src="~assets/heart.svg" />
          </button>
          <button @click="liked = false" v-if="liked">
            <img src="~assets/heart_filled.svg" />
          </button>
          <button @click="showPostComments = true">
            <img src="~assets/chat.svg" />
          </button>
        </span>
        <span>
          <button @click="showPostInfo = true">
            <img src="~assets/info.svg" />
          </button>
          <button @click="saved = true" v-if="!saved">
            <img src="~assets/save.svg" />
          </button>
          <button @click="saved = false" v-if="saved">
            <img src="~assets/save_filled.svg" />
          </button>
          <button @click="showPostSend = true">
            <img src="~assets/send.svg" />
          </button>
        </span>
      </div>

      <div class="px-4">
        <div class="p-2">
          <button class="general_button" @click="showPostLikes = true">
            <span> <b> Loved by </b> </span>
            <span> Example Name, Example Name 2, Examp... </span>
          </button>
        </div>

        <div class="p-2">
          <button class="general_button" @click="showPostComments = true">
            <h2><b> Comments | Leads </b></h2>

            <div>
              <p>Comments go here!</p>
              <PostComments
                v-show="showPostComments"
                @close-PostComments="showPostComments = false"
              />
            </div>
          </button>
          <input class="comment_input" placeholder="Type your comment here." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostSend from "~/components/PostSend.vue";
import PostInfo from "~/components/PostInfo.vue";
import PostLikes from "~/components/PostLikes.vue";
import PostComments from "~/components/PostComments.vue";

export default {
  components: {
    PostSend,
    PostInfo,
    PostLikes,
    PostComments,
  },
  data() {
    return {
      liked: false,
      saved: false,
      showPostSend: false,
      showPostInfo: false,
      showPostLikes: false,
      showPostComments: false,
    };
  },
};
</script>

<style scoped>
.post_style {
  width: 100%;
  max-width: 900px;
  margin: .5rem auto;
}

.PostBase_modal {
  display: flex;
  flex-direction: column;
}

.pet_data {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
}
.profile_pic {
  width: 80px;
  height: 80px;
}

.picture_area {
  width: 100%;
  height: fit-content;
}

.post_buttons {
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.post_buttons > span {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.post_buttons > span > button > img {
  height: 30px;
  width: fit-content;
  margin: 0 1rem 0 0;
}
.post_buttons > span > button:hover {
  opacity: 0.7;
}

.comment_input {
  width: 100%;
  margin-top: 1rem;
  border: 2px solid rgba(138, 138, 138, 0.5);
  border-radius: 8px;
  padding: 0 10px;
  margin-bottom: 10px;
}
</style>