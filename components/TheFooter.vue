<template>
  <div class="footer_image">
    <footer class="text-gray-200 w-100 bg-gray-900 p-14">
      <div class="container-split-50 mb-6">
        <div class="accented-text w-1/2 text-4xl max-w-prose">
          Help Reunite a Family Today
        </div>
        <nav class="w-1/2 pl-12">
          <span class="accented-text text-2xl">Links</span>
          <ul>
            <li class="mt-6 mb-2">
              <NuxtLink to="/"> Home </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink to="/"> Tips </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink to="/"> Mission </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink to="/"> Donate </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container-split-50 mb-6">
        <nav class="w-1/2">
          <span class="accented-text text-2xl">Resources</span>
          <ul>
            <li class="mt-6 mb-2">
              <a href="#"> Home </a>
            </li>
            <li class="mb-2">
              <a href="#"> Tips </a>
            </li>
            <li class="mb-2">
              <a href="#"> Mission </a>
            </li>
            <li class="mb-2">
              <a href="#"> Home </a>
            </li>
          </ul>
        </nav>
        <nav class="w-1/2 pl-12">
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
      <div class="container-split-50 mt-6">
        <div class="w-1/2">© Copyright 2022 by Floriana'sFriends.com</div>
        <nav class="w-1/2 align-text-right">
          <ul class="social_media_links">
            <li><a href="#"> Facebook </a></li>
            <li><a href="#"> Twitter </a></li>
            <li><a href="#"> Instagram </a></li>
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
</style>