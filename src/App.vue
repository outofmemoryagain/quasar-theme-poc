<template>
  <div id="q-app" >
    <router-view v-themeable="$theme.theme"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>

<style>
</style>
