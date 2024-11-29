document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    
    let string = "";
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerHTML;
            
            // Evaluate the expression when '=' is clicked
            if (buttonText === '=') {
                //try and catch block are used for error handleing
                try {
                    string = String(Function('return ' + string)());//evaluate inbuild function can cause error that's why function is used for evaluate
                    input.value = string;
                } catch (error) {
                    input.value = 'Error';
                    string = "";
                }
            }
            // Clear the input when 'AC' is clicked
            else if (buttonText === 'AC') {
                string = "";
                input.value = string;
            }
            // Remove the last character when 'DEL' is clicked
            else if (buttonText === 'DEL') {
                string = string.slice(0, -1);
                input.value = string;
            }
            // Append the clicked button text to the string for other buttons
            else {
                string += buttonText;
                input.value = string;
            }
        });
    });
});
