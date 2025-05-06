<template>
  <section class="contact-view">
    <h1>Contact</h1>
    <form @submit.prevent="sendForm" class="contact-form">
      <input type="text" v-model="name" placeholder="Votre nom" required />
      <input type="email" v-model="email" placeholder="Votre email" required />
      <textarea v-model="message" placeholder="Votre message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const successMessage = ref('')

const sendForm = () => {
  console.log("Nom :", name.value)
  console.log("Email :", email.value)
  console.log("Message :", message.value)

  successMessage.value = "Message simulé comme envoyé !"

  // Réinitialiser les champs
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-view {
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  margin: auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
}

button {
  padding: 0.8rem;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #43a047;
}

.success {
  color: green;
  margin-top: 1rem;
}
</style>
