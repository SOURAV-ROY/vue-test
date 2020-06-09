new Vue({
    el: '#app',
    data: {
        name: "Sourav",
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100
        },
        attack: function () {
            // var max = 10;
            // var min = 3;
            // var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert("You Win !!!");
                this.gameIsRunning = false;
                return;
            }

            // max = 12;
            // min = 5;
            // damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert("You Los !!!");
                this.gameIsRunning = false;
            }
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }
    },
})