<template>
<q-dialog
  v-model="visible"
  persistent
  :maximized="maximizedToggle"
  transition-show="slide-up"
  transition-hide="slide-down"
>
  <q-card class="bg-primary-dark text-white">
    <q-bar>
      <q-space />

      <q-btn
        dense
        flat icon="minimize" :disable="!maximizedToggle" @click="maximizedToggle = false"
      >
        <q-tooltip
          v-if="maximizedToggle"
          content-class="bg-white text-primary"
        >
          Minimize
        </q-tooltip>
      </q-btn>
      <q-btn
        dense
        flat icon="crop_square" :disable="maximizedToggle" @click="maximizedToggle = true"
      >
        <q-tooltip
          v-if="!maximizedToggle"
          content-class="bg-white text-primary"
        >
          Maximize
        </q-tooltip>
      </q-btn>
      <q-btn
        v-close-popup
        dense flat icon="close"
      >
        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section>
      <div class="text-h6">Alert</div>
    </q-card-section>

    <q-card-section>
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['hey, how are you?']"
        stamp="7 minutes ago"
        size="10"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['hey, how are you?']"
        size="10"
        stamp="7 minutes ago"
        sent
        bg-color="secondary"
      />
    </q-card-section>
  </q-card>
</q-dialog>
</template>

<script>
export default {
  // props: {
  //   dialog: { type: Boolean, default: false }
  // },

  data: () => ({
    maximizedToggle: true,
    visible: false
  })
}
</script>
