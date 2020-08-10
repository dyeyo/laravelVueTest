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
      route: window.location.origin + "/api/usuario/",
      data: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // axios.get(`${this.route}user-data`).then((res) => {
      axios.get("/user").then((res) => {
        console.log(res.data);
        // this.data = res.data;
      });
    },
  },
};
</script>
