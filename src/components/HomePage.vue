<script setup>
import { ref } from 'vue'
import CommonInput from './commons/CommonInput.vue'

const summonerName = ref('')
</script>

<template>
  <div class="home-page-component__content">
    <h1 class="home-page-component__title">Buscar invocador... {{ summonerName }}</h1>

    <CommonInput
      v-model="summonerName"
      label="Buscar"
      type="text"
      placeholder="Digite o nome do invocador"
    />
  </div>
</template>

<style scoped>
.home-page-component__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
}

.home-page-component__title {
  margin: 20px 0;

  color: var(--color-primary);
  font-size: 24px;
}
</style>
