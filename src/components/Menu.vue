<script setup>
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="menu-component__menu">
    <img
      src="../assets/logo.png"
      alt="Logo"
      class="menu-component__menu-image"
    >

    <button
      @click="toggleDark()"
      class="menu-component__menu-button"
    >
      {{ isDark ? 'Tema claro' : 'Tema dark' }}
    </button>
  </div>
</template>

<style scoped>
.menu-component__menu {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 50px;

  background: var(--color-secondary);
}

.menu-component__menu-image {
  position: absolute;

  left: 10px;
  width: 100px;
}

.menu-component__menu-button {
  position: absolute;

  padding: 10px;
  right: 20px;

  background: var(--color-primary);
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>