window.addEventListener("load", () => {

    const tdList = document.getElementsByTagName('td');
    const currentPlayerScreen = document.getElementById('currentPlayerScreen');

    const players = ['O', 'X'];
    let round = 0;

    const victories = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    function checkWin() {
    }

    function updateCurrentPlayerScreen() {
    }



    let i = 0;

    while (i < tdList.length) {
        const caze = tdList[i];

        caze.addEventListener("click", () => {

            if (caze.innerText === '') {
                caze.innerText = players [round % players.length /* 2 */];
                checkWin();
                round++;
                updateCurrentPlayerScreen();
            }
        });

        i++;
    }
});