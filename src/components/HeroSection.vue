<template> 
  <section class="hero">
    <div class="overlay"></div>
    <div class="content">
      <h1>David Sacristain</h1>
      <img :src="profileImage" alt="Ma photo" class="profile-pic" />
      <p>Dévelopeur web passionné</p>
      <div class="intro-text">
      <p>
        Bienvenue sur mon portfolio !
      </p>
      <p>
        Je conçois et développe des interfaces web modernes et réactives.
      </p>
      <p>
        Mon objectif est de transformer des idées en produits digitaux élégants.
      </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '@/assets/profile.jpg'
</script>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  background-image: url('@/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  max-width:1000px;
  border-radius: 1rem;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Couche foncée avec opacité */
  z-index: 1;
}

.profile-pic {
  width: 175px;
  height: 175px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  color: white;
}

.content {
  position: relative;
  z-index: 2;
}

.subtitle {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 1.2rem;
}
.intro-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin-top: 1rem;
  color: white;
  font-size: 1rem;
  line-height: 1.6;
}

.intro-text p {
  margin: 0;
  padding: 0 1rem;
  text-align: center;
}

</style>
