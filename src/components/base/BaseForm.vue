<template>
<div>
  <q-card class="q-my-xl q-mx-xs-sm">
    <q-card-section>
      <div class="text-h6 text-center text-secondary">
        {{ dialogFormTitle }}
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-form
        class="q-pa-sm-none q-pa-md-md"
        @submit="onSubmit"
      >
        <q-input
          v-for="(item, key, index) in form" :key="index"
          :ref="formSettings[key].ref"
          v-model="form[key]"
          v-validate="formRules[key]"
          :data-vv-as="$t(key)"
          :label="$t(key)"
          :autogrow="formSettings[key].autogrow"
          :error-message="formErrors[key]"
          :error="!!formErrors[key]"
          color="secondary"
          :name="key"
          :type="formSettings[key].type"
          bottom-slots
          :placeholder="formSettings[key].placeholder"
          autocomplete="off"
        >
          <template v-slot:prepend>
            <q-icon
              :name="formSettings[key].icon"
              color="secondary"
            />
          </template>
        </q-input>

        <slot />

        <base-btn-submit :btn-submit-label="btnSubmitLabel" />

      </q-form>
    </q-card-section>
  </q-card>

  <q-page-sticky
    position="bottom-right"
    :offset="[18, 18]"
  >
    <q-btn
      fab
      icon="exit_to_app"
      color="secondary"
      class="rotate-180"
      :to="{ name: 'dashboard' }"
    />
  </q-page-sticky>
  <div class="row">
    <p class="text-break col">{{ fff }}</p>
  </div>
</div>
</template>

<script>
import validateFormMixin from 'src/mixins/validateFormMixin'

import { mapState, mapMutations } from 'vuex'

import { Notify } from 'quasar'

export default {
  mixins: [validateFormMixin],

  props: {
    form: { type: Object, required: true },
    formRules: { type: Object, required: true },
    formSettings: { type: Object, required: true },
    dialogFormTitle: { type: String, default: 'submit' },
    btnSubmitLabel: { type: String, required: true },
    messageToastBaseName: { type: String, required: true },
    messageToastAction: { type: String, required: true },
    storeBase:{ type: String, required: true },
    storeAction: { type: String, required: true },
    images: { type: Array, default: () => [] },

  },

  data () {
    return {
      fff: ''
    }
  },

  computed: {
    ...mapState('errors', ['formErrors']),
    ...mapState('auth', ['user']),
    userFullName () {
      const { names, surnames } = JSON.parse(localStorage.getItem('user'))
      return names + " " + surnames
    }
  },

  watch: {
    images (v) {
      this.images = v
    }
  },

  methods: {
    ...mapMutations('errors', ['CLEAN_ERRORS']),

    async onSubmit () {
      if (await this.$_validateFormMixin_isValid()) {
        // this.$store.commit('spinners/ENABLE_PROCESSING_FORM')
        // try {
        // await this.$store.dispatch(`${this.storeBase}/${this.storeAction}`, this.form)
        // console.warn(this.form)
        const fff = {
          type: "perdido",
          avatarOwner: `fallBack`,
          nameOwner: this.userFullName,
          day: this.form.dia,
          hour: this.form.hora,
          views: 0,
          comments: 0,
          hasView: false,
          rating: 0,
          title: this.form.nombre,
          description: this.form.descripcion,
          images: this.resolveImages(),
          slide: "1"
        }

        this.$store.commit('posts/ADD_NEW_POST', fff)

        Notify.create({
          message: this.$t(`${this.messageToastBaseName}.${this.messageToastAction}`),
          color: 'positive',
          icon: 'check_circle'
        })
        // this.$emit('response-success')
      }
      // catch (error) {}
      // this.$store.commit('spinners/DISABLE_PROCESSING_FORM')
    },

    resolveImages () {
      const imgs = this.images.filter(i => i !== null)
      return imgs.map((img, i) => ({name: (i+1), src: img }))
    }
  },
}
</script>

<style>
.text-break {
  word-break: break-all;
  word-wrap: break-word;
}
</style>