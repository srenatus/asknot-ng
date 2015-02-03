$(document).ready(function() {
    var first = question_tree['children'][0]['id'];

    var found = false;
    $.each(all_ids, function(i, idx) {
        if (location.href.endsWith(idx)) {
            $("#" + idx).removeClass('hidden');
            found = true;
        }
    });
    if (! found) {
        $("#" + first).removeClass('hidden');
        history.pushState({}, '', location.href + SEP + first);
    }


    // Wire up the "yes" links
    $("a#yes").click(function(event) {
        $(this).parent().parent().addClass('hidden');
        var next = $(this).attr('data-next');
        $('#' + next).removeClass('hidden');
        history.pushState({}, '', location.href + SEP + next);
    });

    // Wire up the "nope" links
    $("a#nope").click(function(event) {
        console.log('called');
        $(this).parent().parent().addClass('hidden');
        var next = $(this).attr('data-next');
        console.log('next is ' + next);
        $('#' + next).removeClass('hidden');
        history.go(-1);
        history.pushState({}, '', location.href + SEP + next);
    });

    // Wire up the "back" links
    $("a#back").click(function(event) {
        $(this).parent().parent().addClass('hidden');
        history.go(-1);
        var tokens = location.href.split(SEP);
        var next = tokens.slice(-1).pop();
        $('#' + next).removeClass('hidden');
    });

});