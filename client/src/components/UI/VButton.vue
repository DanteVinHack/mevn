<template>
<button :class="bg ?? 'grey'" :type="type ?? 'button'" class="btn waves-effect">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    bg: {
      type: String,
      required: false,
      default: undefined
    },
    type: {
      type: String,
      required: false,
      default: undefined
    }
  }
}
</script>