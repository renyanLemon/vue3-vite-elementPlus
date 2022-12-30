<template>
  <VueFlow
    v-model="elements"
    class="basicflow"
    :default-edge-options="{ type: 'smoothstep' }"
    :default-zoom="1.5"
    :min-zoom="0.2"
    :max-zoom="4"
    fit-view-on-init
  >
    <Background pattern-color="red" gap="8" />

    <MiniMap />

    <Controls />
  </VueFlow>
</template>

<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { ref } from 'vue'
import { initialElements } from './initial-elements.js'

const { onConnect, addEdges } = useVueFlow()

const elements = ref(initialElements)

onConnect((params) => addEdges([params]))
</script>


<style>
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.9.4/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.9.4/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}


</style>