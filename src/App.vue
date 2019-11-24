<template>
  <div id="app">
    <transition name="fade" mode="out-in" :duration="500" appear>
      <router-view />
    </transition>
  </div>
</template>

<style lang="css">
@import "assets/styles/style.css";
@import "assets/styles/transit.css";
</style>
