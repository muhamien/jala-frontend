<template>  
    <c-grid  
      h="200px"
      w="100"
      template-rows="repeat(2, 1fr)"
      template-columns="repeat(2, 1fr)"
      gap="6"
    >
      <c-grid-item col-span="1" class="card"> 
          <div class="card-header">Persebaran Harga Udang Size 100</div>
          <leaflet-map/> 
      </c-grid-item>
 
      <c-grid-item col-span="1"> 
        <div class="text-header">Trend harga di berbagai daerah</div> 
        <c-grid 
          :columns="[1, null, 2]" spacing="40px"
          template-rows="repeat(2, 1fr)"
          template-columns="repeat(2, 1fr)"
          gap="6"
        >
          <c-grid-item class="card card-sm chart-card"> 
            <my-chart></my-chart>
          </c-grid-item> 
          <c-grid-item class="card card-sm chart-card">
            <my-chart></my-chart>
          </c-grid-item>  
          <c-grid-item class="card card-sm chart-card">
            <my-chart></my-chart>
          </c-grid-item>  
          <c-grid-item class="card card-sm chart-card">
            <my-chart></my-chart>
          </c-grid-item>  
        </c-grid>  
      </c-grid-item>
      <c-grid-item col-span="2" class="card">  
          <div class="card-header">Persebaran Harga Udang Size 100</div> 
      </c-grid-item> 
    </c-grid> 
</template>

<script>
// @ is an alias to /src
import Regions from '../assets/json/regions.json';
import LeafletMap from '@/components/LeafletMap.vue'; 
import MyChart from '@/components/MyChart.vue'; 
import {  
  CGrid, 
  CGridItem, 
  } from '@chakra-ui/vue'; 
  
console.log(Regions);
export default {
  name: 'Home',
  components: {  
    CGrid, 
    CGridItem, 
    LeafletMap, 
    MyChart, 
  }, 
} 
</script> 

<style scoped>
.card{
  padding: 0px;
  font-size: 12px;
}
.chart-card{
  padding: 12px;
}
.card-header{
  padding: 15px;
} 

</style>