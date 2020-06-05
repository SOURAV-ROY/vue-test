var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    counter: 0
  }
})

var counter = new Vue({
  el: '#counter',
  data: {
    message: 'Vue is Awesome!',
    counter: 0,
    result: ''
  },
  methods:{
  	increase: function(){
  		this.counter++;
  		this.result= this.counter> 5 ? 'Greater 5' : 'Smaller 5'
  	},
  	decrease: function(){
  		this.counter--;
  		this.result= this.counter> 5 ? 'Greater 5' : 'Smaller 5'
  	}
  }
})

var box = new Vue({
  el: '#box',
  data:{
    attachRed: false,
    color: 'green'
  },
  computed: {
    divClasses: function(){
      return{
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  },
});