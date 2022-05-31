<template>
  <div class="align-content-center">
    <h1>Logged In Dashboard</h1>
    <p>You are now logged in as {{ $nuxt.$fire.auth.currentUser.email }}</p>

    <br /><br /><br />

    <div class="individual_post">

      <div class="pet_top_wrapper">

        <div class="pet_data_area">
          
          <div class="pet_data">
            <div class="profile_pic">
              <img class="" src="~assets/profile.svg" />
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

          <div class="pet_comments">
            <h2>Comments:</h2>
            <div>
              <p v-for="comment in pets.leads" :key="comment">
                {{ comment }}
              </p>
            </div>
          </div>

        </div>

        <div class="pet_picture_area"> <img class="pet_picture" src="~/assets/footer_backdrop.jpg"/> </div>

      </div>

      <div class="pet_numbers"></div>

    </div>

  </div>
</template>

<style>
.individual_post {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  border-left: 2px solid rgba(0, 0, 0, 0.5);
  border-right: 2px solid rgba(0, 0, 0, 0.5);
  border-top: 2px solid rgba(138, 138, 138, 0.5);
  border-bottom: 2px solid rgba(138, 138, 138, 0.5);
}
.individual_post:hover {
  background-color: #f5f5f5;
}

.pet_top_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.pet_data {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.profile_pic {
  width: 80px;
  height: 80px;
}
.pet_data_area {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pet_data_textarea {
  padding: 0 2rem;
}
.pet_data_comments {

}

.pet_picture_area {
  width: 30%;
  height: 100%;
}
.pet_picture {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.pet_post_numbers {

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
