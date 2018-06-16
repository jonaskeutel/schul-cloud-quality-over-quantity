<template>
  <article>
    <md-card class="card-content height-100">
      <!-- <md-card-header>
        <h2 class="md-title">{{data.title||"Titel"}}</h2>
        <div class="md-subhead">
          <div class="tags">
            <md-icon>label</md-icon>
            <span v-for="tag in (data.tags||[]).slice(0,this.$config.card.displayedTags)">
                {{ tag }},
              </span>
          </div>
        </div>
      </md-card-header> -->

      <md-card-content>
          <!-- <span v-html="data.content"></span> -->
          <img src="/static/img/edtrio_example.png" alt="">
      </md-card-content>
    </md-card>
  </article>
</template>

<script>

  export default {
    components: {
    },
    props: ['data'],
    name: 'contentElement',
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
        console.log("Accept: ", data.acceptanceReview);
      },
      rejectReview(identifier, data) {
        this.visibleDialog = '';

        // TODO: Do something with text
        console.log("Reject: ", data.acceptanceReview);
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
