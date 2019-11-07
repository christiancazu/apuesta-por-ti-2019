<template>
<q-page-sticky
  position="bottom-right"
  :offset="[18, 18]"
>
  <q-fab
    icon="post_add"
    direction="up"
    color="secondary"
  >
    <q-fab-action
      color="primary"
      icon="face" @click="onClick('requisitoriados')"
    >
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        anchor="center left"
        self="center right" :offset="[10, 10]"
      >
        Reportar persona perdida
      </q-tooltip>
    </q-fab-action>
    <q-fab-action
      color="primary"
      icon="accessibility" @click="onClick('perdidos')"
    >
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        anchor="center left"
        self="center right" :offset="[10, 10]"
      >
        Reportar requisitoriado
      </q-tooltip>
    </q-fab-action>
  </q-fab>
</q-page-sticky>
</template>

<script>
export default {

  methods: {
    onClick (type) {
      if (type === 'perdidos')
        this.$router.push({name: 'posts'})
    }
  }
}
</script>

<style>

</style>