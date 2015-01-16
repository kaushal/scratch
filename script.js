total = 0;
length = $("li").length;

$("li").each(
    function(index) {
        total += parseInt(this.textContent[1])
    }
)

alert("Your average is: " + total/length)
