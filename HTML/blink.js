function blink()
{
    let body = document.querySelector('body');
    if (body.style.visibility == 'hidden') {
        body.style.visibility = 'visible';
    }
    else {
        body.style.visibility = 'hidden';
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    window.setInterval(blink, 500);
});
