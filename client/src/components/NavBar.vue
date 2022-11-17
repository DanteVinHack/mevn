<template>
<div>
  <nav class="blue lighten-2" style="padding: 0 10px">
    <div class="nav-wrapper">
      <a href="" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/create">
            Создать
          </router-link>
        </li>
        <li>
          <router-link to="/links">
            Ссылки
          </router-link>
        </li>
        <li>
          <router-link to="/" @click.prevent="logoutHandler">
            Выйти
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    logoutHandler() {
      this.logout();
      this.$router.push('/')
    },
    ...mapMutations(['logout'])
  }
};
</script>