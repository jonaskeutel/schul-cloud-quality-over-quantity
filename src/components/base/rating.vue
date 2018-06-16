<template>
       <md-card class="content">
          <md-card-content>
              <div>
                  <span class="label">Text</span>
                  <span class="stars">
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                  </span>
              </div>
              <div>
                  <span class="label">Layout</span>
                  <span class="stars">
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                  </span>
              </div>
              <div>
                  <span class="label">Insgesamt</span>
                  <span class="stars">
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                      <md-icon>star_border</md-icon>
                  </span>
              </div>
              <div>
                  <md-field>
                      <label for="reviewTextare" class="label">Begründung</label>
                      <md-textarea id="reviewTextare" v-model="ratingReview">
                      </md-textarea>
                  </md-field>
              </div>
          </md-card-content>

      <md-card-actions>
          <md-button v-on:click="sendReview('accept')">Akzeptieren</md-button>
          <md-button v-on:click="sendReview('reject')" class="md-primary">Ablehnen</md-button>
          <md-button v-on:click="sendReview('proposal')" class="md-accent">Änderungen vorschlagen</md-button>
      </md-card-actions>
  </md-card>
</template>

<script>
  const rateReview = () => import(/* webpackChunkName: "rating" */ '@/components/dialogs/review/rating.vue');

  export default {
    components: {
    },
    props: ['data'],
    name: 'rating',
    data() {
      return {
        ratingReview: '',
      };
    },
    methods: {
      sendReview(type) {
          this.$emit('review', type, {review: this.ratingReview, text: 5, layout: 3, overall: 4});
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .content {
      padding: 2em 3em;
  }
  .content div {
      padding: 5px 0;
  }
  .label {
      display: inline-block;
      width: 12em;
      height: 100%;
  }

</style>
