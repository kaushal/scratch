javascript:(function(){
    total = 0;
    length = 0;
    acceptableResponses = [1, 2, 3, 4]
    $("li").each(
        function(index) {
            currentRating = parseInt(this.textContent[1]);
            if (acceptableResponses.indexOf(currentRating) > -1) {
                length++;
                total += currentRating;
            }
        }
    )
    alert("Your average is: " + total/length)
})();
