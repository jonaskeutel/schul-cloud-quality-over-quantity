<template>
  <md-dialog :md-active.sync="isActive">
    <md-dialog-title>{{$lang.filter.difficulty.modal_title}}</md-dialog-title>

    <div id="difficulty-picker">
      <md-field>
        <label for="difficultyType">{{$lang.filter.difficulty.placeholder_type}}</label>
        <md-select v-model="difficultyType" id="difficultyType" md-dense>
            <md-option value="Sprachen">Sprachen</md-option>
            <md-option value="Anderes">Anderes</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label for="selectedDifficulty">{{$lang.filter.difficulty.placeholder}}</label>
        <md-select v-if="difficultyType === 'Sprachen'" v-model="selectedDifficulty" id="selectedDifficulty" multiple md-dense> <!-- multiple> -->
          <md-option value="A1">A1</md-option>
          <md-option value="A2">A2</md-option>
          <md-option value="B1">B1</md-option>
          <md-option value="B2">B2</md-option>
          <md-option value="C1">C1</md-option>
          <md-option value="C2">C2</md-option>
        </md-select>
        <md-select v-if="difficultyType === 'Anderes'" v-model="selectedDifficulty" id="selectedDifficulty" multiple md-dense> <!-- multiple> -->
          <md-option value="Leicht">Leicht</md-option>
          <md-option value="Mittel">Mittel</md-option>
          <md-option value="Schwer">Schwer</md-option>
        </md-select>
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
        selectedDifficulty: [], // []
        apiQuery: {},
        urlQuery: {},
        difficultyType: '',
      };
    },
    created() {
      this.$parent.$on('reset', this.resetDifficulty);
    },
    methods: {
      onConfirm() {
        let displayString;

        if (this.selectedDifficulty.length != 0) {
          // this.apiQuery["GoalName[$in]"] = this.selectedDifficulty; // corret but api seems broken
          this.apiQuery['difficultyName[$match]'] = this.selectedDifficulty; //TODO: multiple?
          this.urlQuery = {difficulty: this.selectedDifficulty}; // .reduce((prev, curr) => prev +','+ curr )} //TODO: multiple?
          displayString = `Niveaustufe: ${this.selectedDifficulty}`; // .reduce((prev, curr) => prev +', '+ curr );
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
      difficultyType() {
          this.selectedDifficulty = [];
      }
    },
  };
</script>

<style lang="scss" scoped>
  #difficulty-picker {
    padding: 16px;
  }
</style>
