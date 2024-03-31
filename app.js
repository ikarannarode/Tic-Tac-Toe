let td = document.querySelectorAll('.box');
let icon = document.querySelectorAll('i');
let count = 0;
let prob = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 5, 8], [3, 6, 9], [1, 4, 7], [1, 5, 9], [3, 5, 7]];
td.forEach(function (ev) {
    ev.addEventListener('click', Draw)
    function Draw() {
        count++;
        if (count % 2 == 0) {
            ev.setAttribute('class', 'bi-circle');
            ev.removeEventListener('click', Draw);
        }
        else {
            ev.setAttribute('class', 'bi-x-lg');
            ev.removeEventListener('click', Draw);
        }
        let winner = checkWinner();
        if (winner) {
            alert("Winner: " + winner);
        }
        else if (count === 9) {
            alert("It's a tie!");
        }
    }
})

function checkWinner() {
    for (let i = 0; i < prob.length; i++) {
        let [a, b, c] = prob[i];
        if (td[a - 1].classList.contains('bi-x-lg') && td[b - 1].classList.contains('bi-x-lg') && td[c - 1].classList.contains('bi-x-lg')) {
            return 'X';
        }
        else if (td[a - 1].classList.contains('bi-circle') && td[b - 1].classList.contains('bi-circle') && td[c - 1].classList.contains('bi-circle')) {
            return 'O';
        }
    }
    return null;
}