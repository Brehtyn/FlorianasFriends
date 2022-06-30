<template>
  <div v-if="active">
    <slot></slot>
    <h1>Uncertain right now</h1>
  </div>
</template>

<script>
 export default {
    name: 'AppDropdownContent',
    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active
      }
    }
  }
</script>