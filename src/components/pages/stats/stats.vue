<template>
  <md-card class="card-content">
    <md-card-header>
      <span class="md-title">{{$lang.stats.title}}</span>
    </md-card-header>

    <md-card-content>
      <section>
        <div class="md-subheading">{{$lang.stats.article}}: {{totalContent}}</div>
      </section>
      <section>
        <div class="md-subheading">{{$lang.stats.most_clicked}}:</div>
        <div md-gutter class="grid">
          <div class="card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-4 height-100"
               v-for="item in mostClickedContent">
            <b>{{$lang.stats.clicks}}: {{item.clickCount}}</b>
            <app-contentCard v-bind:data="item" class="height-100"></app-contentCard>
          </div>
        </div>
      </section>
    </md-card-content>
  </md-card>
</template>

<script>
  /* load contentTableRow async */
  const contentCard = () => import(/* webpackChunkName: "contentCard" */ '@/components/base/contentCard.vue');

  const qs = require('query-string');

  export default {
    components: {
      'app-contentCard': contentCard,
    },
    name: 'contentStats',
    data() {
      return {
        totalContent: 0,
        mostClickedContent: [],
      };
    },
    created() {
      this.getTotalContent();
      this.getMostClicked();
    },
    methods: {
      getTotalContent() {
        this.$http.get(this.$config.API.baseUrl + this.$config.API.port + this.$config.API.getPath, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
          .then((response) => {
            // JSON responses are automatically parsed.
            this.totalContent = response.data.total;
          })
          .catch((e) => {
            this.errors.push(e);
          });
      },
      getMostClicked() {
        // apiQuery
        const apiQuery = {
          '$sort[clickCount]': -1,
          $limit: 3,
        };
        console.log(qs.stringify(apiQuery));
        const path = `${this.$config.API.getPath}?${qs.stringify(apiQuery)}`;
        this.$http.get(this.$config.API.baseUrl + this.$config.API.port + path, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
          .then((response) => {
            // JSON responses are automatically parsed.
            this.mostClickedContent = response.data.data;
          })
          .catch((e) => {
            this.errors.push(e);
          });
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .md-subheading {
    font-size: 1.25em;
  }
</style>
