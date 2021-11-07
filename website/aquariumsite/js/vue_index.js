  var app = new Vue({
    el: '#app',
    data: {
      active: 'event'
    },
    methods: {
      clickNewsTab(name) {
        this.active = name;
      }
    }
  })