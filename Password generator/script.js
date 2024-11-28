document.addEventListener('DOMContentLoaded', function() {
    let inputSlider = document.getElementById("inputSlider");
    let sliderValue = document.getElementById("sliderValue");
    let passBox = document.getElementById("passBox");
    let lowerCase = document.getElementById("lowercase");  // Make sure IDs match
    let upperCase = document.getElementById("UpperCase");  // Match exact case
    let numbers = document.getElementById("Numbers");
    let symbols = document.getElementById("symbols");
    let genBtn = document.getElementById("genBtn");
    let Icon = document.getElementById("Icon");
    // Show the initial slider value
    sliderValue.textContent = inputSlider.value;
    inputSlider.addEventListener('input', () => {
        sliderValue.textContent = inputSlider.value;
    });

    // Generate password when button is clicked
    genBtn.addEventListener('click', () => {
        passBox.value = generatePassword();
    });

    // Character pools
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbersList = "0123456789";
    let allSymbols = "~!@#$%^&*()_-+=<>?";

    // Function to generate password
    function generatePassword() {
        let genPassword = "";
        let allChars = "";

        // Build the character pool based on selected checkboxes
        allChars += lowerCase.checked ? lowerChars : "";
        allChars += upperCase.checked ? upperChars : "";
        allChars += numbers.checked ? numbersList : "";
        allChars += symbols.checked ? allSymbols : "";

        // If no character types are selected, return an empty password
        if (allChars === "") {
            return genPassword;
        }

        // Generate the password with the selected length
        for (let i = 0; i < inputSlider.value; i++) {
            genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        return genPassword;
    }

    Icon.addEventListener('click', ()=>{
        if(passBox.value !="" || passBox.value.length >=1){
            
            Icon.innerText ="check";
            Icon.title = "Password Copied";
            navigator.clipboard.writeText(passBox.value);

            setTimeout(() => {
                Icon.innerHTML = "content_copy";
                Icon.title = "";
            },3000);
        }
    })

});