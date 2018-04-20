for (var i = 0; i < 100; i++) {

    var line = "<div class='line'></div>";
    $(".flag").append(line);

}
var lines = $(".line");
var oneThird = Math.floor(lines.length / 3);
var twoThirds = Math.floor(lines.length * (2 / 3));

$(".line").each(function(i) {

    if (i < oneThird) {
        $(this).addClass("blue");
    } else if (i > oneThird && i < twoThirds) {
        $(this).removeClass("blue").addClass("yellow");
    } else if (i > twoThirds && i < lines.length) {
        $(this).removeClass("yellow").addClass("line red");
    }

});



for (var i = 0; i < lines.length; i++) {

    if (i < oneThird) {
        run(i, "moveup2");
    } else if (i > oneThird && i < twoThirds) {
        run(i, "moveup2");
    } else if (i > twoThirds && i < lines.length) {
        run(i, "moveup2");
    }
}

function run(i, animation) {
    setTimeout(function() {
        var that = $(lines[i]);
        that.css({
            "animation": animation + " 1s ease-in-out 1s infinite alternate"
        });
    }, 15 * i);
}