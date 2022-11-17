<template>
<div class="row">
  <div class="col s12">
    <div class="card blue">
      <div class="card-content">
        <h2 class="white-text left-align">Авторизация</h2>

        <v-input
          v-model="username"
          placeholder="Введите пользовательское имя"
        />
        <v-input
          v-model="password"
          placeholder="Введите пароль"
          type="password"
        />
      </div>

      <div class="card-action left-align">
        <v-button 
          type="submit" 
          bg="orange darken-1" 
          class="text-white" 
          @click="loginHandler"
        >
          Войти
        </v-button>
        <v-button
          type="submit"
          style="margin-left: 10px"
          @click="registerHandler"
        >
          Регистрация
        </v-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import request from "@/api";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async registerHandler() {
      try {
        const newUser = {
          username: this.username,
          password: this.password,
        };

        const response = await request("/api/auth/registration", "POST", newUser);
        
        this.$message(response.message)
      } catch (e) {
        console.log(e);
      }
    },
    async loginHandler() {
      const user = {
        username: this.username,
        password: this.password,
      }

      const userData = await request('api/auth/login', 'POST', user);

      this.setUser(userData);
      this.$router.push('/create')
    },
    ...mapMutations(["setUser"]),
  },
};
</script>

<style></style>
