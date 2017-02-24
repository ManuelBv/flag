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

var i = 0;

while (i < lines.length) {

    var done = false;

    var that = $(lines[i]);
    that.animate({
        marginTop: "-60px"
    }, {
        duration: 300,
        queue: false
    }, function() {
         done = true;
         return done;
    });

 console.log(done)
        i++;


};