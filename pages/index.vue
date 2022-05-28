<template>
  <div class="index_background align-content-center">
    <div class="index_dashboard post_style">
      <h1>Logged In Dashboard</h1>
      <p>You are now logged in as {{ $nuxt.$fire.auth.currentUser.email }}</p>
    </div>

    <div class="individual_post post_style shadow shadow-lg">
      <div class="pet_data">
        <div class="profile_pic">
          <img src="~assets/profile.svg" />
        </div>

        <div class="pet_data_textarea">
          <div>
            <h2>
              <span> {{ pets.pet_name }} </span>
              <span> from </span>
              <span> {{ pets.user_name }} </span>
            </h2>
          </div>
          <div>
            <h3>
              <span> Lost on </span>
              <span> {{ pets.date_lost }} </span>
            </h3>
          </div>
        </div>
      </div>

      <div class="picture_area">
        <img src="~/assets/footer_backdrop.jpg" />
      </div>

      <div class="post_buttons">
        <span>
          <img src="~assets/heart.svg" />
          <img src="~assets/chat.svg" />
        </span>
        <span>
          <img src="~assets/info.svg" />
          <img src="~assets/save.svg" />
          <img src="~assets/send.svg" />
        </span>
      </div>

      <div class="post_data">
        <div class="post_numbers">
          <span> Loved by </span>
          <span> Example Name, Example Name 2, Examp... </span>
        </div>
        <div class="post_comments">
          <h2>Comments | Leads</h2>
   
          <div>
            <p v-for="comment in pets.leads" :key="comment">
              {{ comment }}
            </p>
          </div>
 
          <input class="comment_input" placeholder="Type your comment here."> <input/>  
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.index_background {
  background-color: var(--clr-offwhite);
  height: fit-content;
}

.post_style {
  width: 96%;
  max-width: 900px;
  margin: .4rem 0 .8rem 0;
  background-color: #ffffff;
  border-radius: 14px;
  border: 2px solid rgba(138, 138, 138, 0.5);
  padding: 0;
}

.index_dashboard {
  text-align: center;
}

.individual_post {
  display: flex;
  flex-direction: column;
}

.pet_data {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
}
.profile_pic {
  width: 80px;
  height: 80px;
}

.pet_data_textarea {
  padding: 0 2rem;
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
.post_buttons > span > img {
    height: 30px;
    width: fit-content;
}
.post_buttons > span > img:not(:last-child) {
    padding: 0 2rem 0 0;
}

.post_data {
  padding: 0 1rem;
}
.post_numbers {
  padding: 0.5rem 0;
}
.post_comments {
  padding: 0.5rem 0;
}
.comment_input {
  width: 100%;
  margin-top: 1rem;
  border: 2px solid rgba(138, 138, 138, 0.5);
  border-radius: 8px;
  padding: 0 10px;
}
</style>

<script>
export default {
  data() {
    return {
      pets: null,
    };
  },

  async asyncData({ app, error }) {
    const db = app.$fire.firestore;

    try {
      const documentSnapshot = await db
        .collection("pets")
        .doc("7E8jRCnF1ZKZnnWXnKfo")
        .get();
      if (!documentSnapshot.exists) {
        error({ statusCode: 404, message: "Document does not exist" });
        return;
      }

      // Returned value is merged with the values defined in data().
      return {
        pets: {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        },
      };
    } catch (e) {
      error({ statusCode: 404, message: "Pets not found" });
    }
  },
};
</script>
