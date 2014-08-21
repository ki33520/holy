$(document).ready(function() {
    var type = 'all';
    var page = 1;
    var status = true;

    loadData(1, 'all');

    $('.nav-tabs li').bind('click', function() {
        status = true
        if (!$(this).hasClass('active')) {
            $('.nav-tabs li').removeClass('active');
            $(this).addClass('active');
            var tp = $(this).attr('id');
            if (tp == 'stock') {
                loadStock();
            }
            else {
                type = tp;
                loadData(1, tp);
            }
        }
        return false;
    });

    $('#container input[type=checkbox]').live('click', function() {
        message_clear();
        if ($(this).attr('checked')) {
            if ($(this).attr('class') == 'stk') {
                var published = $('.row-' + $(this).attr('value') + ' .status input').attr('checked');
                if (!published) {
                    message_show('alert-danger', 'Publish first!');
                    window.scroll(0,0);
                    return false;
                }
                update_status($(this).attr('value'), 3);//置顶
            }
            else if ($(this).attr('class') == 'sta') {
                update_status($(this).attr('value'), 1);//发布
            }
        }
        else {
            if ($(this).attr('class') == 'stk') {
                update_status($(this).attr('value'), 2);//取消置顶
            }
            else if ($(this).attr('class') == 'sta') {
                var stick = $('.row-' + $(this).attr('value') + ' .stick input').attr('checked');
                if (stick) {
                    message_show('alert-danger', 'Unstick first!');
                    window.scroll(0,0);
                    return false;
                }

                update_status($(this).attr('value'), 0);//撤下
            }
        }
    });

    $('#container input[type=text]').live('change', function() {
        message_clear();
        if ($(this).parent().attr('class') == 'percent') {
            var v = $(this).val();
            if (isNaN(v) || v < 0 || v > 100) {
                status = true;
                loadStock();
                message_show('alert-danger', 'Wrong percent value!');
            }
            else {
                update_stock($(this).attr('name'), $(this).parent().attr('class'), v);
            }
        }
        if ($(this).parent().attr('class') == 'stock') {
            var v = $(this).val();
            if (parseInt(v) != v || v < 0) {
                status = true;
                loadStock();
                message_show('alert-danger', 'Wrong stock value!');
            }
            else {
                update_stock($(this).attr('name'), $(this).parent().attr('class'), v);
            }
        }
        return false;
    });

    function update_status(uid, status) {
        $.ajax({
            type: 'POST',
            url: 'services/admin.php',
            data: 'uid=' + uid + '&status=' + status,
            cache: false,
            success: function(data) {
                if (data == 'ok') {
                    message_show('alert-success', 'Updated successfully!');
                }
            }
        });
    }

    function update_stock(id, type, value) {
        $.ajax({
            type: 'POST',
            url: 'services/admin.php',
            data: 'id=' + id + '&type=' + type + '&value=' + value,
            cache: false,
            success: function(data) {
                if (data == 'ok') {
                    message_show('alert-success', 'Updated successfully!');
                }
            }
        });
    }

    $('.pagination li').live('click',function() {
        status = true;
        var p = $(this).attr('name');
        page = p;
        if (!$(this).hasClass('active')) {
            $('.pagination li').removeClass('active');
            $(this).addClass('active');
            loadData(p, type);
        }
        return false;
    });

    function loading_show() {
        $('#loading').html('<img src="images/loading.gif"/>').show();
    }

    function content_clear() {
        message_clear();
        $('#container').html('');
    }

    function content_show(msg) {
        $('#loading').fadeOut(100, function() {
            if (status) {
                $('#container').html(msg);
                $('.pager-button').removeClass('active');
                $('.pager-button-' + page).addClass('active');
                $('.picture a').lightBox();
                status = false;
            }
        });
    }
    function message_clear() {
        $('.alert').hide();
    }
    function message_show(level, msg) {
        $('.' + level).html(msg);
        $('.' + level).show();
    }

    function loadData(pg, tp) {
        content_clear();
        loading_show();
        $.ajax({
            type: 'POST',
            url: 'services/loadData.php',
            data: 'page=' + pg + '&tp=' + tp,
            cache: false,
            success: function(msg) {
                $('#container').ajaxComplete(function(event, request, settings) {
                    content_show(msg);
                });
            }
        });
    }

    function loadStock() {
        content_clear();
        loading_show();
        $.ajax({
            type: 'POST',
            url: 'services/loadStock.php',
            data: 'type=stock',
            cache: false,
            success: function(msg) {
                $('#container').ajaxComplete(function(event, request, settings) {
                    content_show(msg);
                });
            }
        });
    }
});