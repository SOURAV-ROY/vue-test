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
            this.monsterHealth -= this.calculateDamage(5, 12);
            // this.monsterHealth -= damage;

            if(this.checkWin()){
                return;
            }

            // if (this.monsterHealth <= 0) {
            //     alert("You Win !!!");
            //     this.gameIsRunning = false;
            //     return;
            // }

            this.playerHealth -= this.calculateDamage(3, 10);
            this.playerHealth -= damage;
            this.checkWin();

            // if (this.playerHealth <= 0) {
            //     alert("You Los !!!");
            //     this.gameIsRunning = false;
            // }
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },

        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won !! New Game Start :>')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost !! New Game Start :>')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    },
})