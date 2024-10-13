<template>
  <div id="map"></div>
</template>

<script>
export default {
  props: {
    maxZoom: {
      type: Number,
      default: 5
    }
  },
  mounted() {
    this.initMap();
  },
  watch: {
    maxZoom() {
      this.updateMapConfig();
    }
  },
  methods: {
    initMap() {
      const mapImage = { url: 'brokenMoon.png', width: 4096, height: 4096 };
      const mapBounds = L.latLngBounds([0, 0], [mapImage.height, mapImage.width]);

      this.map = L.map('map', {
        crs: L.CRS.Simple,
        center: [mapImage.height / 2, mapImage.width / 2],
        minZoom: -3,
        maxZoom: this.maxZoom,
        maxBounds: mapBounds.pad(0)
      });

      L.imageOverlay(mapImage.url, mapBounds).addTo(this.map);
    },
    updateMapConfig() {
      this.map.setMaxZoom(this.maxZoom);
    }
  }
};
</script>
