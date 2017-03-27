for (var i = 0; i < 304; i++) {

    var line = "<div class='line'></div>";
    $(".flag").append(line);

}

$(".line").each(function(i) {

    if (i < 101) {
        $(this).addClass("blue");
    } else if (i > 101 && i < 201) {
        $(this).removeClass("blue").addClass("yellow");
    } else if (i > 201 && i < 304) {
        $(this).removeClass("yellow").addClass("line red");
    }

});

var lines = $(".line");

for (var i = 0; i < lines.length; i++) {
    run(i);
}

function run(i) {
    setTimeout(function() {
        var that = $(lines[i]);
        that.css({
            "animation": "moveup 1s ease-in-out 0.1s infinite alternate"
        });
    }, 5 * i);
}