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
    methods: {
        increase: function () {
            this.counter++;
            this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        },
        decrease: function () {
            this.counter--;
            this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    }
})

var box = new Vue({
    el: '#box',
    data: {
        attachRed: false,
        color: 'green',
        width: 100
    },
    computed: {
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle: function(){
            return{
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    },
});

new Vue({
    el:'#show',
    data:{
        show: true
    }
})

new Vue({
    el:'#list',
    data:{
        ingredients: ['Potato','Tomato','Onion'],

        persons: [
            {name: 'Sourav', age: 24, color: 'red'},
            {name: 'Roy', age: 22, color: 'black'},
            {name: 'BMW', age: 23, color: 'blue'},
            {name: 'Bugatti', age: 21, color: 'pink'}
        ]
    }
})