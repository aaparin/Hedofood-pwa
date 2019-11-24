<template>
  <div>
    <p class="accordion-title">{{f.ID}}</p>
  </div>
</template>

<script>
module.exports = {
  props: ['f'],
  data: function () {
    return {
      f: this.f
    }
  }
}
</script>
