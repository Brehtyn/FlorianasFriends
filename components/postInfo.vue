<template>
  <div>
    <div @click="$emit('close-PostInfo')" class="bg"></div>
    <div class="PostInfo_modal">
      <div class="info_title">
        <h3><b> Post Info : </b></h3>
        <button @click="$emit('close-PostInfo')">Close</button>
      </div>
      <div>
        <div class="info_content">
          Pet Name : Pet Species : Pet Breed : Pet Color :
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105206.94055770696!2d-114.3810070111701!3d34.51006092231239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1f216ee89e023%3A0x98de83cfb72ad3e2!2sLake%20Havasu%20City%2C%20AZ!5e0!3m2!1sen!2sus!4v1659394689084!5m2!1sen!2sus"
          class="map_area"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>{{ desc }}</p>
        <nuxt-img :src="image" :alt="alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "dog.jpg",
    },
    alt: {
      type: String,
      default: "Picture of a lost pet in need of your help!",
    },
    url: {
      type: String,
      default: "#",
    },
    map: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "Helping Others",
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
  overflow-x: hidden;
}
@media screen and (max-width: 400px) {
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
}
.map_area {
  width: 100%;
  height: fit-content;
  border: 0.5px solid var(--clr-whiteborder);
}
</style>