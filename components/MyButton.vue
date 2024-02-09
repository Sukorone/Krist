<template>
    <button class="btn"><slot/></button>
</template>

<script setup>
</script>

<style scoped>
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