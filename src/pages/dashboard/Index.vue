<template>
<q-page>
  <q-scroll-observer @scroll="onScroll" />

  <q-page-sticky
    class="full-width"
    position="top"
    style="z-index: 1"
    :offset="[0, onScrollVertical]"
  >
    <main-menu />

    <filter-search />

  </q-page-sticky>

  <h4
    class="text-center text-secondary text-uppercase"
    style="margin-top: 9rem"
  >
    Publicaciones
  </h4>

  <posts />

  <fab />

</q-page>
</template>

<script>
export default {
  data: () => ({
    onScrollVertical: 0
  }),

  mounted () {
    setTimeout(() => {
      this.onScrollVertical = 0
    }, 100)
  },

  methods: {
    onScroll (info) {
      if (info.direction === 'down' && this.onScrollVertical > -120) {
        this.onScrollVertical -= 10
      }
      if (info.direction === 'up' && this.onScrollVertical < 0) {
        this.onScrollVertical += 15
      }
      if (this.onScrollVertical < -120 || this.onScrollVertical > 0) this.onScrollVertical = 0
    }
  },

}
</script>
