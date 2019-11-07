<template>
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
  @response-success="responseSuccess"
/>
</template>

<script>
export default {
  name: 'PostsPage',

  data () {
    return {
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
    }
  },
}
</script>
