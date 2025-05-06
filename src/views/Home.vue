<template>
  <div class="home">
    <Header />
    <section class="hero">
      <img src="/src/assets/profile.jpg" alt="Photo de profil" class="profile-pic" />
      <h1>David Sacristain</h1>
      <p>Développeur web passionné</p>
    </section>
    <Creations />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Creations from './components/Creations.vue'
</script>

<style scoped>
/* Flexbox pour centrer tout le contenu dans la page */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Ajouté pour centrer verticalement */
  height: 100vh; /* 100% de la hauteur du viewport */
}

/* Section avec image et texte */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* On s'assure que tout est centré dans cette section */
  text-align: center; /* On centre aussi le texte */
  margin-top: 50px; /* Pour séparer légèrement du header */
}

/* Image de profil */
.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #242424;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  color: #666;
}
</style>
