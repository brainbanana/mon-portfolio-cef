<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal-content">
        <h3>{{ creation.title }}</h3>

        <!-- Affiche l'image si elle existe -->
        <img
          v-if="creation.image"
          :src="creation.image"
          :alt="creation.title"
          class="modal-image"
        />

        <p>{{ creation.description }}</p>

        <!-- Affiche le bouton lien si 'link' existe -->
        <a
          v-if="creation.link"
          :href="creation.link"
          target="_blank"
          rel="noopener noreferrer"
          class="link-button"
        >
          Ouvrir le document
        </a>

        <button class="close-modal-btn" @click="$emit('close')">Fermer</button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  creation: Object,
  isOpen: Boolean
})

defineEmits(['close'])
</script>

<style scoped>
/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
}

.modal-image {
  width: 100%;
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  margin: 0.5rem auto;
  display: block;
  border-radius: 6px;
}

/* Bouton de lien */
.link-button {
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1.2rem;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  font-weight: 600;
}

.link-button:hover {
  background-color: #0d6efd;
}

.close-modal-btn {
  margin-top: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close-modal-btn:hover {
  background-color: #555;
}
</style>
