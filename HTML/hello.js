document.addEventListener('DOMContentLoaded', function(event) {
    let input = document.querySelector('input');
    input.addEventListener('keyup', function(event) {
        // Storing reference to p in a variable, so that I don't have to query repeatedly
        let name = document.querySelector('p');
        if(input.value) {
            // innerHTML represents content of the element
            name.innerHTML = `hello, ${input.value}`;
        }
        else {
            name.innerHTML = `hello, whoever you are`;
        }
    });
});