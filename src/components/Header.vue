<template> 
  <header class="header">
    <img :src="logo" alt="Logo" class="logo" />
    <nav class="nav">
      <router-link to="/">Accueil</router-link>
      <router-link :to="{ path: '/creations', hash: '#creations' }">Créations</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

  </header>
</template>

<script setup>
import logo from '@/assets/logo.svg'
</script>

<style scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: gray;
  color: white;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
}

.logo {
  height: 33px;
}

.nav {
  display: flex;
  gap: 2rem; /* augmente un peu l'espacement */
  justify-content: center;
  align-items: center;
}

.nav a {
  color: black;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 0; /* petit padding vertical pour plus de confort */
}

.nav a:hover {
  text-decoration: underline;
}

.nav a.router-link-active {
  border-bottom: 2px solid #1e90ff; /* soulignement pour le lien actif */
}

</style>