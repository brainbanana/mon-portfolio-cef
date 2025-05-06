<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    
    <main class="main">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>

<style scoped>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main {
  flex: 1;
  padding-top: 100px; /* espace pour header fixe */
  padding-bottom: 70px; /* espace pour footer fixe */
}
</style>
