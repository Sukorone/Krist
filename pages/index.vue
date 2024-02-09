<template>
  <section class="main-page">
    <div class="welcome-banner">
      <div class="advertisment-part">
        <h2>Classic Exlusive</h2>
        <h1>Women's Collection</h1>
        <h3>UPTO 40% OFF</h3>
        <MyButton class="btn">
          <div class="shop-btn">
            <span>Shop Now</span>
            <i class="material-icons">arrow_forward</i>
          </div>
        </MyButton>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.btn {
  width:130px;
  height: auto;
  font-size: 12px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
.shop-btn {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  text-align: center;
  margin-left: 15px;
}
.shop-btn i:before{
  width: 5px;
  height: 5px;
}
.welcome-banner {
  height:800px;
  width: 1850px;
  position: relative;
  margin-left:30px;
  margin-right: 30px;
  background-image: url('@/public/main_pic.PNG');
  background-repeat: no-repeat;
  background-size: 100%;
}

.advertisment-part {
  position: absolute;
  top:300px;
  left: 200px;

}
.welcome-banner h2 {
  font-size:35px;
  font-weight: lighter;
  padding-bottom: 10px;
}
.welcome-banner h1 {
  font-size:50px;
  font-weight: bold;
  padding-bottom: 10px;
}
.welcome-banner h3 {
  font-size:25px;
  font-weight: lighter;
  padding-bottom: 35px;
}
</style>