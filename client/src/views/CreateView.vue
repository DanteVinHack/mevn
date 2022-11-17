<template>
<div class="row">
  <div class="col s8 offset-s2" style="padding-top: 2rem">
    <v-input placeholder="Создать ссылку" v-model="link" @keydown.enter="addLink" />
  </div>
</div>
</template>

<script>
import request from '@/api';

export default {
  data() {
    return {
      link: ''
    }
  },
  methods: {
    async addLink() {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const { link } = await request('/api/links/generate', 'POST', { from: this.link }, {
          Authorization: `Bearer ${token}`
        });

        this.$router.push(`/detail/${link._id}`)
      } catch (e) {
        console.log(e)
      }
    },
  }
}
</script>

<style>

</style>