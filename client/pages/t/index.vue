<template>
  <div>
    <HeadComponent :title="'Dynamic Map View'" />
    <ColorButton />
    <MaxZoomControl @zoom-changed="onZoomChanged" />
    <MapComponent :maxZoom="zoomLevel" />
  </div>
</template>

<script>
import HeadComponent from '../components/HeadComponent.vue';
import ColorButton from '../components/ColorButton.vue';
import MaxZoomControl from '../components/MaxZoomControl.vue';
import MapComponent from '../components/MapComponent.vue';

export default {
  components: {
    HeadComponent,
    ColorButton,
    MaxZoomControl,
    MapComponent
  },
  data() {
    return {
      zoomLevel: 5
    };
  },
  methods: {
    onZoomChanged(newZoom) {
      this.zoomLevel = newZoom;
    }
  }
};
</script>
