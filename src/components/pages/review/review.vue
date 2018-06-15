<template>
  <div class="review">
      <content-element class="card" v-bind:data="data"></content-element>
      <!-- <categories-element></categories-element> -->
      <rating-element class="card"></rating-element>
  </div>
</template>

<script>
  const contentElement = () => import(/* webpackChunkName: "contentElement" */ '@/components/base/contentElement.vue');
  // const categoriesElement = () => import(/* webpackChunkName: "categoriesElement" */ '@/components/base/contentElement.vue');
  const ratingElement = () => import(/* webpackChunkName: "ratingElement" */ '@/components/base/rating.vue');


  export default {
    components: {
      'content-element': contentElement,
      // 'categories-element': categoriesElement,
      'rating-element': ratingElement,
    },
    name: 'review',
    data() {
      return {
        data: {
          providerName: 'HPI Schul-Cloud (Autorenname TODO)',
          url: 'Entfällt',
          title: 'Titel für Testinhalt - Sieht es gut aus?',
          description: 'Test',
          content: '<h4>Bla</h4>',
          thumbnail: 'Entfällt',
          contentCategory: 'Test',
          licenses: ['Entfällt'],
          tags: ['Test1','Test2','Test3'],
        }
      };
    },
    methods: {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .card {
        margin-bottom: 1em;
    }
</style>
