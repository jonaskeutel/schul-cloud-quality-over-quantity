<template>
  <md-dialog :md-active.sync="isActive">
    <md-dialog-title>{{$lang.filter.age.modal_title}}</md-dialog-title>

    <div id="age-picker">
        <!-- TODO: Set difficulty depending on subject (language -> A1-C2) -->
      <md-field>
        <label for="selectedAge">{{$lang.filter.age.placeholder}}</label>
        <md-input v-model="selectedAge" id="selectedAge" type="number" min="3" max="80"></md-input>
      </md-field>
      <md-field>
        <label for="selectedAgeRange">{{$lang.filter.age.placeholder_range}}</label>
        <md-input v-model="range" id="selectedAgeRange" type="number" min="0" max="20"></md-input>
      </md-field>
    </div>

    <md-dialog-actions>
      <md-button @click="onCancle">{{$lang.buttons.cancel}}</md-button>
      <md-button class="md-primary" @click="onConfirm">{{$lang.buttons.add}}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: 'DialogConfirm',
    props: ['identifier', 'active'],
    data() {
      return {
        isActive: false,
        selectedAge: 10, // []
        range: 1,
        apiQuery: {},
        urlQuery: {},
      };
    },
    created() {
      this.$parent.$on('reset', this.resetAge);
    },
    methods: {
      onConfirm() {
        let displayString;

        if (this.selectedAge) {
          // this.apiQuery["GoalName[$in]"] = this.selectedDifficulty; // corret but api seems broken
          this.apiQuery['ageName[$match]'] = this.selectedAge; //TODO: Range
          this.urlQuery = {age: this.selectedAge}; // .reduce((prev, curr) => prev +','+ curr )} // TODO: Range
          displayString = "Alter: " + this.selectedAge + " +- " + this.range + " Jahre"; // .reduce((prev, curr) => prev +', '+ curr );
        } else {
          this.apiQuery = {};
          this.urlQuery = {};
          displayString = null;
        }
        this.$emit('set', this.identifier, {
          apiQuery: this.apiQuery,
          urlQuery: this.urlQuery,
          displayString,
        });
      },
      onCancle() {
        this.$emit('cancle');
      },
      resetDifficulty(key) {
        if (key == this.identifier) {
          this.selectedDifficulty = '';
        }
      },
    },
    watch: {
      active(to, from) {
        this.isActive = to;
      },
      isActive(to) {
        if (to == false) {
          this.onCancle();
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  #age-picker {
    padding: 16px;
  }
</style>
