function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

function changeConversionType() {
    var conversionType = document.getElementById("conversionType").value;
    var placeholders = ["AD Year", "AD Month", "AD Day"];

    if (conversionType === "bsToAd") {
        placeholders = ["BS Year", "BS Month", "BS Day"];
    }

    var inputFields = document.querySelectorAll(".input-fields input");
    inputFields.forEach((input, index) => {
        input.placeholder = placeholders[index];
    }
    );
}

function convertDate() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var conversionType = document.getElementById("conversionType").value;

    if (!year || !month || !day) {
        showErrorPopup("Please fill all the fields.");
        return;
    }

    // Perform the date conversion using the provided library
    var result;
    if (conversionType === "adToBs") {
        var adDate = DateConverter(year, month, day);
        result = adDate.convertToBS().toBSString();
    } else {
        var bsDate = DateConverter(year, month, day);
        result = bsDate.convertToAD().toADString();
    }

    // Display the result in the result popup
    var resultText = document.getElementById("resultText");
    resultText.textContent = result;
    showResultPopup();
}

function showResultPopup() {
    var resultPopup = document.getElementById("resultPopup");
    resultPopup.style.display = "block";
}

function closeResultPopup() {
    var resultPopup = document.getElementById("resultPopup");
    resultPopup.style.display = "none";
}

function showErrorPopup(errorMessage) {
    var errorText = document.getElementById("errorText");
    errorText.textContent = errorMessage;

    var errorPopup = document.getElementById("errorPopup");
    errorPopup.style.display = "block";
}

function closeErrorPopup() {
    var errorPopup = document.getElementById("errorPopup");
    errorPopup.style.display = "none";
}
