<template>
  <div>
    <PostInfo v-show="showPostInfo" @close-PostInfo="showPostInfo = false" />
    <!-- Possibly Pass in User names instead of IDs Later -->
    <PostLikes
      v-show="showPostLikes"
      @close-PostLikes="showPostLikes = false"
      :userNames="post.likes"
    />
    <PostCommentModal
      v-show="showPostCommentModal"
      @close-PostCommentModal="showPostCommentModal = false"
      :comments="post.comments"
    />
    <PostSend v-show="showPostSend" @close-PostSend="showPostSend = false" />
    <!-- :userIDs="pet.likes_users_id" -->

    <div class="PostBase_modal post_style shadow shadow-lg">
      <div class="pet_data">
        <div class="profile_pic">
          <img src="~assets/defaults/profile.svg" />
        </div>

        <div class="px-8">
          <div>
            <h2>
              <b>
                <span> {{ post.petInformation.name }} </span>
              </b>
              <span> from </span>
              <b>
                <span> {{ post.userName }} </span>
              </b>
            </h2>
          </div>
          <div>
            <h3>
              <span> Lost on </span>
              <span> {{ post.petInformation.date_lost }} </span>
            </h3>
          </div>
        </div>
      </div>

      <button @click="showPostInfo = true">
        <div class="picture_area">
          <Nuxt-Img src="defaults/dog.jpg" />
        </div>
      </button>

      <div class="post_buttons">
        <span>
          <button
            @click="liked = true"
            v-if="!liked"
            class="transition_animation"
          >
            <img src="~assets/heart.svg" />
          </button>
          <button
            @click="liked = false"
            v-if="liked"
            class="transition_animation"
          >
            <img src="~assets/heart_filled.svg" />
          </button>
          <button @click="showPostCommentModal = true">
            <img src="~assets/chat.svg" />
          </button>
        </span>
        <span>
          <button @click="showPostInfo = true">
            <img src="~assets/info.svg" />
          </button>
          <button
            @click="saved = true"
            v-if="!saved"
            class="transition_animation"
          >
            <img src="~assets/save.svg" />
          </button>
          <button
            @click="saved = false"
            v-if="saved"
            class="transition_animation"
          >
            <img src="~assets/save_filled.svg" />
          </button>
          <button @click="showPostSend = true">
            <img src="~assets/send.svg" />
          </button>
        </span>
      </div>

      <div class="px-4">
        <div class="p-2 pt-0">
          <button class="general_button" @click="showPostLikes = true">
            <span> Loved by </span>
            <span
              id="liked_by_users"
              v-for="user in post.likes"
              :key="user.user_username"
            >
              <b>{{ user.user_username }}</b>
            </span>
            <!-- <span> <b v-for="userIDs in pet.likes_users_id" :key="`${userIDs}`"> {{userIDs}} </b> </span> -->
          </button>
        </div>

        <div class="p-2 pt-0">
          <div class="pb-2">
            <p>
              <span>
                <b> {{ post.userName }} </b>
              </span>
              Lets write a whole description about what happened to this dog it
              was log on such and such day so tragic
            </p>
          </div>

          <!-- For loop for comment and users that comment -->
          <!-- Need to import user data to get name from user id -->
          <PostComments class="w-100" :comments="post.comments" />

          <button class="general_button" @click="showPostCommentModal = true">
            <!-- Need to add prop for # off comments and leads and pass here -->
            <h2 id="view_comments">View all # lead(s) & # comment(s)</h2>
          </button>

          <div class="postcommentAction">
            <!-- Need to export comment / lead to post bucket -->
            <button @click="showPostCommentModal = true" class="comment_button">
              Comment Support
            </button>
            <button @click="showPostCommentModal = true" class="lead_button">
              Report Sighting
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostSend from "~/components/postSend.vue";
import PostInfo from "~/components/postInfo.vue";
import PostLikes from "~/components/postLikes.vue";
import PostComments from "~/components/postComments.vue";
import PostCommentModal from "~/components/postCommentModal.vue";

export default {
  components: {
    PostSend,
    PostInfo,
    PostLikes,
    PostComments,
    PostCommentModal,
  },
  // Possibly compute users here and then just pass down
  // List of user names instead of IDs and then doing it from there
  props: ["post", "users"],
  data() {
    return {
      liked: false,
      saved: false,
      showPostSend: false,
      showPostInfo: false,
      showPostLikes: false,
      showPostCommentModal: false,
    };
  },
  computed: {
    mapUsersToIDs() {
      const arrayOfUsersNames = [];

      //iterate through array of ids
      //for each id use find() to search for user in array of users
      //if user exists then push user into arrayofUserNames
      this.pet.likes_users_id.forEach((id) => {
        const foundUser = this.users.users.find((obj) => obj.id === id);
        if (foundUser) {
          arrayOfUsersNames.push(foundUser.name);
        }
      });
      return arrayOfUsersNames;
    },
  },
};
</script>

<style scoped>
.post_style {
  width: 100%;
  max-width: 700px;
  margin: 0.5rem auto;
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
.post_buttons > span > button:last-of-type > img {
  margin: 0;
}
.post_buttons > span > button:hover {
  opacity: 0.7;
}
.comment_structure {
  padding-bottom: 1rem;
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

#liked_by_users:after {
  content: ", ";
}
#liked_by_users:nth-last-child(2):after {
  content: ", and ";
}
#liked_by_users:last-child:after {
  content: "";
}

#view_comments {
  color: var(--clr-darkgrey);
}

.postcommentAction {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1rem 0;
}
.postcommentAction > button {
  width: 100%;
  padding: 0.8rem;
  border-radius: 12px;
}
.postcommentAction > button:hover {
  opacity: 77%;
}
.postcommentAction > button:active {
  opacity: 77%;
}

.transition_animation {
  animation: transition-excite 0.4s ease-out;
}
</style>