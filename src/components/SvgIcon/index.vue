<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ 'font-size': size, color: color }">
    <!-- use元素在 SVG 文档内取得目标节点，并在别的地方复制它们。它的效果等同于这些节点被深克隆到一个不可见的 DOM 中，然后将其粘贴到use元素的位置. -->
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '14px',
    },
  });

  const iconName = computed(() => `#icon-${props.name}`);
  const svgClass = computed(() => {
    if (props.name) {
      return `svg-icon icon-${props.name}`;
    }
    return 'svg-icon';
  });
</script>

<style lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
  }
</style>
