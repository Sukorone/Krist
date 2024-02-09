<template>
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo-name">
          <h1>Krist</h1>
        </div>
        <div class="main-links-block">
          <NuxtLink to="/index" class="home_link">Home</NuxtLink>
          <NuxtLink to="/shop">
            <div class="shop-box">
              <span>Shop</span>
              <i class="material-icons">expand_more</i>
            </div>
          </NuxtLink>
          <NuxtLink to="/story">Our Story</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/contact">Contact Us</NuxtLink>
        </div>
        <div class="some-icons-and-btn">
            <NuxtLink><i class="material-icons">search</i></NuxtLink>
            <NuxtLink><i class="material-icons">favorite</i></NuxtLink>
            <NuxtLink><i class="material-icons">shopping_bag</i></NuxtLink>
            <button class="btn">Login</button>
        </div>
      </div>
    </nav>
  </div>
  <slot/>
</template>

<script setup>
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}


.main-links-block {
  display: flex;
  gap: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  text-decoration: none;

}

.home_link {
  margin-top: -2px;
}
.home_link :visited{
  color: black;
}
.some-icons-and-btn {
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.navbar-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shop-box {
  display: flex;
  align-items: center;
  margin-top: -6px;
}
.navbar {
  height: 70px;
  border-bottom: 1px solid;
}
.logo-name {
  font-size: 35px;
  padding-bottom: 10px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.btn {
  width: 80px;
  height: 40px;
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  border-radius: 10px;
  border: none;
}
</style>