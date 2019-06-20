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
            { position: 5, player: "" },
            { position: 6, player: "" }
        ]
    ];

    var calculate_winner = () => {
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
                return;
            }
        }
    };

    var player = "player_1";

    var change_player_turn = () => {
        player = player === "player_1" ? "player_2" : "player_1";
    };

    var update_game_board = position => {
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

        calculate_winner();
        change_player_turn();
    };

    return { update_game_board, turn: player };
})();

var game_board_ui = (function() {
    var init = () => {
        var position_els = [...document.getElementsByClassName("position")];

        var submit_turn = evt => {
            var player_position = this.getAttribute("data-position");
            game_board.update_game_board(player_position);

            this.innerHTML = game_board.turn === "player_1" ? "X" : "O";

            this.removeEventListener("click", submit_turn);
        };

        position_els.forEach(function(position) {
            position.addEventListener("click", submit_turn);
        });
    };

    return { init };
})();

// Use factory function for player
// const Player = player => {
//     const submit = position => {
//         game_board.update_game_board(player, position);
//     };
//     return {
//         submit,
//         name
//     };
// };

// const jon = Player("jon");
// const jane = Player("jane");
// jon.submit(0);
// jane.submit(1);

game_board.update_game_board(0);
game_board.update_game_board(1);
game_board.update_game_board(2);
