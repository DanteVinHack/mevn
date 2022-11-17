<template>
<div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title orange-text">Ссылка</span>
        <p>Ваша ссылка: <a :href="link.from" target="blank" rel="noopener norefferer" >{{ link.from }}</a></p>
        <p>Откуда: <a :href="link.to" target="blank" rel="noopener norefferer" >{{ link.to }}</a></p>
        <p>Количество кликов по ссылке: <b>{{ link.clicks }}</b></p>
        <p>Дата создания: <b>{{ new Date(link.data).toLocaleDateString() }}</b></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>