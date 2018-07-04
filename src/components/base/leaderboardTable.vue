<template>
    <article>
        <md-card>
            <md-card-header>
                <div class="md-title">
                    {{data.heading}}
                </div>
            </md-card-header>
            <md-card-content>
                <ol>
                    <li v-for="entry in data.best">{{entry.name}} mit {{entry.score}} Pkt.</li>
                    ...
                </ol>
                <ol :start="data.own.position">
                    <li>Sie: {{data.own.score}} Punkte</li>
                </ol>
            </md-card-content>

        </md-card>
    </article>
</template>

<script>

  export default {
    components: {
    },
    name: 'leaderboard-table',
    data() {
      return {
      };
    },
    props: ['data'],
    methods: {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
