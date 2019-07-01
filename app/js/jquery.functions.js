$(function () {
    $('.showForm').on('click', function (e) {
        e.preventDefault();
        $('.form--content form').show();
        $('.showForm').hide();
    });
});