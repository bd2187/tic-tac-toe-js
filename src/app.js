// Store the gameboard as an array inside of a Gameboard object

// Use modular pattern for game_board
const game_board = (() => {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    var positions = [
        [
            { position: 0, player: "" },
            { position: 1, player: "" },
            { position: 2, player: "" }
        ],
        [
            { position: 3, player: "" },
            { position: 4, player: "" },
            { position: 5, player: "" }
        ],
        [
            { position: 6, player: "" },
            { position: 7, player: "" },
            { position: 8, player: "" }
        ],
        [
            { position: 0, player: "" },
            { position: 3, player: "" },
            { position: 6, player: "" }
        ],
        [
            { position: 1, player: "" },
            { position: 4, player: "" },
            { position: 7, player: "" }
        ],
        [
            { position: 2, player: "" },
            { position: 5, player: "" },
            { position: 8, player: "" }
        ],
        [
            { position: 0, player: "" },
            { position: 4, player: "" },
            { position: 8, player: "" }
        ],
        [
            { position: 2, player: "" },
            { position: 4, player: "" },
            { position: 6, player: "" }
        ]
    ];

    var check_winner = () => {
        for (let i = 0; i < positions.length; i++) {
            let row = positions[i];
            let winner = false;

            if (
                row[0].player !== "" &&
                row[0].player === row[1].player &&
                row[1].player === row[2].player
            ) {
                console.log(row);
                winner = true;
            }

            if (winner) {
                console.log("winner");
                return true;
            }
        }

        return false;
    };

    var player = "player_2";

    var change_player_turn = () => {
        player = player === "player_1" ? "player_2" : "player_1";
    };

    var update_game_board = position => {
        change_player_turn();

        positions = positions.map(function(row) {
            return row.map(function(position_object) {
                if (
                    position_object.player === "" &&
                    position_object.position === position
                ) {
                    position_object.player = player;
                }

                return position_object;
            });
        });

        var did_player_win = check_winner();

        return {
            player,
            did_player_win
        };
    };

    var start_new_game = function() {
        player = "player_2";

        positions = positions.map(function(row) {
            return row.map(function(position_object) {
                position_object.player = "";
                return position_object;
            });
        });
        console.warn(positions);
    };

    return { update_game_board, start_new_game };
})();

var game_board_ui = (function() {
    var init = () => {
        var position_els = [
            ...document.getElementsByClassName("game-board__position")
        ];

        var submit_turn = function(evt) {
            var player_position = parseInt(this.getAttribute("data-position"));
            var { player, did_player_win } = game_board.update_game_board(
                player_position
            );

            this.innerHTML =
                player === "player_1"
                    ? '<i class="fas fa-times"></i>'
                    : '<i class="far fa-circle"></i>';

            if (did_player_win) end_game();

            this.removeEventListener("click", submit_turn);
        };

        var end_game = function() {
            position_els.forEach(function(position) {
                position.removeEventListener("click", submit_turn);
            });

            // Update UI to show winner
        };

        position_els.forEach(function(position) {
            position.addEventListener("click", submit_turn);
        });

        var new_game_btn_el = document.getElementsByClassName(
            "new-game-btn"
        )[0];

        new_game_btn_el.addEventListener("click", function() {
            game_board.start_new_game();
            position_els.forEach(function(position) {
                position.innerHTML = "";
            });

            end_game();
            position_els.forEach(function(position) {
                position.addEventListener("click", submit_turn);
            });
        });
    };

    return { init };
})();

game_board_ui.init();
