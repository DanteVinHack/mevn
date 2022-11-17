<template>
<div v-if="link && !getLoader">
  <link-card :link="link" />
</div>
<div v-else>
  Такой ссылки не существует
</div>
</template>

<script>
import LinkCard from '@/components/LinkCard';
import { mapGetters, mapMutations } from 'vuex';
import request from '@/api';

export default {
  components: { LinkCard },
  data() {
    return {
      link: {}
    }
  },
  computed: mapGetters(['getLoader']),
  methods: mapMutations(['toggleLoader']),
  async created() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    this.toggleLoader();
    this.link = await request(`/api/links/${this.$route.params.id}`, 'GET', null, {
      Authorization: `Bearer ${token}`
    })
    this.toggleLoader();
    console.log(this.link)
  }
}
</script>