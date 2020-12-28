
$(function () {
    //点击去注册的按钮
    $('#link_reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    //点击去登录的按钮
    $('#link_login').on('click', function () {
        $('.reg-box').hide();
        $('.login-box').show();
    })


})