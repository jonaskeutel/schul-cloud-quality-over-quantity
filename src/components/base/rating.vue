<template>
  <article>
    <md-card class="card-content height-100">
      <md-card-header>
        <h3 class="md-title">Bewertung</h3>
      </md-card-header>

      <md-card-actions>
        <md-button v-on:click="visibleDialog = 'accept'">Akzeptieren</md-button>
        <md-button v-on:click="visibleDialog = 'reject'" class="md-primary">Ablehnen</md-button>
        <md-button v-on:click="visibleDialog = 'proposal'" class="md-accent">Änderungen vorschlagen</md-button>
      </md-card-actions>
      <rate-review-dialog @accept="acceptReview" @cancle="cancle" identifier="accept"
                              v-bind:active="visibleDialog == 'accept'"
                              role="accept"/>
      <rate-review-dialog @accept="rejectReview" @cancle="cancle" identifier="reject"
                              v-bind:active="visibleDialog == 'reject'"
                              role="reject"/>
      <rate-review-dialog @accept="proposeChanges" @cancle="cancle" identifier="proposal"
                              v-bind:active="visibleDialog == 'proposal'"
                              role="propose"
                              proposal="true" />
    </md-card>
  </article>
</template>

<script>
  const rateReview = () => import(/* webpackChunkName: "rating" */ '@/components/dialogs/review/rating.vue');

  export default {
    components: {
        'rate-review-dialog': rateReview,
    },
    props: ['data'],
    name: 'rating',
    data() {
      return {
        visibleDialog: '',
      };
    },
    methods: {
      onConfirm() {
        window.open(this.$config.API.baseUrl + this.$config.API.redirectPath + this.data._id, '_blank');
      },
      acceptReview(identifier, data) {
        this.visibleDialog = '';

        // TODO: Do something with text
        console.log("Accept: ", data.ratingReview);
      },
      rejectReview(identifier, data) {
        this.visibleDialog = '';

        // TODO: Do something with text
        console.log("Reject: ", data.ratingReview);
      },
      proposeChanges(identifier, data) {
        this.visibleDialog = '';

        // TODO: Do something with text
        console.log("Proposed changes: ", data.ratingReview);
      },
      cancle() {
        this.visibleDialog = '';
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card-content {
    width: 80%;
    margin: 0 10%;
    padding-bottom: 52px;
    word-break: break-all;
    word-break: break-word;
    overflow: hidden;
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        min-height: $size;
        font-size: $size;
        line-height: $size;
      }

      span {
        vertical-align: middle;
      }
    }
    .md-card-actions {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
