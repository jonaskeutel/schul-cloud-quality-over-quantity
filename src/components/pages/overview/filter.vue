<template>
  <div class="filter">
    <md-chip v-for="chip in activeFilter" v-model="activeFilter" :key="chip[0]" v-on:click="visibleProvider = chip[0]"
             @md-delete.stop="removeFilter(chip[0], true)" md-clickable md-deletable>{{ chip[1].displayString }}
    </md-chip>

    <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger>
        <md-icon><i class="material-icons">add</i></md-icon>
        FILTER HINZUFÜGEN
      </md-button>
      <md-menu-content>
        <md-menu-item v-if="!isApplied('provider')" v-on:click="visibleProvider = 'provider'">
            Provider
        </md-menu-item>
        <md-menu-item v-if="!isApplied('createdat')" v-on:click="visibleProvider = 'createdat'">
            Erstellt am
        </md-menu-item>
        <md-menu-item :disabled="!enoughPoints" v-if="!isApplied('age')" v-on:click="visibleProvider = 'topic'">
            Thema
            <md-tooltip class="tooltip" md-direction="right" v-if="!enoughPoints" md-delay="1000">Um diese Suchfilter benutzen zu können, benötigen Sie mehr Punkte. Wie Sie diese erhalten, können Sie hier (todo) nachlesen</md-tooltip>
        </md-menu-item>
        <md-menu-item :disabled="!enoughPoints" v-if="!isApplied('subject')" v-on:click="visibleProvider = 'subject'">
            Fach
            <md-tooltip class="tooltip" md-direction="right" v-if="!enoughPoints" md-delay="1000">Um diese Suchfilter benutzen zu können, benötigen Sie mehr Punkte. Wie Sie diese erhalten, können Sie hier (todo) nachlesen</md-tooltip>
        </md-menu-item>
        <md-menu-item :disabled="!enoughPoints" v-if="!isApplied('goal')" v-on:click="visibleProvider = 'goal'">
            Unterrichtsziel
            <md-tooltip class="tooltip" md-direction="right" v-if="!enoughPoints" md-delay="1000">Um diese Suchfilter benutzen zu können, benötigen Sie mehr Punkte. Wie Sie diese erhalten, können Sie hier (todo) nachlesen</md-tooltip>
        </md-menu-item>
        <md-menu-item :disabled="!enoughPoints" v-if="!isApplied('difficulty')" v-on:click="visibleProvider = 'difficulty'">
            Niveaustufe
            <md-tooltip class="tooltip" md-direction="right" v-if="!enoughPoints" md-delay="1000">Um diese Suchfilter benutzen zu können, benötigen Sie mehr Punkte. Wie Sie diese erhalten, können Sie hier (todo) nachlesen</md-tooltip>
        </md-menu-item>
        <md-menu-item :disabled="!enoughPoints" v-if="!isApplied('age')" v-on:click="visibleProvider = 'age'">
            Alter
            <md-tooltip class="tooltip" md-direction="right" v-if="!enoughPoints" md-delay="1000">Um diese Suchfilter benutzen zu können, benötigen Sie mehr Punkte. Wie Sie diese erhalten, können Sie hier (todo) nachlesen</md-tooltip>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

    <provider-filter-dialog @set="setFilter" @cancle="cancle" identifier="provider"
                            v-bind:active="visibleProvider == 'provider'"/>
    <createdat-filter-dialog @set="setFilter" @cancle="cancle" identifier="createdat"
                            v-bind:active="visibleProvider == 'createdat'"/>
    <subject-filter-dialog @set="setFilter" @cancle="cancle" identifier="subject"
                            v-bind:active="visibleProvider == 'subject'"/>
    <goal-filter-dialog @set="setFilter" @cancle="cancle" identifier="goal"
                            v-bind:active="visibleProvider == 'goal'"/>
    <difficulty-filter-dialog @set="setFilter" @cancle="cancle" identifier="difficulty"
                            v-bind:active="visibleProvider == 'difficulty'"/>
    <age-filter-dialog @set="setFilter" @cancle="cancle" identifier="age"
                            v-bind:active="visibleProvider == 'age'"/>
    <topic-filter-dialog @set="setFilter" @cancle="cancle" identifier="topic"
                            v-bind:active="visibleProvider == 'topic'"/>
  </div>
</template>

<script>
  const providerFilterDialog = () => import(/* webpackChunkName: "providerFilterDialog" */ '@/components/dialogs/filter/provider.vue');
  const createdAtFilterDialog = () => import(/* webpackChunkName: "createdAtFilterDialog" */ '@/components/dialogs/filter/date.vue');
  const subjectFilterDialog = () => import(/* webpackChunkName: "subjectFilterDialog" */ '@/components/dialogs/filter/subject.vue');
  const goalFilterDialog = () => import(/* webpackChunkName: "goalFilterDialog" */ '@/components/dialogs/filter/goal.vue');
  const difficultyFilterDialog = () => import(/* webpackChunkName: "difficultyFilterDialog" */ '@/components/dialogs/filter/difficulty.vue');
  const ageFilterDialog = () => import(/* webpackChunkName: "ageFilterDialog" */ '@/components/dialogs/filter/age.vue');
  const topicFilterDialog = () => import(/* webpackChunkName: "topicFilterDialog" */ '@/components/dialogs/filter/topic.vue');

  export default {
    components: {
      'provider-filter-dialog': providerFilterDialog,
      'createdat-filter-dialog': createdAtFilterDialog,
      'subject-filter-dialog': subjectFilterDialog,
      'goal-filter-dialog': goalFilterDialog,
      'difficulty-filter-dialog': difficultyFilterDialog,
      'age-filter-dialog': ageFilterDialog,
      'topic-filter-dialog': topicFilterDialog,
    },
    name: 'searchFilter',
    data() {
      return {
        enoughPoints: JSON.parse(localStorage.getItem('userInfo')).enoughPoints || true, //TODO: put this information into user
        visibleProvider: '',
        activeFilter: [],
      };
    },
    methods: {
      setFilter(identifier, filterData) {
        this.visibleProvider = ''; 

        filterData = JSON.parse(JSON.stringify(filterData)); // deep copy

        this.removeFilter(identifier, false);
        this.activeFilter.push([identifier, filterData]);
      },
      removeFilter(key, emit) {
        this.activeFilter = this.activeFilter.filter(item => item[0] != key);
        if (emit) {
          this.$emit('reset', key);
        }
      },
      cancle() {
        this.visibleProvider = '';
      },
      sendNewQuery() {
        const apiQuery = {};
        const urlQuery = {};
        this.activeFilter.forEach((value) => {
          Object.assign(apiQuery, value[1].apiQuery);
          Object.assign(urlQuery, value[1].urlQuery);
        }, {});
        this.$emit('newFilter', apiQuery, urlQuery);
      },
      isApplied(identifier) {
        return this.activeFilter.map(i => i[0]).includes(identifier);
      },
    },
    watch: {
      activeFilter(to, from) {
        this.sendNewQuery();
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .disabled {
        cursor: not-allowed !important;
        background-color: rgba(100,100,100,0.5);
    }
</style>
