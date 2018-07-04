<template>
  <div class="review">
      <content-element class="card" v-bind:data="data"></content-element>
      <transition name="fadeUp">
          <rating-element v-if="showRating" class="card" @review="reviewReveived"></rating-element>
          <categories-element v-else class="card" @categories-accepted="accepted" :data="data" :review="review"></categories-element>
      </transition>

      <!-- <md-card class="card">

        <md-card-actions>
          <md-button v-on:click="visibleDialog = 'accept'">Akzeptieren</md-button>
          <md-button v-on:click="visibleDialog = 'reject'" class="md-primary">Ablehnen</md-button>
          <md-button v-on:click="visibleDialog = 'proposal'" class="md-accent">Änderungen vorschlagen</md-button>
        </md-card-actions>
      </md-card> -->
  </div>
</template>

<script>
  const contentElement = () => import(/* webpackChunkName: "contentElement" */ '@/components/base/contentElement.vue');
  const categoriesElement = () => import(/* webpackChunkName: "categoriesElement" */ '@/components/base/categories.vue');
  const ratingElement = () => import(/* webpackChunkName: "ratingElement" */ '@/components/base/rating.vue');


  export default {
    components: {
      'content-element': contentElement,
      'categories-element': categoriesElement,
      'rating-element': ratingElement,
    },
    name: 'review',
    data() {
      return {
        data: {
          topics: ['Todo'],
          age: "8 +- 1",
          subjects: ["Deutsch", "Englisch", "Geschichte"],
          difficulty: ["A2", "B1"],
          goal: ["Einführung"],
        },
        showRating: true,
        review: true,
      };
    },
    methods: {
        reviewReveived(type, data) {
            console.log(type);
            console.log(data);
            this.showRating = false;
        },
        accepted() {
            alert("TODO: Punkte verleihen, Bewertung speichern")
        }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .card {
        width: 80%;
        margin: 0 10%;
        margin-bottom: 1em;
    }


</style>
