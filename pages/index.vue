<template>
  <div class="index_background align-content-center">
    <div class="align-text-center post_style">
      <h1>Logged In Dashboard</h1>
      <p>You are now logged in as {{ $nuxt.$fire.auth.currentUser.email }}</p>
    </div>

    <PostBase />
    <PostBase />
    
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
