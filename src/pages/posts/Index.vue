<template>
<div>

  <base-form
    :form="form"
    :form-rules="formRules"
    :form-settings="formSettings"
    :btn-submit-label="btnSubmitLabel"
    :dialog-form-title="dialogFormTitle"
    :message-toast-base-name="messageToastBaseName"
    :message-toast-action="messageToastAction"
    :store-base="storeBase"
    :store-action="storeAction"
    :images="images"
    @response-success="responseSuccess"
  >
    <input-image
      v-for="(image, indexImg) in images" :key="indexImg"
      :ref="`imgFile${indexImg}`"
      v-model="images[indexImg]"
      :label="`imagen`"
      :data-vv-as="`imagen`"
      @img-file="getImgFile(...arguments, indexImg)"
      @clear-img="clearImgFile(indexImg)"
    />
  </base-form>
</div>
</template>

<script>
export default {
  name: 'PostsPage',

  data () {
    return {
      images: [null],
      btnSubmitLabel: 'PUBLICAR',
      dialogFormTitle: 'Formulario de desaparición',
      messageToastBaseName: 'registered',
      messageToastAction: 'successful',
      storeBase: 'auth',
      storeAction: 'signIn',

      form: {
        nombre: '',
        descripcion: '',
        dia: null,
        hora: null,
      },
      formRules: {
        nombre: 'required',
        descripcion: 'required',
        dia: 'required',
        hora: 'required',
      },
      formSettings: {
        nombre: { type: 'text', icon: 'person', placeholder: 'Nombre del estraviado', autogrow: true },
        descripcion: { type: 'text', icon: 'description', placeholder: 'Descripción de los hechos', autogrow: true },
        dia: { type: 'date', icon: 'date_range' },
        hora: { type: 'time', icon: 'access_time' }
      }
    }
  },

  methods: {
    responseSuccess () {
      this.$router.push({ name: 'about' })
    },

    getImgFile (val, index) {
      this.images[index] = val.url
      if (this.images.length < 5) {
        this.images.push(null)
      }
    },
    clearImgFile (index) {
      // console.warn(this.images)
      this.images.forEach(i => console.warn(i))
      this.images.splice(index, 1)
      console.log('------------- :')
      // console.warn(this.images.length)
      this.images.forEach(i => console.warn(i))
      // console.warn(this.images)
      if (this.images.length === 4)
        this.images.push(null)
    }

  },
}
</script>
