$(document).ready(function() {
    $("#btn").click(function() {
        var number = 50;
        $("#btn").on("click", start);
        $("#submit").on("click", finish);

        function start() {
            counter = setInterval(timer, 1000);
            showMe(".question");
            showMe(".answers");
            showMe("#submit");
            showMe("#show-number");
            hideMe("#btn");
            hideMe(".rules");
            hideMe("#results");
        }

        function timer() {
            number--
            $("#show-number").html("<h2><mark><b>Time remaining: " + number + " seconds</b></mark></h2>");
            if (number === 0) {
                submitRe();
                stop();
            }
        }

        function stop() {
            clearInterval(counter);
            $("#results").show();
            $("#restart").show();
            $(".question").hide();
            $(".answers").hide();
            $("#submit").hide();
        }

        function finish() {
            number = 1;
            clearInterval(counter);
            timer();
        }

        function hideMe(e) {
            $(e).hide();
        }

        function showMe(e) {
            $(e).show();
        }

        function submitRe() {
            var questionResults = ["a","c","b","a","b","b","c","a","a","b"];
            var vars = {};
            var CorrectAnswers = 0;
            var IncorrectAnswers = 0;
            var Unanswered = 0;
            $("#show-number").hide();

            for (var i = 1; i < 11; i++) {
                if(typeof($("input[name=q"+i+"]:checked").val())  === "undefined") {
                    vars['results' + i] = "NoAnswer";
                } else {
                    vars['results' + i] = $("input[name=q"+i+"]:checked").val();
                }
            }

            for (var i = 1; i < 11; i++) {
                if ( vars['results' + i] === "NoAnswer") {
                    Unanswered++;
                } 
                else if (vars['results' + i] === questionResults[i-1]) {
                    CorrectAnswers++;
                } else {
                    IncorrectAnswers++;
                }
            }
            $( "#results" ).html('<h2>All done!</h2><h3>Correct Answers: '+CorrectAnswers+'</h3><h3>Incorrect Answers: '+IncorrectAnswers+'</h3><h3>Unanswered: '+Unanswered+'</h3>');
        }

        start();

    });
});
