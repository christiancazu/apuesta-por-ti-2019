<template>
<q-page-sticky
  position="bottom-right"
  :offset="[18, 18]"
>
  <q-fab
    icon="more_vert"
    direction="up"
    color="secondary"
  >
    <q-fab-action
      color="primary"
      icon="person_add" @click="onClick"
    />
    <q-fab-action
      color="primary"
      icon="mail" @click="onClick"
    />
  </q-fab>
</q-page-sticky>
</template>

<script>
export default {
  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    }
  }
}
</script>

<style>

</style>