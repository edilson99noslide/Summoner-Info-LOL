<script setup>
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="menu-component__menu">
    <button @click="toggleDark()">Alterar tema</button>
  </div>
</template>

<style scoped>
.menu-component__menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>