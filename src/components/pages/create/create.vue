<template>
  <div class="create">
    <md-steppers md-alternative>
      <md-step id="first" md-label="Inhalt erstellen" :md-done.sync="first">
          <p>Hier müsste der Inhaltseditor edtr.io vom Bachelorprojekt eingebunden werden. Mal sehen, wie weit die sind.
          Eventuell interessant: <a href="https://www.npmjs.com/package/vue-react" target="_blank">React-Komponenten in einer Vue-App benutzen</a></p>
      </md-step>

      <md-step id="second" md-label="Inhalt kategorisieren" :md-done.sync="second">
          <categories-element @categories-set="categoriesSet" v-bind:data="data" :review="review"></categories-element>
      </md-step>

      <md-step id="third" md-label="Inhalt Kurs zuweisen und/oder veröffentlichen" :md-done.sync="third">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  const categoriesElement = () => import(/* webpackChunkName: "categoriesElement" */ '@/components/base/categories.vue');

  export default {
    components: {
        'categories-element': categoriesElement,
    },
    name: 'create',
    data() {
      return {
          data: {
            topics: [],
            age: "",
            subjects: [],
            difficulty: [],
            goal: [],
          },
          review: false,
          active: 'first',
          first: false,
          second: false,
          third: false,
      };
    },
    methods: {
        categoriesSet() {
            this['second'] = true;
            this.active = 'third';
        }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
