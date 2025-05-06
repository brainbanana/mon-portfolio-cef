<script setup>
import linkedinIcon from '@/assets/linkedin.svg'
import facebookIcon from '@/assets/facebook.svg'
import githubIcon from '@/assets/github.svg'
</script>

<template>
  <footer class="footer">
    <span class="center">© 2025</span>
    <div class="socials">
      <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
        <img src="@/assets/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
        <img src="@/assets/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.github.com" target="_blank" aria-label="GitHub">
        <img src="@/assets/github.svg" alt="GitHub" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100vw;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #444;
  padding: 0 1rem;
  box-sizing: border-box;
}

.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9rem;
}

.socials {
  position: absolute;
  right: 1rem;
  display: flex;
  gap: 1rem;
}

.socials img {
  width: 24px;
  height: 24px;
  filter: invert(0);
  transition: transform 0.2s ease;
}

.socials img:hover {
  transform: scale(1.1);
}
</style>
