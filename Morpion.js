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
        let index = 0;
        while (index < victories.length) {
            const currentSolution = victories[index];


            const td1 = tdList[currentSolution[0]];
            const td2 = tdList[currentSolution[1]];
            const td3 = tdList[currentSolution[2]];


            if (td1.innerText !== ''
             && td1.innerText === td2.innerText
             && td1.innerText === td3.innerText) {
                Swal.fire({
                    'icon': 'success',
                    'text': `${players[round % players.length]} a gagné !!!`
                })
                return true;
            }
            index++;
        }

        if (round === 8) {
            Swal.fire({
                'icon': 'error',
                'text': `Vous avez fait un Match nul tout comme vous!!!`
            });
        }

        return false;
    }

    function updateCurrentPlayerScreen() {
        currentPlayerScreen.innerText = players[round % 2];
    }
    updateCurrentPlayerScreen();


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