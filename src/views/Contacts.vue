<template>
  <div class="screen">
    <div class="top">
      <a @click="$router.go(-1)" class="top__button top__button_back"></a>
      <p class="screen__name">Наши контакты</p>
    </div>
    <div class="menu">
      <div class="menu-set">
        <p class="caption">Связь с оператором</p>
        <a class="menu-item menu-item__icon menu-item__icon_phone" :href="`tel:${cont.PHONE}`">{{cont.PHONE}}</a>
      </div>

      <div class="menu-set">
        <p class="caption">Социальные сети и мессенджеры</p>
        <a class="menu-item menu-item__soc" :href="cont.INSTAGRAM">
          <img src="images/soc-inst.svg" alt /> Instagram
        </a>
        <a class="menu-item menu-item__soc" :href="cont.FB">
          <img src="images/soc-fb.svg" alt /> Facebook
        </a>
        <a class="menu-item menu-item__soc" :href="cont.VK">
          <img src="images/soc-vk.svg" alt /> Вконтакте
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const urlRations = 'http://hedofood.com/ajax/json_get_cont.php'
export default {
  name: 'contacts',
  data () {
    return {
      cont: []
    }
  },
  mounted () {
    axios.get(urlRations).then(response => {
      this.cont = response.data
      console.log(this.cont)
    })
  }
}
</script>
