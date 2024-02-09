<template>
  <div class="my-button">
    <button><slot/></button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.my-button {
  width: 40px;
  height: 20px;
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  border-radius: 10px;
}
</style>