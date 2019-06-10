// Store the gameboard as an array inside of a Gameboard object

// Use modular pattern for game_board
const game_board = () => {
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

    var turn = "";
    var calculate_winner = () => {
        for (let i = 0; i < positions.length; i++) {
            for (let j = 0; j < positions[i].length; j++) {}
        }
    };

    var update_game_board = (player, position) => {
        positions.forEach(function(position_object) {
            if (position_object.position === position) {
                position.player = player;
            }
        });

        calculate_winner();
    };
    return { update_game_board, turn };
};

// Use factory function for player
const Player = (player, position) => {
    return {};
};

const jon = Player("jon");
const jane = Player("jane");
