<template>
  <section class="main-page-banner">
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
  <section class="some-clothes-to-choose">
    <div class="shop-by-categories">
      <div class="h1-and-btn-categories">
        <h1>Shop by Categories</h1>
        <div class="switcher-in-cat">
          <MyButton style="width: 50px; height: 50px; background-color:rgb(227, 226, 227) ;color: black;"><i class="material-icons">arrow_back</i></MyButton>
          <MyButton style="width: 50px; height: 50px; color:rgb(227, 226, 227) ;"><i class="material-icons">arrow_forward</i></MyButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.h1-and-btn-categories {
  display: flex;
  justify-content: space-around;
  gap: 700px;
  align-items: center;
}
.h1-and-btn-categories h1 {
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
}
.switcher-in-cat {
  display: flex;
  gap: 20px;
}
.btn {
  width:130px;
  height: auto;
  font-size: 12px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

</style>