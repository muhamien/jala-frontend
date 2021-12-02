<template>
    <div id="app">
      <c-box id="nav" w="100"> 
          <div class="container">
            <router-link to="/">Home</router-link>
          </div>
      </c-box>
      <router-view class="content container"/>
    </div>
</template>

<script>
import { CBox } from '@chakra-ui/vue'
export default {
  name: 'App',
  components:{
    CBox,
  }
}
</script>

<style>
body{
  margin: 0px;
  background-color: rgb(241, 241, 241);
}
#app {
  font-family: inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
}

#map { height: 180px; }

#nav {
  padding: 30px 0 30px 0;
  background-color: #ffffff;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 9999;
}

#nav a {
  font-weight: bold;
  color: #8f8f8f;
}

#nav a.router-link-exact-active {
  color: #1938e7;
}

.container{ 
  padding-right: 5rem;
  padding-left: 5rem; 
}

.content{
  margin-top: 124px;
}

.card{
  border-radius: 8px;
  box-shadow: 3px 3px 8px 0.09px #c4c4c4;
  background-color: #ffffff;
}

.card-header{ 
  padding: 15px 0px 15px 0px;
  color: rgb(39, 39, 39);
  font-size: 14px;
  font-weight: 600;
}

.text-header{
  padding: 15px 150px 15px 0px;
  font-weight: 600;
  font-size: 14px;
}
.badge{
  padding: 8px;
  border-radius: 20px;
}
.badge-danger{
  font-size: 12px;
  background-color: #EB5757;
  color: white;
}
.badge-success{
  font-size: 12px;
  background-color: #62AD56;
  color: white;
}
.fw-bold{
  font-weight: bold;
}
.text-sm{
  font-size: 0.9rem;
}
@media screen and (max-width: 768px) {
  .container{ 
    padding-right: 2rem;
    padding-left: 2rem; 
  }
}
</style>
