<template>
  <div class="screen">
    <div class="top">
      <a @click="$router.go(-1)" class="top__button top__button_back"></a>
      <p class="screen__name">FAQ</p>
    </div>
    <div class="menu">
      <div v-for="(f) in cat" :key="f.ID">
        <p class="accordion-title" v-html="f.NAME"></p>
          <div class="accordion" v-for="q in f.QUESTIONS" :key="q.ID">
            <a class="accordion-toggler">{{q.QUEST}}</a>
            <div>
              <p>{{q.ANSWER}}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
const urlRations = 'https://hedofood.com/ajax/json_get_faq.php'
export default {
  name: 'faq',
  data () {
    return {
      cat: []
    }
  },
  mounted () {
    axios.get(urlRations).then(response => {
      this.cat = response.data
      console.log(response.data)
      this.$nextTick(() => {
        $('.accordion-toggler').click(function (event) {
          event.preventDefault()
          $(this).toggleClass('active')
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
