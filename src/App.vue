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
</style>