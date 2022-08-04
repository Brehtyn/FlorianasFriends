<template>
  <div>
    <div @click="$emit('close-PostInfo')" class="bg"></div>
    <div class="PostInfo_modal">
      <div class="info_title">
        <h3><b> Post Info : </b></h3>
        <button @click="$emit('close-PostInfo')">Close</button>
      </div>
      <hr />
      <div class="info_content">
        <div class="info_content_title">
          <nuxt-img id="alert-badge" :src="'alerts/' + lost_type + '.png'" />
          <div class="title_split">
            <h1>EMERGENCY ALERT ({{ lost_type }})</h1>
            <h2>Missing {{ pet_species }} : {{ pet_name }}</h2>
          </div>
          <nuxt-img
            id="location-badge"
            :src="'us-states/' + location_lost + '.png'"
          />
        </div>

        <div class="info_body">
          <div>
            <p>{{ desc }}</p>
          </div>
          <nuxt-img :src="'species/' + pet_species + '.png'" />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105206.94055770696!2d-114.3810070111701!3d34.51006092231239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1f216ee89e023%3A0x98de83cfb72ad3e2!2sLake%20Havasu%20City%2C%20AZ!5e0!3m2!1sen!2sus!4v1659394689084!5m2!1sen!2sus"
          class="map_area"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div class="info_picture_gallery">
          <nuxt-img :src="image" :alt="alt" />
          <nuxt-img :src="image" :alt="alt" />
          <nuxt-img :src="image" :alt="alt" />
        </div>

        <div class="postcommentAction">
          <!-- Need to export comment / lead to post bucket -->
          <button class="comment_button">Comment Support</button>
          <button class="lead_button">Report Sighting</button>
        </div>

        <div class="info_footer">
          Posted on: {{date_posted}} | Page Url: {{url}}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lost_bool: {
      type: Boolean,
      default: true,
    },
    lost_type: {
      type: String,
      default: "Missing",
    },
    location_lost: {
      type: String,
      default: "Arizona",
    },
    date_lost: {
      type: Date,
      default: "2020-01-01",
    },
    pet_name: {
      type: String,
      default: "Pet Name",
    },
    pet_species: {
      type: String,
      default: "Dog_Golden_Retriever",
    },
    desc: {
      type: String,
      default:
        "Detailed information about the lost pet including description, name, whereabouts, and more.",
    },
    image: {
      type: String,
      default: "defaults/dog.jpg",
    },
    alt: {
      type: String,
      default: "Picture of a lost pet in need of your help!",
    },
    url: {
      type: String,
      default: "#",
    },
    date_posted: {
      type: Date,
      default: "2020-01-01",
    },
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.67);
}
.PostInfo_modal {
  position: fixed;
  top: 5%;
  left: 2.5%;
  width: 95%;
  height: fit-content;
  max-height: 95%;
  max-width: 1400px;
  background-color: var(--clr-whitebg);
  border-radius: 6px 6px 0 0;
  padding: 0;
  z-index: 50;
  filter: drop-shadow(0 0.5mm 0.5mm rgba(0, 0, 0, 0.5));
  overflow-y: auto;
}
@media screen and (max-width: 600px) {
  .PostInfo_modal {
    left: 0;
    width: 100%;
  }
}
@media screen and (min-width: 1450px) {
  .PostInfo_modal {
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0);
  }
}

.info_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 1rem;
}
hr {
  margin: 0 1rem;
  border-color: var(--clr-whiteborder);
}

.info_content {
  margin: 1rem;
}

.info_content_title {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
}

#alert-badge,
#location-badge {
  width: 50px !important;
  margin: 0;
  padding: 0;
  height: auto;
}
#alert-badge {
}
#location-badge {
}

.title_split {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  border-left: 8px solid var(--clr-accent);
}
.title_split > h1,
.title_split > h2 {
  margin: 0;
}

.info_body {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  margin: 0 1rem;
}

.info_body > div {
  width: 50%;
  height: fit-content;
}

.map_area {
  width: 100%;
  height: 40vh;
  padding: 2rem;
}

.info_picture_gallery {
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
}
.info_picture_gallery > img {
  width: calc( 50% - 2rem );
  min-width: 300px;
  height: auto;
  margin: 1rem;
}

.postcommentAction {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem auto;
  max-width: 800px;
}
.postcommentAction > button {
  width: 100%;
  padding: 0.8rem;
  border-radius: 12px;
  margin: 0 1rem;
}
.postcommentAction > button:hover {
  opacity: 77%;
}
.postcommentAction > button:active {
  opacity: 77%;
}

.info_footer {
  width: 100%;
  height: fit-content;
  text-align: center;
  margin: 1rem;
}
</style>