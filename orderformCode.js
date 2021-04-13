$(document).ready(
    function() {
        $("#learningQty").on("keypress", learningQtyTotal);
        $("#donationQty").on("keypress", donationQtyTotal);

        let learningQty = parseFloat($("#learningQty").val());
        let donationQty = parseFloat($("#donationQty").val());

        function learningQtyTotal(event) {

            let learningTotal = (learningQty * 39.99);
            $('#learningTotal').text(learningTotal);

            let total = (donationQty * 14.99) + (learningQty*39.99);
            $("p#total").text(total.toFixed(2));
        }

        function donationQtyTotal(event) {

            let donationTotal = (donationQty * 14.99);
            $("p#donationTotal").text(donationTotal);

            //let total = (donationQty*14.99) + (learningQty*39.99);
            //$('#total').text(total.toFixed(2));
        }
    })

            //$("p#donationTotal").text(donationTotal).css("font-weight","Bold");
            //$("p#Total").text(Total.toFixed(2));
            //$("body").css("background-color", "red");
            //$(".product").css("color", "blue")

// Capture the quantity entered into text box
//let learningQty = parseFloat($("input#learningQty").val());
