<template>
  <l-map style="height: 500px" :zoom="zoom" :center="centerPoint" :markers="markerPoint">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <!-- <l-marker :lat-lng="markerLatLng"></l-marker> -->
    <l-marker
      v-for="marker in markerPoint"
      :key="marker.id"
      :visible="marker.visible"
      :draggable="marker.draggable"
      :lat-lng.sync="marker.position"
      :icon="marker.icon"
      @click="alert(marker)"
    >
      <l-icon :icon-anchor="staticAnchor" class-name="markerCustom">
        <div class="headline">
          <c-link color="red.500" href="#" is-external>
            {{ marker.price }}
          </c-link>
        </div>
      </l-icon>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { CLink } from "@chakra-ui/vue";

export default {
  name: "Leaflet",
  components: {
    CLink,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  props:['centerPoint','markerPoint'],
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5,
      minZoom: 1,
      maxZoom: 20,
      staticAnchor: [16, 37],
      price: "Rp. " + 10000,
      center: [-0.73993970, 100.80000510],
      //   markerLatLng: [-7.671764, 110.179249],
      markers: this.markerPoint,
    };
  },
  mounted(){
    // console.log(this.markers)
  }
};
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
</script>

<style>
.markerCustom {
  background-color:#3727c5;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 5px 3px 10px rgba(160, 160, 160, 0.2);
  text-align: center;
  width: max-content !important;
  height: auto !important;
  margin: 0 !important;
  color: #ffffff;
  /* top: -100%; */
}

.markerCustom:before {
  transform: rotate(-90deg);
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  bottom: -20px;
  border: 10px solid transparent;
  border-right-color: #3727c5;
}
.headline a{
    color: #fff !important;
}
</style>