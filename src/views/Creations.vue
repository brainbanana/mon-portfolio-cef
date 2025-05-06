<template>
  <section id="creations" class="creations">
    <h2>Mes créations</h2>
    <div class="grid">
      <div
        v-for="creation in creations"
        :key="creation.id"
        class="card"
        @click="openModal(creation)"
      >
        <img :src="creation.image" :alt="creation.title" class="card-image" />
        <h3>{{ creation.title }}</h3>
        <p>{{ creation.short }}</p>
      </div>
    </div>

    <CreationModal
      :creation="selectedCreation"
      :isOpen="isModalOpen"
      @close="isModalOpen = false"
    />
  </section>
</template>


<script setup>
import { ref } from 'vue'
import CreationModal from '../components/CreationModal.vue'
import portfolio from '@/assets/portfolio.jpg'
import Emballage from '@/assets/Emballage.jpg'
import monCv from '@/assets/Mon-cv.png'
import cahierDesCharges from '@/assets/cahier-des-charges.png'

const creations = ref([
  {
    id: 1,
    title: 'Portfolio Design',
    short: 'Une refonte responsive.',
    description: 'Un portfolio réalisé avec Vue 3, animations, SEO, etc.',
    image: portfolio
  },
  {
    id: 2,
    title: 'Déménagement',
    short: 'Transport.',
    description: 'Emballage , stockage',
    image: Emballage
  },
  {
    id: 3,
    title: 'Mon-cv',
    short: 'curriculum vitae.',
    description: 'parcours professionnel',
    image: monCv,
    link: 'file:///C:/Users/onena/Documents/Formation%20CEF/mon_cv/index.html'
  },
  {
    id: 4,
    title: 'cahier des charges',
    short: 'Ex cahier des charges',
    description: 'cahier des charges (la socketterie)',
    image: cahierDesCharges,
    link: 'file:///C:/Users/onena/Documents/Formation%20CEF/devoir_cahier_des_charges.pdf'
  }
])


const selectedCreation = ref(null)
const isModalOpen = ref(false)

function openModal(creation) {
  selectedCreation.value = creation
  isModalOpen.value = true
}
</script>

<style scoped>
.creations {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Force 2 colonnes */
  gap: 2rem;
  width: 100%;
  max-width: 1000px; /* Limite la largeur totale si nécessaire */
}

.card {
  background: #f3f3f3;
  padding: 1.5rem;
  cursor: pointer;
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2); /* Ombre en bas à droite */
}


.card-image {
  width: 70%;
  height: 130px;
  object-fit: cover;
  border-radius: 6px;
  margin: 0  auto 1rem;
  display: block;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  max-width: 90%;
  width: 300px; /* Taille plus réduite */
  text-align: center; /* Centre tout le contenu */
}

.modal img {
  width: 100%;
  max-width: 200px; /* Contrôle la taille */
  margin: 0 auto 1rem;
  display: block;
  border-radius: 8px;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal h3 {
  margin-top: 0.5rem;
  font-size: 1.2rem;
}

.modal p {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0.5rem 0;
}

</style>