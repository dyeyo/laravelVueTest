<template>
  <div>
    <h1>Nosotros</h1>
    <p v-for="(item, key) in data" :key="key">{{item.name}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      route: window.location.origin + '/api/usuarios/',
      data: []
    };
  },
  mounted() {
    this.usuario()
  },
  methods: {
    usuario() {
      axios.get(`${this.route}user-data`).then(res=>{
        this.data = res.data
      })
    },
  },
};
</script>
