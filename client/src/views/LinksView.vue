<template>
<div class="container" v-if="links.length && !getLoader">
  <table>
    <thead>
      <tr>
        <th>№</th>
        <th>Оригинальная</th>
        <th>Сокращенная</th>
        <th>Открыть</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(link, idx) in links" :key="link._id" >
        <td>{{ idx }}</td>
        <td>{{ link.from }}</td>
        <td>{{ link.to }}</td>
        <td>
          <v-button bg="blue" @click="openLink(link._id)">
            Открыть
          </v-button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div v-else-if="!links.length && getLoader">
  <v-loader />
</div>
<div v-else>
  <h1>
    Вы не создавали ссылок
  </h1>
</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import request from "@/api";

export default {
  data() {
    return {
      links: [],
    };
  },
  computed: mapGetters(["getLoader"]),
  methods: {
    openLink(id) {
      this.$router.push(`/detail/${id}`)
    },  
    ...mapMutations(["toggleLoader"])
  },
  async created() {
    const { token } = JSON.parse(localStorage.getItem("user"));
    this.toggleLoader();
    this.links = await request(`/api/links/`, "GET", null, {
      Authorization: `Bearer ${token}`,
    });
    this.toggleLoader();
    console.log(this.links);
  },
};
</script>
