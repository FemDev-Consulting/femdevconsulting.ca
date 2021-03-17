<template>
  <div>
    <home-hero />
    <home-clients />
    <home-about />
    <home-services />
    <home-contact />
  </div>
</template>

<script>
import HomeAbout from '../components/HomeAbout.vue';
import HomeServices from '../components/HomeServices.vue';
import HomeHero from '../components/HomeHero.vue';
import HomeClients from '../components/HomeClients.vue';
import HomeContact from '../components/HomeContact.vue';

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeServices,
    HomeClients,
    HomeContact,
  },
  setup () {
  }
}
</script>
