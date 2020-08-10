<template>
  <div>
    <div>
      <ul>
        <li>
          <router-link :to="{ name: 'bienvenidos'}">Bienvedios</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'noticias'}">Noticias</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'nosotros'}">Nosotros</router-link>
        </li>
      </ul>
      <div id="content" class="col-sm-12">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
