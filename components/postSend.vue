<template>
  <div>
    <div @click="$emit('close-postSend')" class="bg"></div>
    <div class="postSend_modal">
      <ul class="postSend_menu">
        <li>
          <img src="~assets/simple_twitter.svg" />
          <a href="#"> Tweet It </a>
        </li>
        <li>
          <img src="~assets/simple_facebook.svg" />
          <a href="#"> Share on Facebook </a>
        </li>
        <li>
          <img src="~assets/simple_instagram.svg" />
          <a href="#"> Post on Instagram </a>
        </li>
        <li>
          <img src="~assets/simple_mail.svg" />
          <a href="#"> Send via Email </a>
        </li>
        <li>
          <img src="~assets/simple_message.svg" />
          <a href="#"> Send as Message </a>
        </li>

        <li>
          <img src="~assets/simple_copy.svg" />
          <a href="#"> Copy Link </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
.postSend_modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -10%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 2px solid rgba(138, 138, 138, 0.5);
  padding: 0;
  z-index: 50;
}
.postSend_menu {
  list-style: none;
  padding: 0 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.postSend_menu > li > img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  margin-top: 1px;
  float: left;
}
.postSend_menu > li:after,
.postSend_menu > li:first-of-type:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--clr-whiteborder);
  margin: 0.5rem 0;
}
</style>