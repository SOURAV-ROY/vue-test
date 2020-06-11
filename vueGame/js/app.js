new Vue({
    el: '#app',
    data: {
        name: "Sourav",
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        truns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true,
                this.playerHealth = 100,
                this.monsterHealth = 100
        },

        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.truns.unshift({
                isPlayer: true,
                text: 'Player Hit Monster For ' + damage
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
            // this.playerHealth -= this.calculateDamage(5, 12);
            // this.checkWin();
        },

        specialAttack: function () {
            this.monsterHealth -= this.calculateDamage(10, 20);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
            // this.playerHealth -= this.calculateDamage(5, 12);
            // this.checkWin();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },

        monsterAttacks: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.truns.unshift({
                isPlayer: false,
                text: 'Monster Hit Player For ' + damage
            })
        },

        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won !! New Game Start 💚')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost !! New Game Start 😜')) {
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