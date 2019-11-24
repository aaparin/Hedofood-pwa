<template>
  <div class="screen">
    <div class="top">
      <a @click="$router.go(-1)" class="top__button top__button_back"></a>
      <p class="screen__name">Авторизация</p>
    </div>
    <div class="menu">
      <div class="menu-set">
        <p class="caption">Введите код из СМС</p>
        <div class="input-wrap input-wrap_simple">
          <masked-input v-model="kode" mask="1111" placeholder="Код" />
        </div>
      </div>
      <a v-on:click="check_sms" class="button button_bottom" style="bottom:auto">Войти</a>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import MaskedInput from 'vue-masked-input'
// const urlRations = 'http://hedofood.com/ajax/json_get_cont.php'
export default {
  name: 'contacts',
  data () {
    return {
      kode: '',
      phone: ''
    }
  },
  mounted () {
    this.phone = this.$route.params.phone.toString()
    console.log(this.phone)
  },
  components: {
    MaskedInput
  },
  methods: {
    check_sms: function () {
      console.log(this.phone + ' ' + this.kode)
    }
  }
}
</script>
