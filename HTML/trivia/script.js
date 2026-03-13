document.addEventListener('DOMContentLoaded', function(event){

    let correctAnswerOne = 'Arcane Explosion';
    let answers = document.querySelectorAll('.answer');
    let revealMultiple = document.querySelector('#reveal-one');

    for (answer of answers) {
        answer.addEventListener('click', function(event) {
            if (event.target.innerText == correctAnswerOne) {
                this.style.backgroundColor = 'green';
                revealMultiple.innerHTML = 'Correct!';
            }
            else {
                this.style.backgroundColor = 'red';
                revealMultiple.innerHTML = 'Incorrect';
            }
        });
    }

    let correctAnswerTwo = 'Polymorph';
    let input = document.querySelector('#user-input')
    let submit = document.querySelector('#user-submit');
    let revealSingle = document.querySelector('#reveal-two');

    submit.addEventListener('click', function(event) {
        event.preventDefault() // Prevent automatic refresh from form submit
        let inputAnswer = input.value;

        if (inputAnswer == correctAnswerTwo) {
            input.style.backgroundColor = 'green';
            revealSingle.innerHTML = 'Correct!';
        }
        else {
            input.style.backgroundColor = 'red';
            revealSingle.innerHTML = 'Incorrect';
        }
    });

});
