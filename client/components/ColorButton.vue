<template>
  <button id="colorButton" @click="notifyServer">{{ buttonText }}</button>
</template>

<script>
export default {
  data() {
    return {
      buttonText: 'Click Me'
    };
  },
  methods: {
    notifyServer() {
      fetch('/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ color: 'green' })
      });
    }
  }
};
</script>
