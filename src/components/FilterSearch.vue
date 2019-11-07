<template>
<div
  class="row"
  style="min-width: 100vw"
>
  <q-tab-panels
    v-model="currentPanel"
    animated swipeable infinite
    class="bg-primary text-white shadow-2 full-width"
    @transition="filterSearch"
  >
    <q-tab-panel
      v-for="(panel, index) in panels" :key="index"
      :name="panel.name"
      class="q-pa-xs"
    >
      <div class="row">
        <q-icon
          size="xl"
          name="keyboard_arrow_left"
          class="col"
        />
        <div class="col-10 q-px-md">
          <div class="text-h6 text-center line-height-3">{{ panel.title }}</div>
          <!-- <div class="text-center text-grey-5">{{ panel.subtitle }}</div> -->
        </div>
        <q-icon
          size="xl"
          name="keyboard_arrow_right"
          class="col"
        />
      </div>
    </q-tab-panel>
  </q-tab-panels>
  <h4 class="col text-h4 q-ma-md text-center text-uppercase"> </h4>
</div>
</template>

<script>
export default {
  data: () => ({
    panels: [
      { name: 'all', title: 'Ver todas las publicaciones', subtitle: 'Se muestran las publicaciones de requisitoriados y estraviados' },
      { name: 'indictmenteds', title: 'Ver requisitoriados', subtitle: 'Se muestran las publicaciones de requisitoriados' },
      { name: 'losts', title: 'Ver extraviados', subtitle: 'Se muestran las publicaciones de requisitoriadosestraviados' },
    ],
    currentPanel: 'all'
  }),

  methods: {
    filterSearch (criteria) {
      this.$store.commit('posts/FILTER_DATA', criteria)
      // switch (criteria) {
      //   case 'indictmented':

      //     break;
      //   case 'losts':

      //     break;

      //   default:
      //     break;
      // }
    }
  },
}
</script>
