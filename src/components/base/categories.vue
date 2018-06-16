<template>
  <article>
    <md-card>
      <md-card-header>

      </md-card-header>
      <md-card-content>
          <h2 class="md-title">Kategorien</h2>
          <div class="md-subhead">
            <div class="tags">
              <span>Fach:</span>
              <md-icon>label</md-icon>
              <span v-for="tag in (data.tags||[]).slice(0,this.$config.card.displayedTags)">
                  {{ tag }},
              </span>
            </div>
            <div class="tags">
              <span>Thema:</span>
              <md-icon>label</md-icon>
              <span v-for="tag in (data.tags||[]).slice(0,this.$config.card.displayedTags)">
                  {{ tag }},
              </span>
            </div>
            <div class="tags">
              <span>Niveaustufe:</span>
              <md-icon>label</md-icon>
              <span v-for="tag in (data.tags||[]).slice(0,this.$config.card.displayedTags)">
                  {{ tag }},
              </span>
            </div>
          </div>
      </md-card-content>
      <md-card-actions>
        <md-button v-on:click="visibleDialog = 'accept'">Akzeptieren</md-button>
        <md-button v-on:click="visibleDialog = 'proposal'" class="md-accent">Änderungen vorschlagen</md-button>
      </md-card-actions>
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
