<template>
  <div id="setMaxZoom">
    <input type="range" id="setMaxZoomRange" v-model="zoomLevel" @input="updateZoom" min="0" max="10" />
    <label for="setMaxZoomRange">最大ズームレベル : {{ zoomLevel }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoomLevel: 5
    };
  },
  methods: {
    updateZoom() {
      this.$emit('zoom-changed', this.zoomLevel);
    }
  }
};
</script>
