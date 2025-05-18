<script setup lang="ts">
  // TYPE
  import type { CommonInputWithModel } from '@/types/components/common/commonInput.type'

  defineProps<CommonInputWithModel>()
  const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  }>()

  function onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
  }
</script>

<template>
  <label class="common-input-component__label">{{ label }}</label>
  <input
    :type="type || 'text'"
    :placeholder="placeholder || 'Digite algo...'"
    @input="onInput"
    class="common-input-component__input"
  >
</template>

<style scoped>
.common-input-component__label {
  color: var(--color-secondary);
  font-size: 16px;
}

.common-input-component__input {
  width: 240px;
  height: 38px;
  padding: 10px;

  color: var(--color-text-gray);
  font-size: 14px;
  border: 1px solid var(--color-secondary);
  border-radius: 5px;
  outline: none;
  box-shadow: none;
}

.common-input-component__input::placeholder {
  color: var(--color-text-gray);
  font-size: 14px;
}
</style>