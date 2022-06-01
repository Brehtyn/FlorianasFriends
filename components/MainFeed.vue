<template>
  <div class="index_background align-content-center">
    <postSend v-show="showpostSend" @close-postSend="showpostSend = false" />
    <postInfo v-show="showpostInfo" @close-postInfo="showpostInfo = false" />
    <postLikes
      v-show="showpostLikes"
      @close-postLikes="showpostLikes = false"
    />
    <postComments
      v-show="showpostComments"
      @close-postComments="showpostComments = false"
    />

        <div class="postBase_modal post_style shadow shadow-lg">
      <div class="pet_data">
        <div class="profile_pic">
          <img src="~assets/profile.svg" />
        </div>

        <div class="px-8">
          <div>
            <h2>
              <b>
                <span> Rando Pet </span>
                <span> from </span>
                <span> Loving Owner </span>
              </b>
            </h2>
          </div>
          <div>
            <h3>
              <span> Lost on </span>
              <span> A very sad day :( </span>
            </h3>
          </div>
        </div>
      </div>
      <button @click="showpostInfo = true">
        <div class="picture_area">
          <img src="~/assets/footer_backdrop.jpg" />
        </div>
      </button>
      <div class="post_buttons">
        <span>
          <button>
            <img src="~assets/heart.svg" />
          </button>
          <button @click="showpostComments = true">
            <img src="~assets/chat.svg" />
          </button>
        </span>
        <span>
          <button @click="showpostInfo = true">
            <img src="~assets/info.svg" />
          </button>
          <button>
            <img src="~assets/save.svg" />
          </button>
          <button @click="showpostSend = true">
            <img src="~assets/send.svg" />
          </button>
        </span>
      </div>

      <div class="px-4">
        <div class="p-2">
          <button class="general_button" @click="showpostLikes = true">
            <span> <b> Loved by </b> </span>
            <span> Example Name, Example Name 2, Examp... </span>
          </button>
        </div>

        <div class="p-2">
          <button class="general_button" @click="showpostComments = true">
            <h2> <b> Comments | Leads </b> </h2>

            <div>
              <p>
                So very sad :{
              </p>
            </div>
          </button>
          <input class="comment_input" placeholder="Type your comment here." />
        </div> -->
      </div>
    </div>
  </div>
</template>


<style scoped>
.index_background {
  background-color: var(--clr-offwhite);
  height: fit-content;
}

/*Needed for index but take a copy of this for Individual Post Component*/

.post_style {
  width: 96%;
  max-width: 900px;
  margin: 0.4rem 0 0.8rem 0;
  background-color: #ffffff;
  border-radius: 14px;
  border: 2px solid rgba(138, 138, 138, 0.5);
  padding: 0;
  filter: drop-shadow(0 0.5mm 0.5mm rgba(0, 0, 0, 0.5));
}

/* Individual Post Component Start, dont forget script data below! */

.postBase_modal {
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
.general_button {
  padding: unset;
  border: unset;
  background-color: unset;
  width: 100%;
  height: 100%;
  text-align: left;
}

/* Individual Post Component End, dont forget script data below! */
</style>

<script>
import postSend from "~/components/postSend.vue"; // Individual Post Component
import postInfo from "~/components/postInfo.vue"; // Individual Post Component
import postLikes from "~/components/postLikes.vue"; // Individual Post Component
import postComments from "~/components/postComments.vue"; // Individual Post Component

export default {
  components: {
    postSend, // Individual Post Component
    postInfo, // Individual Post Component
    postLikes, // Individual Post Component
    postComments, // Individual Post Component
  },
    data() {
    return {
      showpostSend: false, // Individual Post Component
      showpostInfo: false, // Individual Post Component
      showpostLikes: false, // Individual Post Component
      showpostComments: false, // Individual Post Component
      pets: null,
    };
  },
}
</script>

<style>

</style>