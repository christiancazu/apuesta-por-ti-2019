<template>
<div class="row justify-center main-menu full-width">
  <q-btn-group
    class="full-width"
    spread glossy flat
  >
    <q-btn
      v-for="(btn, index) in btns" :key="index"
      :label="btn.label"
      :icon="btn.icon"
      color="primary"
      stack
    />
  </q-btn-group>
</div>
</template>

<script>
export default {
  data: () => ({
    btns: [
      { icon: 'timeline', label: 'one', link: '' },
      { icon: 'visibility', label: 'two', link: '' },
      { icon: 'update', label: 'tree', link: '' }
    ]
  })
}
</script>

<style lang="scss">
.main-menu {
  // top: 50px;
  max-height: 4rem;
}
</style>