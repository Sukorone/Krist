<template>
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo-name ">
          <NuxtLink to="/" class="links-with-nuxt" style="text-decoration: none;">
            <h1>Krist</h1>
          </NuxtLink>
        </div>
        <div class="main-links-block">
          <NuxtLink to="/" class="links-with-nuxt ">Home</NuxtLink>
          <div class="shop-box">
            <NuxtLink to="/shop" class="shop-box-2 links-with-nuxt "><p>Shop</p></NuxtLink>
            <i class="material-icons">expand_more</i>
          </div>
          <NuxtLink to="/story" class="links-with-nuxt">Our Story</NuxtLink>
          <NuxtLink to="/blog" class="links-with-nuxt">Blog</NuxtLink>
          <NuxtLink to="/contact" class="links-with-nuxt">Contact Us</NuxtLink>
        </div>
        <div class="some-icons-and-btn">
            <NuxtLink><i class="material-icons">search</i></NuxtLink>
            <NuxtLink><i class="material-icons">favorite</i></NuxtLink>
            <NuxtLink><i class="material-icons">shopping_bag</i></NuxtLink>
            <MyButton>Login</MyButton>
        </div>
      </div>
    </nav>
  </div>
  <slot/>
</template>

<script setup>

</script>