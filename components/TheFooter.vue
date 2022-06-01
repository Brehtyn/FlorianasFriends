<template>
  <div class="footer_image">
    <footer class="text-gray-200 w-100 bg-gray-900 p-14">
      <div class="container-split-50 mb-6">
        <div class="accented-text w-1/2 text-4xl max-w-prose" id="footer_section">
          Help Reunite a Family Today
        </div>
        <nav class="w-1/2 pl-12" id="footer_section">
          <span class="accented-text text-2xl">Links</span>
          <ul>
            <li class="mt-6 mb-2">
              <NuxtLink to="/auth/landing"> Home </NuxtLink>
            </li>
            <li class="mb-2">
               <NuxtLink to="/auth/tips"> Tips </NuxtLink>
            </li>
            <li class="mb-2">
               <NuxtLink to="/auth/mission"> Mission </NuxtLink> 
            </li>
            <li class="mb-2">
               <NuxtLink to="/auth/donate"> Donate </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container-split-50 mb-6">
        <nav class="w-1/2"  id="footer_section">
          <span class="accented-text text-2xl">Resources</span>
          <ul>
            <li class="mt-6 mb-2">
              <NuxtLink to="/auth/landing"> Home </NuxtLink>
            </li>
            <li class="mb-2">
               <NuxtLink to="/auth/tips"> Tips </NuxtLink>
            </li>
            <li class="mb-2">
               <NuxtLink to="/auth/mission"> Mission </NuxtLink> 
            </li>
            <li class="mb-2">
               <NuxtLink to="/auth/donate"> Donate </NuxtLink>
            </li>
          </ul>
        </nav>
        <nav class="w-1/2 pl-12" id="footer_section">
          <span class="accented-text text-2xl">Contact</span>
          <ul>
            <li class="mt-6 mb-2">
              <a href="#"> support@florianasfriends.com </a>
            </li>
            <hr />
            <li class="mb-2">
              <a href="#"> +1 (234) 567-8912 </a>
            </li>
            <hr />
            <li class="mb-2">
              <a href="#">
                123 Example St. New York, United States of America
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <hr class="mt-16" />
      <div class="container-split-50 mt-6" id="footer_bottom">
        <div class="w-1/2">© Copyright 2022 by Floriana'sFriends.com</div>
        <nav class="w-1/2 align-text-right">
          <ul class="social_media_links">
            <li><a href="https://www.facebook.com/LostPetsofAutoAccidents"> <img src="~assets/simple_facebook.svg" /> </a></li>
            <li><a href="#"> <img src="~assets/simple_instagram.svg" /> </a></li>
            <li><a href="#"> <img src="~assets/simple_twitter.svg" /></a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
hr {
  border-color: rgb(112, 112, 112);
  margin: 15px 0;
}

.footer_image {
  background-image: url("~/assets/footer_backdrop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
footer {
  opacity: 0.89;
  backdrop-filter: blur(100%);
}

.social_media_links {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
  .social_media_links > li > a > img {
    height: 1.5rem;
    width: 1.5rem;
    filter: invert(1);
    margin: 0 1rem;
  }

@media screen and (max-width: 620px) {
  #footer_section {
    min-width: 100%;
    height: auto;
    padding: 0 0 25px 0;
    margin: 0;
    text-align: center;
  }
  #footer_bottom {
    min-width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .social_media_links {
    margin-top: 10px;
    justify-content: center;
  }

  .container-split-50 {
    flex-direction: column;
    justify-content: center;
  }
  #footer_section > ul > hr {
    width: 50%;
    margin: 15px auto;
  }

  .mb-6 {
    margin-bottom: 0;
  }
  .mt-6 {
    margin-top: 10px;
  }
  .mt-16 {
    margin-top: 10px;
  }

}
  
</style>