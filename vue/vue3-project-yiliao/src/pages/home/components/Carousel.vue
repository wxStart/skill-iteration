<template>
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in imagesLists" :key="item.id">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const imagesLists = [1, 2, 3, 4, 5, 6].map((el) => ({
    id: el,
    url: new URL(`../assets/banner/${el}.jpg`, import.meta.url).href,
  }));
  </script>
  
  <style module lang="scss">

  :global {
    .el-carousel__item h3 {
      color: #475669;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }
  
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
    .el-carousel__button{
      border: 0.5px solid rgba(0, 0, 0, 0.45);
    }
  }
  </style>
  