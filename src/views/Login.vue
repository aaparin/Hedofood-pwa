<template>
  <div class="screen">
    <div class="top">
      <a @click="$router.go(-1)" class="top__button top__button_back"></a>
      <p class="screen__name">Авторизация</p>
    </div>
    <div class="menu">
      <div class="menu-set">
        <p class="caption">Введите ваш номер телефона</p>
        <div class="input-wrap input-wrap_simple">
          <masked-input id="phone" v-model="phone" mask="\+\7(111)111-11-11" placeholder="Номер телефона" />
        </div>
      </div>
      <a v-on:click="send_sms" class="button button_bottom" style="bottom:auto">Получить код</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MaskedInput from 'vue-masked-input'
const urlPhone = 'https://hedofood.com/ajax/send_auth_sms.php?phone='
export default {
  name: 'contacts',
  data () {
    return {
      cont: [],
      phone: ''
    }
  },
  components: {
    MaskedInput
  },
  mounted () {
  },
  methods: {
    updateAnnouncement (value) {
      this.phone = value
    },
    send_sms: function (event) {
      axios.get(urlPhone + this.phone).then(response => {
        console.log(response.data)
      })
      this.$router.push({ name: 'login2', params: { phone: this.phone } })
    }
  }

}
</script>
