<script setup lang="ts">
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
import flyerImageUrl from '../assets/23fw_flyer_1006_chirashi.jpg'
import { onMounted } from 'vue';



onMounted(() => {
  if (!document.querySelector('.image')) {
    return
  }
  const viewer = new Viewer(document.querySelector('.image'), {
    inline: false,
  });
})

</script>

<template>
  <main>
    <img class="image" :src="flyerImageUrl" alt="Picture">
  </main>
</template>

<style scoped>
.image {
  max-width: 100%;
  height: auto;
}
</style>
