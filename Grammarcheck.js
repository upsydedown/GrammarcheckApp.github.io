const charVal = document.getElementById("textarea");
        let characterCount = document.getElementById("character-count");
        let remainingCount = document.getElementById("remaining-counter");
        let totalChar = 0;
        const updateCounter = () => {
            totalChar = charVal.value.length;
            characterCount.innerText = totalChar;
            remainingCount.innerText = 500 - totalChar
        }
        charVal.addEventListener("keyup", () => updateCounter())
        // Copy text API
        const copyText = () => {
            charVal.select();
            charVal.setSelectionRange(0,500);
            navigator.clipboard.writeText(charVal.value);
        }