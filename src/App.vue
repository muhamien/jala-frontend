<template>
  <c-theme-provider>
    <c-reset />
    <Navbar/>
    <router-view />
  </c-theme-provider>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "App",
  components:{Navbar,}
};
</script>

<style>
body{
  background-color: #f3f3f3;
}

.card{
  border-radius: 12px;
}

.router-link-exact-active{
  color: #0ca170;
  border-radius: 8px;
  font-weight: bold;
}
</style>