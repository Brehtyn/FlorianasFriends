<template>
  <div class="index_background align-content-center">
    <div class="align-text-center post_style">
      <h1>Logged In Dashboard</h1>
      <p>You are now logged in as {{ $nuxt.$fire.auth.currentUser.email }}</p>
    </div>


      <template v-if="pets">
        <div v-for="pet in pets.pets" :key="pet.id">
            <PostBase :pet="pet"/>
        </div>
      </template>
    
  </div>
</template>

<style scoped>
.index_background {
  background-color: var(--clr-offwhite);
  height: fit-content;
}
.post_style {
  width: 100%;
  max-width: 700px;
  margin: .5rem auto;
  padding: 1rem;
}

@media screen and (min-width: 1370px) {
  .post_style {
    position: absolute;
    top: 66px;
    right: calc(370px + 50%);
    width: calc(23% - 20px);
    max-width: 600px;
    text-align: left;
  }
}
</style>

<script>
import pets from '../data/petData'

export default {

    data() {

    return {
      pets: null,
    }
  },
  mounted () {
      this.pets = pets
    }
  
  // data() {
  //   return {
  //     pets: null,
  //   };
  // },

  // async asyncData({ app, error }) {
  //   const db = app.$fire.firestore;

  //   try {
  //     const documentSnapshot = await db
  //       .collection("pets")
  //       .doc("7E8jRCnF1ZKZnnWXnKfo")
  //       .get();
  //     if (!documentSnapshot.exists) {
  //       error({ statusCode: 404, message: "Document does not exist" });
  //       return;
  //     }

  //     // Returned value is merged with the values defined in data().
  //     return {
  //       pets: {
  //         id: documentSnapshot.id,
  //         ...documentSnapshot.data(),
  //       },
  //     };
  //   } catch (e) {
  //     error({ statusCode: 404, message: "Pets not found" });
  //   }
  // },
};
</script>
