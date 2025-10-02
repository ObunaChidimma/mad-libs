$(document).ready(function() {
    $('#triangle-form').submit(function(event) {
        event.preventDefault();

        let a = parseFloat($('#sideA').val());
        let b = parseFloat($('#sideB').val());
        let c = parseFloat($('#sideC').val());

        // Clear result
        $('#result').html('');

        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
            $('#result').text('Please enter valid positive numbers.');
            return;
        }

        // Check triangle inequality
        if (a + b > c && a + c > b && b + c > a) {
            let type = '';

            if (a === b && b === c) {
                type = 'Equilateral Triangle';
                $('#result').html(`<p>${type}</p><img src="equilateral.jpg" alt="${type}">`);
            } else if (a === b || b === c || a === c) {
                type = 'Isosceles Triangle';
                $('#result').html(`<p>${type}</p><img src="isosceles.jpg" alt="${type}">`);
            } else {
                type = 'Scalene Triangle';
                $('#result').html(`<p>${type}</p><img src="scalene.jpg" alt="${type}">`);
            }
        } else {
            $('#result').text("This triangle doesn't exist.");
        }
    });
});
