<template>
<base-dialog-form
  :dialog-state-name="dialogStateName"
  :form="form"
  :form-rules="formRules"
  :form-settings="formSettings"
  :btn-submit-label="btnSubmitLabel"
  :dialog-form-title="dialogFormTitle"
  :message-toast-base-name="messageToastBaseName"
  :message-toast-action="messageToastAction"
  :store-base="storeBase"
  :store-action="storeAction"
>
  <div class="row q-my-md">
    <q-btn
      class="col"
      color="blue"
      push
    >
      <div class="row items-center no-wrap">
        <q-avatar size="1.5rem">
          <img
            src="statics/social/fb.jpg"
          >
        </q-avatar>
        <div class="text-center q-px-sm">
          Facebook
        </div>
      </div>
    </q-btn>
    <q-btn
      class="col"
      color="primary-outline"
      push
    >
      <div class="row items-center no-wrap">
        <q-avatar size="1.5rem">
          <img
            src="statics/social/twitter.png"
          >
        </q-avatar>
        <div class="text-center q-px-sm text-cyan">
          Twitter
        </div>
      </div>
    </q-btn>
  </div>
</base-dialog-form>
</template>

<script>
export default {
  name: 'DialogSignUp',

  data () {
    return {
      dialogStateName: 'dialogSignUp',
      btnSubmitLabel: 'Registrar',
      dialogFormTitle: 'Crear una cuenta',
      messageToastBaseName: 'register',
      messageToastAction: 'successful',
      storeBase: 'auth',
      storeAction: 'signUp',
      form: {
        email: '',
        password: '',
        passwordConfirm: '',
        names: '',
        surnames: '',
      },
      formRules: {
        email: 'required|email',
        password: 'required|min:8',
        passwordConfirm: 'required|min:8|confirmed:password',
        names: 'required',
        surnames: 'required',
      },
      formSettings: {
        email: { type: 'text', icon: 'person' },
        password: { type: 'password', icon: 'lock', ref: 'password' }, // use ref for password confirm rule
        passwordConfirm: { type: 'password', icon: 'lock' },
        names: { type: 'text', icon: 'person' },
        surnames: { type: 'text', icon: 'person' },
      }
    }
  },
}
</script>
