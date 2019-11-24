<template>
  <div class='screen screen_rations'>
    <Navbar />
    <div class='owl-carousel rations-carousel'>
      <div v-for='ration in rations' :key='ration.id'>
        <div class='rations__item'>
          <div class='rations__item-icon' :class='ration.UF_PWA_ICO'></div>
          <div class='rations__item-content'>
            <p>рацион</p>
            <p class='rations__item-name'>{{ration.NAME}}</p>
            <p v-html='ration.DESCRIPTION'></p>
            <p class='rations__item-price'>
              {{ration.UF_PWA_PRICE}}
              <span>
                руб./
                <br />сутки
              </span>
            </p>
            <router-link
              tag="a" v-bind:to="{name: 'rationselect',params: {catId: ration.ID, rId: 0}}" class="button"
            >Хочу это меню!</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import $ from 'jquery'
import 'owl.carousel'
import axios from 'axios'
const urlRations = 'https://hedofood.com/ajax/json_get_rations.php'
export default {
  name: 'index',
  components: {
    Navbar
  },
  data () {
    return {
      rations: []
    }
  },
  created () {
    console.log('propertyComputed will update, as this.property is now reactive.')
  },
  mounted () {
    axios.get(urlRations).then(response => {
      this.rations = response.data
      this.$nextTick(() => {
        $('.rations-carousel').owlCarousel({
          loop: true,
          items: 1,
          nav: false,
          dots: true,
          autoplay: false,
          margin: 20,
          navText: ['', '']
        })
      })
    })
  },
  updated: function () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    })
  }
}
</script>
