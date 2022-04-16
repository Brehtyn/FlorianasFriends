<template>
  <div>
    <h1>Logged In Dashboard</h1>
    <p>You are now logged in as {{$nuxt.$fire.auth.currentUser.email}}</p>
    <br><br><br>
    <div>
    <h2>Pet Name: {{pets.pet_name}}</h2>
    <h2>Animal: {{pets.animal}}</h2>
    <h3>Comments</h3>
    <div>
    <p v-for="comment in pets.leads" :key="comment">
    {{ comment }}
    </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pets: null
    }
  },

  async asyncData ({ app, error }) {
    const db = app.$fire.firestore

    try {
      const documentSnapshot = await db.collection('pets').doc(
        "7E8jRCnF1ZKZnnWXnKfo").get()
      if (!documentSnapshot.exists) {
        error({ statusCode: 404, message: 'Document does not exist' })
        return
      }

      // Returned value is merged with the values defined in data().
      return {
        pets: {
          id: documentSnapshot.id,
          ...documentSnapshot.data()
        }
      }
      
    } catch (e) {
      error({ statusCode: 404, message: 'Pets not found' })
    }
  }
}
</script>
