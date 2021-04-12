$(document).ready(
    function(){
        $("input#learningQty").on("keypress",calculate);
        $("input#donationQty").on("keypress",calculate);

        // Include event parameter to get information about the event
        // that triggered this function to run
        function calculate() {
            // Capture the quantity entered into textbox

            let learningQty = parseFloat($("#learningQty").val());
            let donationQty = parseFloat($("#donationQty").val());

            //do some math...
            //Learning jQuery Price = $39.99   ---  Query Donation Price = $14.99 (Round result to 2 decimal places)
            let learningTotal = (learningQty * 39.99);
            let donationTotal = (donationQty * 14.99);

            $("p#learningTotal").val();
            $("p#donationTotal").val();

            //OUTPUT
            //Grand Total is sum of both products totals.

            let Total = learningTotal + donationTotal;
            $("p#Total").text(`${Total}`);
            //$("p#Total").text(Total.toFixed(2));


            $("body").css("background-color", "red");
            //$(".product").css("color", "blue")
        }
    })


