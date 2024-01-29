let total = 0;

function addToTotal() {
    while(true) {
        let number = prompt("Enter a number to add to the total: ");
        if (isNaN(number)) {
            alert("Invalid number: " + number);
        } else {
            total += parseInt(number);
            alert("Added " + number + " to total. New total: " + total);
        }
    }
}