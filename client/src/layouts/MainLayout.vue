<template>
<div>
  <nav-bar />

  <router-view />

</div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'main-layout',
  components: { NavBar },
}
</script>

<style>

</style>