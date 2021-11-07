var app = new Vue({
  el: '#app',
  data: {
    // message: 'Hello Vue!',
    adult: 0,
    student: 0,
    baby: 0,
    senior: 0,
  },
  computed: {
    price: function () {
      const result = this.adult * 1000
        + this.student * 700
        + this.baby * 500
        + this.senior * 900;
      return result.toLocaleString();
    }
  }
})