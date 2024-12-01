document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.myButton');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const buttonId = button.id;
            if (buttonId === 'button1') {
                alert('Vous avez cliqué sur le bouton 1 !');
            } else if (buttonId === 'button2') {
                alert('Vous avez cliqué sur le bouton 2 !');
            } else if (buttonId === 'button3') {
                alert('Vous avez cliqué sur le bouton 3 !');
            }
        });
    });
});