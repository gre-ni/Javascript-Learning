document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('form').addEventListener('submit', 
    function(event) {
        alert('hello, ' + document.querySelector('#name').value);
        // Stops default action of event happening, here no form submission
        event.preventDefault();
    }    
    );
});