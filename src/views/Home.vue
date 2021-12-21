<template>
  <c-box :px="['1rem', '3rem', '5rem']">
    <c-flex flex="1">
      <c-text fontSize="24px" my="4" as="b">Welcome to Shirmp App</c-text>
    </c-flex>
    <c-grid mb="4">
      <c-grid-item>
        <c-box bg="white" h="100%" class="card">
          <c-flex p="4" align="center">
            <c-text as="b" mr="3">Filter:</c-text>
            <c-select mr="3" v-model="region_id" placeholder="Pilih Lokasi">
              <option
                v-for="region in city"
                :key="region.id"
                :value="region.id"
              >
                {{ region.name }}
              </option>
            </c-select>
            <c-select mr="3" v-model="size" placeholder="Pilih Size">
              <option value="20">Size 20</option>
              <option value="30">Size 30</option>
              <option value="40">Size 40</option>
              <option value="50">Size 50</option>
              <option value="60">Size 60</option>
              <option value="70">Size 70</option>
              <option value="80">Size 80</option>
              <option value="90">Size 90</option>
              <option value="100">Size 100</option>
              <option value="110">Size 110</option>
              <option value="120">Size 120</option>
              <option value="130">Size 130</option>
              <option value="140">Size 140</option>
              <option value="150">Size 150</option>
              <option value="160">Size 160</option>
              <option value="170">Size 170</option>
              <option value="180">Size 180</option>
              <option value="190">Size 190</option>
              <option value="200">Size 200</option>
            </c-select>
            <c-select
              mr="3"
              v-model="species"
              title="species"
              placeholder="Pilih Species"
            >
              <option value="#">Vannamei</option>
            </c-select>
          </c-flex>
        </c-box>
      </c-grid-item>
    </c-grid>
    <c-grid
      w="100%"
      template-rows="repeat(2, 1fr)"
      template-columns="repeat(5, 1fr)"
      gap="6"
    >
      <c-grid-item :colSpan="[5, 5, 3]" :rowSpan="[2]">
        <c-box bg="white" h="100%" class="card">
          <c-text py="4" px="3">Persebaran Harga Udang Size {{ size }}</c-text>
          <Leaflet
            style="height: 300px"
            :markerPoint="getMarker"
            :centerPoint="[filterRegion[0].latitude, filterRegion[0].longitude]"
          />
          <c-flex justify="center" align="center" h="20">
            <c-box h="24px" w="24px" mx="2" bg="gray.300" />
            <c-text> >1 Bulan </c-text>
            <c-box h="24px" w="24px" mx="2" bg="blue.300" />
            <c-box h="24px" w="24px" mx="2" bg="blue.800" />
            <c-text> >1 Minggu </c-text>
            <c-text> Baru </c-text>
          </c-flex>
        </c-box>
      </c-grid-item>
      <c-grid-item :colSpan="[5, 5, 2]" :rowSpan="[2]">
        <c-flex flex="1">
          <c-text py="4" px="3">Trend harga di berbagai daerah</c-text>
        </c-flex>
        <c-simple-grid :columns="[1, 1, 2]" :row="2" :spacing="4" w="100">
          <c-box bg="white" h="100%" p="4" class="card">
            <c-box class="overflow:hidden;">
              <c-text>Card 1</c-text>
            </c-box>
          </c-box>
          <c-box bg="white" h="100%" p="4" class="card">
            <c-box class="overflow:hidden;">
              <c-text>Card 2</c-text>
            </c-box>
          </c-box>
          <c-box bg="white" h="100%" p="4" class="card">
            <c-box class="overflow:hidden;">
              <c-text>Card 3</c-text> 
            </c-box>
          </c-box>
          <c-box bg="white" h="100%" p="4" class="card">
            <c-box class="overflow:hidden;">
              <c-text>Card 4</c-text>
            </c-box>
          </c-box>
        </c-simple-grid>
      </c-grid-item>
    </c-grid>
  </c-box>
</template>

<script>
// @ is an alias to /src
import {
  CFlex,
  CText,
  CBox,
  CGrid,
  CGridItem,
  CSimpleGrid,
  CSelect,
} from "@chakra-ui/vue";
import Leaflet from "@/components/Leaflet.vue";
import Regions from "../../src/assets/json/regions.json";
import Price from "../../src/assets/json/shrimp_prices.json";

export default {
  name: "Home",
  components: {
    CFlex,
    CText,
    CBox,
    CGrid,
    CGridItem,
    Leaflet,
    CSimpleGrid,
    CSelect,
  },
  data() {
    return {
      coordinate: [-5.5402181, 105.7996769],
      city: Regions.data,
      price: Price.data,
      size: "100",
      species: "#",
      region_id: "11",
      sizes: "size_" + this.size,
      markers:this.getMarker
    };
  },
  mounted() {  
    console.log(this.markers) 
  },
  computed: {
    filterRegion() {
      return this.city.filter((item) => {
        return item.id == this.region_id;
      });
    }, 
    filterSize() {
      return this.price.filter((itemSize) => {
        return itemSize.province_id === this.region_id;
      });
    },
    getMarker: function() {
      const fPrice = this.filterSize
      return fPrice.map(item=>({
        id:item.id,
        position:[item.region.latitude,item.region.longitude],
        price:"Rp."+item["size_"+this.size]
      })) 
    },
  },
  updated() { 
    console.log(this.getMarker) 
  },
};
</script>
