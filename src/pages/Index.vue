<template>
  <q-page class="flex flex-center bg-body">
    <div class="q-pa-md q-gutter-sm">
      <span>Buttons</span>
      <q-btn color="primary" >Primary</q-btn>
      <q-btn color="secondary"  flat>Primary</q-btn>
      <q-btn color="positive" >positive</q-btn>
      <q-btn color="info" >info</q-btn>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <span>Inputs</span>
      <q-input v-model="text" color="primary" ></q-input>
      <q-input v-model="text" color="primary" filled ></q-input>
      <q-input v-model="text" color="secondary" bg-color="primary" filled dark ></q-input>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-date v-model="date" color="primary"></q-date>
    </div>
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageIndex',
  data () {
    return {
      themeIndex: 0,
      text: '',
      date: ''
    }
  },
  methods: {
    changeTheme () {
      this.themeIndex = this.themeIndex < this.$theme.themes.length - 1 ? this.themeIndex + 1 : 0
      this.$theme.setTheme(this.$theme.themes[this.themeIndex].name)
    }
  }
})
</script>
