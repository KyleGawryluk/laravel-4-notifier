function showNotifier(text) {
    $('.notifier').slideDown('fast');
    $('.notifier').text(text);
    //optional
    setTimeout(function () {
        hideNotifier();
    }, 3000);

}

function hideNotifier() {
    $('.notifier').slideUp('fast');

}

$('.view').on('click', function () {
    showNotifier('Loading');
});