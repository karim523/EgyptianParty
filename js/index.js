/// <reference types="../@types/jquery" />

for (let i = 1; i <= 4; i++) {
    $(`.singer-header${i}`).on('click', function () {
        $(`.singer-title${i}`).slideToggle(900)
    })

}
$('.openIcon').on('click', function () {
    $('.open').animate({ width: '16%' }, 1000)
    $('.openIcon').animate({ left: '16%' }, 1000)
    $('.title').animate({ paddingLeft: '170px' }, 1000)

})
$('.close').on('click', function () {
    $('.open').animate({ width: '0%' }, 1000)
    $('.openIcon').animate({ left: '0' }, 1000)
    $('.title').animate({ paddingLeft: '0' }, 1000)



})
$('textarea').on('input', function () {
    let myLength = $(this).val().length;

    $('#num').text(
        100 - myLength <= 0 ? "Your avilable char finished" : 100 - myLength
    )
})





const oldDate = new Date('2023-10-25T00:00:00');

function updateTimer() {
    const currentDate = new Date();
    const differenceInMs = oldDate - currentDate;

    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (-1000 * 60 * 60));
    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (-1000 * 60));
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / -1000);

    $('#days').html(`${days}`);
    $('#hours').html(`${hours}`);
    $('#minutes').html(`${minutes}`);
    $('#seconds').html(`${seconds}`);
}

setInterval(updateTimer, 1000);