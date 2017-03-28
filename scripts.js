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

    if (i < 51) {
        run(i, "moveup1");
    } else if (i > 50 && i < 151) {
        run(i, "moveup2");
    } else if (i > 150 && i < 304) {
        run(i, "moveup3");
    }
}

function run(i, animation) {
    setTimeout(function() {
        var that = $(lines[i]);
        that.css({
            "animation": animation + " 1s ease-in-out 0.1s infinite alternate"
        });
    }, 5 * i);
}