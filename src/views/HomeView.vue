<template>
  <div class="home">
    <section class="intro">
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis développeur front-end passionné par Vue.js.</p>
    </section>

    <HeroSection />
    <Creations />
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import Creations from "./Creations.vue";
</script>

<style scoped>
.home {
  text-align: center;
}

.intro {
  padding: 2rem;
  background-color: #f4f4f4;
  color: #333;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro p {
  font-size: 1.2rem;
}
</style>
