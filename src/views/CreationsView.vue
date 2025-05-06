<template>
  <section class="creations-view">
    <p>Voici mes réalisations.</p>
    <!-- Composant Creations (déjà existant) -->
    <Creations />
  </section>
</template>

<script setup>
import Creations from "./Creations.vue";
</script>

<style scoped>
.creations-view {
  padding: 2rem;
  text-align: center;
}
</style>
