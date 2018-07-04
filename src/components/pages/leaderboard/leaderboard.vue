<template>
  <div class="leaderboard">
      <h1>Leaderboard</h1>
      <h2>Dieser Monat</h2>
      <div class="md-layout">
          <div class="md-gutter md-layout-item">
              <leaderboard-table class="card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-3 height-100" :data="data[0]"></leaderboard-table>
           </div>
          <div class="md-gutter md-layout-item">
              <leaderboard-table class="card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-3 height-100" :data="data[1]"></leaderboard-table>
           </div>
          <div class="md-gutter md-layout-item">
              <leaderboard-table class="card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-3 height-100" :data="data[2]"></leaderboard-table>
          </div>
      </div>
      <h2>Letzte 12 Monate</h2>
      <div class="md-layout">
          <div class="md-gutter md-layout-item">
              <leaderboard-table class="card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-3 height-100" :data="data[3]"></leaderboard-table>
          </div>
          <div class="md-gutter md-layout-item">
              <leaderboard-table class="card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-3 height-100" :data="data[4]"></leaderboard-table>
          </div>
          <div class="md-gutter md-layout-item">
              <leaderboard-table class="card-wrapper grid-xs-12 grid-s-6 grid-m-6 grid-l-4 grid-xl-3 height-100" :data="data[5]"></leaderboard-table>
          </div>
      </div>
  </div>
</template>

<script>
  const leaderbordTable = () => import(/* webpackChunkName: "leaderbordTable" */ '@/components/base/leaderboardTable.vue');

  export default {
    components: {
        'leaderboard-table': leaderbordTable,
    },
    name: 'leaderboard',
    data() {
      return {
          data: [
              {
                  own: {
                      position: 45,
                      score: 20
                  },
                  best: [
                      {name: "Peter Müller", score: 120},
                      {name: "John Doe", score: 105},
                      {name: "Maria Musterfrau", score: 100},
                      {name: "Max Mustermann", score: 90},
                      {name: "Jane Doe", score: 75},
                  ],
                  heading: "Ihre Schule"
              },
              {
                  own: {
                      position: 45,
                      score: 20
                  },
                  best: [
                      {name: "Peter Müller", score: 120},
                      {name: "John Doe", score: 105},
                      {name: "Maria Musterfrau", score: 100},
                      {name: "Max Mustermann", score: 90},
                      {name: "Jane Doe", score: 75},
                  ],
                  heading: "Ihr Landkreis"
              },
              {
                  own: {
                      position: 45,
                      score: 20
                  },
                  best: [
                      {name: "Peter Müller", score: 120},
                      {name: "John Doe", score: 105},
                      {name: "Maria Musterfrau", score: 100},
                      {name: "Max Mustermann", score: 90},
                      {name: "Jane Doe", score: 75},
                  ],
                  heading: "Deutschlandweit"
              },
              {
                  own: {
                      position: 45,
                      score: 20
                  },
                  best: [
                      {name: "Peter Müller", score: 120},
                      {name: "John Doe", score: 105},
                      {name: "Maria Musterfrau", score: 100},
                      {name: "Max Mustermann", score: 90},
                      {name: "Jane Doe", score: 75},
                  ],
                  heading: "Ihre Schule"
              },
              {
                  own: {
                      position: 45,
                      score: 20
                  },
                  best: [
                      {name: "Peter Müller", score: 120},
                      {name: "John Doe", score: 105},
                      {name: "Maria Musterfrau", score: 100},
                      {name: "Max Mustermann", score: 90},
                      {name: "Jane Doe", score: 75},
                  ],
                  heading: "Ihr Landkreis"
              },
              {
                  own: {
                      position: 45,
                      score: 20
                  },
                  best: [
                      {name: "Peter Müller", score: 120},
                      {name: "John Doe", score: 105},
                      {name: "Maria Musterfrau", score: 100},
                      {name: "Max Mustermann", score: 90},
                      {name: "Jane Doe", score: 75},
                  ],
                  heading: "Deutschlandweit"
          },
      ]
      };
    },
    methods: {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .items-per-page-picker {
      margin-left: 7px;
      float: right;
    }
    .md-layout {
      width: 100%;
      margin-bottom: 5px;
    }

    .md-layout-item {
      margin-right: 5px;
    }

    .grid {
      clear: both;
    }
    .card-wrapper {
      padding: 5px;
      box-sizing: border-box;
    }
</style>
