<template>
  <div class="screen screen_rations">
    <div class="top">
      <router-link
        tag="a"
        to="/index"
        class="top__button top__button_back"
      ></router-link>
      <p class="screen__name">Выберите меню</p>
    </div>
    <ul class="calories dragscroll">
      <li v-for="(type, k) in types" :key="type.ID">
        <a v-bind:class="[k === 0 ? 'active' : '']" href :data-tab="k">{{type.NAME}}</a>
      </li>
    </ul>
    <div class="calories__inner" v-bind:class="[i === 0 ? 'active' : '']"  :data-tab="i" v-for="(item, i) in menu" :key="item.ID">
      <div class="ration-date" v-bind:class="[i === 0 ? 'active' : '']" :data-date="i">
        <ul class="food-value">
          <li>
            {{item.KKAL}}
            <span>калорий</span>
          </li>
          <li>
            {{item.BEL}}
            <span>белки</span>
          </li>
          <li>
            {{item.FAT}}
            <span>жиры</span>
          </li>
          <li>
            {{item.UGLEVOD}}
            <span>углеводы</span>
          </li>
        </ul>
        <div class="owl-carousel ration-carousel">
          <div v-for='b in item.MENU' :key='b.ID'>
            <div class="ration__item">
              <div class="ration__item-content">
                <p>{{b.TYPE}}</p>
                <img class="ration__item-img" :src="b.IMG" alt />
                <div class="ration__item-info">
                  <p
                    class="ration__item-name"
                  >{{b.NAME}}</p>
                  <p class="ration__item-weight">
                    {{b.GRAMM}} гр
                    <span>|</span> {{b.KKAL}} Ккал
                    <!-- <a href class="info"></a> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ration__order">
          <div class="select__wrap">
            <select name>
              <option value>6 дней</option>
              <option value>12 дней</option>
              <option value>24 дня</option>
            </select>
          </div>
          <div class="ration__price" id="price6">
            <s>{{item.PRICE_6_OLD}}</s>
            {{item.PRICE_6}}
            <span></span>
          </div>
          <div class="ration__price" id="price12" style="display:none">
            <s>{{item.PRICE_12_OLD}}</s>
            {{item.PRICE_12}}
            <span></span>
          </div>
          <div class="ration__price" id="price24" style="display:none">
            <s>{{item.PRICE_24_OLD}}</s>
            {{item.PRICE_24}}
            <span></span>
          </div>
          <a href class="button">Хочу это меню!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'owl.carousel'
import axios from 'axios'
const urlRations = 'https://hedofood.com/ajax/json_get_rations_types.php?ID='
const urlMenu = 'https://hedofood.com/ajax/json_get_menu.php?ID='
export default {
  name: 'rationSelect',
  data () {
    return {
      types: [],
      menu: []
    }
  },
  created () {},
  mounted () {
    var id = this.$route.params.catId.toString()
    axios.get(urlRations + id).then(response => {
      this.types = response.data
    })
    axios.get(urlMenu + id).then(res => {
      this.menu = res.data
      this.$nextTick(() => {
        $('div.ration-carousel').each(function (index) {
          $(this).owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            autoplay: false,
            margin: 20,
            navText: ['', '']
          })
        })
        $('.calories a').click(function (event) {
          event.preventDefault()
          $('.calories a').removeClass('active')
          $(this).addClass('active')
          $('.calories__inner').removeClass('active')
          var tabcode = $(this).data('tab')
          $('.calories__inner[data-tab=' + tabcode + ']').addClass('active')
          $(this).find('.ration-carousel').owlCarousel({
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
    })
    console.log(this.menu)
  },
  updated: function () {},
  beforeRouteEnter (to, from, next) {
    next(vm => {})
  }
}
</script>
