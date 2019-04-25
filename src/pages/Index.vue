<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <span>Buttons</span>
      <q-btn color="primary" v-themeable @click="changeTheme">Change Theme</q-btn>
      <q-btn color="secondary" v-themeable @click="changeTheme" flat>Change Theme</q-btn>
      <q-btn color="positive" v-themeable @click="changeTheme">Change Theme</q-btn>
      <q-btn color="info" v-themeable @click="changeTheme">Change Theme</q-btn>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <span>Inputs</span>
      <q-input v-model="text" color="primary" v-themeable></q-input>
      <q-input v-model="text" color="primary" filled v-themeable></q-input>
      <q-input v-model="text" color="secondary" bg-color="primary" filled dark v-themeable></q-input>
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
      text: ''
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
