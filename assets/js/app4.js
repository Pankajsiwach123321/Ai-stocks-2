//=============button not allow before fill==========
const myformmobile = document.getElementById("headerfrommobile");
const mysubmitButtonmobile = document.querySelector(".submitheader_from_mobile");
myformmobile.addEventListener("input", function () {
    if (myformmobile.checkValidity()) {
        mysubmitButtonmobile.disabled = false;
        mysubmitButtonmobile.style.cursor = "pointer";
    } else {
        mysubmitButtonmobile.disabled = true;
        mysubmitButtonmobile.style.cursor = "not-allowed";
    }
});
const nameheadermobile = document.getElementById("nameheadermobile");
// const errorname = document.getElementById("errorname");
const lastnameheadermobile = document.getElementById("lastnameheadermobile");
// const errorlastname = document.getElementById("errorlastname");
const numberheadermobile = document.getElementById("numberheadermobile");
// const errornumber = document.getElementById("errornumber");
const emailheadermobile = document.getElementById("emailheadermobile");
// const erroremail = document.getElementById("erroremail");
const submitheadermobile = document.getElementById("submitheadermobile");
const regexbobile = {
    Name: /^[a-zA-Z\s]+$/,
    LastName: /^[a-zA-Z\s]+$/,
    Number: /^\d{10}$/,
    Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
};

submitheadermobile.addEventListener("click", function (event) {
    event.preventDefault();

    //============will do that in future================

    if (!regexbobile.Name.test(nameheadermobile.value)) {
        console.log("Name:", nameheadermobile.value);
    }
    if (!regexbobile.LastName.test(lastnameheadermobile.value)) {
        console.log("Last Name:", lastnameheadermobile.value);
    }
    if (!regexbobile.Number.test(numberheadermobile.value)) {
        console.log("Number:", numberheadermobile.value);
    }
    if (!regexbobile.Email.test(emailheadermobile.value)) {
        console.log("Email:", emailheadermobile.value);
    }

    if (
        regexbobile.Name.test(nameheadermobile.value) &&
        regexbobile.Number.test(numberheadermobile.value) &&
        regexbobile.Email.test(emailheadermobile.value) &&
        regexbobile.LastName.test(lastnameheadermobile.value)
    ) {
        alert("from submit successfully");
        nameheadermobile.value = "";
        numberheadermobile.value = "";
        emailheadermobile.value = "";
        lastnameheadermobile.value = "";
    }
});

// counter time-out
function startCountdown(targetDate) {
    // Function to update the countdown
    const updateCountdown = () => {
        // Get the current date and time
        const currentDate = new Date().getTime();
        // Calculate the remaining time
        let remainingTime = targetDate - currentDate;
        // If the remaining time is less than or equal to 0, reset the countdown for 1 hour
        if (remainingTime <= 0) {
            targetDate = new Date(currentDate + 3600000).getTime(); // 3600000 milliseconds = 1 hour
            remainingTime = targetDate - currentDate;
            // Store the new target date in local storage
            localStorage.setItem("targetDate", targetDate);
        }
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        // Update the HTML elements with the remaining time
        document.getElementById("desktopDays").textContent = days
            .toString()
            .padStart(2, "0");
        document.getElementById("desktopHours").textContent = hours
            .toString()
            .padStart(2, "0");
        document.getElementById("desktopMinutes").textContent = minutes
            .toString()
            .padStart(2, "0");
        document.getElementById("desktopSeconds").textContent = seconds
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileDays").textContent = days
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileHours").textContent = hours
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileMintus").textContent = minutes
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileSeconds").textContent = seconds
            .toString()
            .padStart(2, "0");
    };
    // Update the countdown immediately
    updateCountdown();
    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);
}
// Example usage
let targetDate = localStorage.getItem("targetDate");
if (!targetDate) {
    // If target date is not stored, set it to the next hour
    targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 1);
    targetDate.setMinutes(0);
    targetDate.setSeconds(0);
    localStorage.setItem("targetDate", targetDate.getTime());
} else {
    // If target date is stored, parse it from string to number
    targetDate = parseInt(targetDate);
}
startCountdown(targetDate);

//=================trading-section==================

//===================Trading-section==================
const AIFirstName = document.getElementById("AIfirstName");
const errorAIFirstName = document.getElementById("errorAIFirstName");
const AIlastName = document.getElementById("AIlastName");
const errorAILastName = document.getElementById("errorAILastName");
const AIPNumber = document.getElementById("AINumber");
const errorAINumber = document.getElementById("errorAINumber");
const EmailAI = document.getElementById("AIEmail");
const errorAIEmail = document.getElementById("errorAIEmail");
const SubmitForm = document.getElementById("SubmitForm");

const AiStokeregex = {
    firstNameAI: /^[a-zA-Z\s]+$/,
    lastNameAI: /^[a-zA-Z\s]+$/,
    numberAI: /^\d{10}$/,
    emailAI: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
};

SubmitForm.addEventListener("click", function (event) {
    event.preventDefault();

    //============will do that in future================

    // if (!AiStokeregex.firstNameAI.test(AIFirstName.value)) {
    //   AIFirstName.classList.add("border_red");
    // } else {
    //   AIFirstName.classList.remove("border_red");
    // }

    // if (!AiStokeregex.lastNameAI.test(AIlastName.value)) {
    //   AIlastName.classList.add("border_red");
    // } else {
    //   AIlastName.classList.remove("border_red");
    // }

    // if (!AiStokeregex.numberAI.test(AIPNumber.value)) {
    //   AIPNumber.classList.add("border_red");
    // } else {
    //   AIPNumber.classList.remove("border_red");
    // }

    // if (!AiStokeregex.emailAI.test(EmailAI.value)) {
    //   EmailAI.classList.add("border_red");
    // } else {
    //   EmailAI.classList.remove("border_red");
    // }

    if (
        AiStokeregex.firstNameAI.test(AIFirstName.value) &&
        AiStokeregex.lastNameAI.test(AIlastName.value) &&
        AiStokeregex.numberAI.test(AIPNumber.value) &&
        AiStokeregex.emailAI.test(EmailAI.value)
    ) {
        alert("Form submitted successfully");
        AIFirstName.value = "";
        AIlastName.value = "";
        AIPNumber.value = "";
        EmailAI.value = "";
    }
});
const AiStockform = document.getElementById("AIDStockfrom");
const AiStocksubmitButton = document.getElementById("SubmitForm");
AiStockform.addEventListener("input", function () {
    if (AiStockform.checkValidity()) {
        AiStocksubmitButton.disabled = false;
        AiStocksubmitButton.style.cursor = "pointer";
    } else {
        AiStocksubmitButton.disabled = true;
        AiStocksubmitButton.style.cursor = "not-allowed";
    }
});

// year function
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("fullYear").textContent = currentYear;
// preloader;
setTimeout(() => {
    document.getElementById("preloderred").classList.add("d-none");
    document.body.classList.remove("overflow_hidden");
}, 1700);

// back to top 
window.addEventListener("scroll", function () {
    let backtotop = document.getElementById("backtotop");
    if (window.scrollY > 250) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
});
//============trade-section================
const lottiePlayers = {
    company: {
        element: document.getElementById("company"),
        played: false,
    },
    invest: {
        element: document.getElementById("invest"),
        played: false,
    },
    shares: {
        element: document.getElementById("shares"),
        played: false,
    },
};

let activeButtonIndex = 0; // To keep track of the currently active button index
let timer; // Timer variable
let automaticSwitching = true; // Flag to control automatic button switching

// Function to reset timer and switch to the next button
const resetTimerAndSwitchButton = () => {
    clearTimeout(timer); // Reset the timer
    if (automaticSwitching) {
        activeButtonIndex = (activeButtonIndex + 1) % buttonValues.length; // Increment the active button index cyclically
        changeImageHandler(buttonValues[activeButtonIndex]); // Change the image to the next button
        timer = setTimeout(resetTimerAndSwitchButton, 6000); // Start the timer again
    }
};

// Function to handle button clicks
const changeImageHandler = (value) => {
    // Restart the currently playing animation before starting a new one
    restartCurrentAnimation();

    // If the clicked button is not already active, update the active button index and start automatic switching
    if (activeButtonIndex !== buttonValues.indexOf(value)) {
        clearTimeout(timer); // Clear the timer
        activeButtonIndex = buttonValues.indexOf(value); // Update the active button index
        automaticSwitching = true; // Set automatic switching flag to true
        startAutomaticButtonSwitching(); // Restart automatic button switching
    }

    // Call the changeLottiePlayer function with the clicked button value
    // changeLottiePlayer(value);
};

// Function to restart the currently playing animation
const restartCurrentAnimation = () => {
    for (const player of Object.values(lottiePlayers)) {
        if (player.element.playing) {
            player.element.stop(); // Stop the current animation
            player.element.goToAndPlay(0); // Go to the beginning and play again
        }
    }
};

// Define an array of button values
const buttonValues = ["company", "invest", "shares"];

// Event listeners for buttons
buttonValues.forEach((value, index) => {
    const button = document.querySelector(
        `[data-title="${value}"] .trade_shares_btns`
    );
    button.addEventListener("click", () => {
        clearTimeout(timer); // Clear the timer
        activeButtonIndex = index; // Update the active button index
        changeImageHandler(value); // Change image to the clicked button
        automaticSwitching = true; // Set automatic switching flag to true
        startAutomaticButtonSwitching(); // Restart automatic button switching
    });
});
document
    .querySelector(".trade_line_3rd")
    .classList.add("tradeLinetransitionFirst");
const changeLottiePlayer = (value) => {
    // Hide all Lottie players initially
    for (const player of Object.values(lottiePlayers)) {
        player.element.style.display = "none";
        player.element.loop = false; // Set loop to false for all players
    }

    // Show the clicked Lottie player
    const currentPlayer = lottiePlayers[value];
    currentPlayer.element.style.display = "block";

    // Set loop to true for the active player
    currentPlayer.element.loop = true;

    // Stop the current animation and go to the first frame
    currentPlayer.element.stop();

    // Highlight the clicked button
    const allButtons = document.querySelectorAll(".trade_shares_btns");
    allButtons.forEach((btn) => btn.classList.remove("trade_shares_active_btns_pink"));
    document
        .querySelector(`[data-title="${value}"] .trade_shares_btns`)
        .classList.add("trade_shares_active_btns_pink");

    // Activate dots based on the clicked button
    const allDots = document.querySelectorAll(".timeline_dot");
    allDots.forEach((dot) => dot.classList.remove("active_timeline_dot"));
    if (value === "company") {
        document
            .querySelector("[data-title='company'] .timeline_dot")
            .classList.add("active_timeline_dot2");
        document
            .querySelector(".trade_line_3rd")
            .classList.add("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_second")
            .classList.remove("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_second")
            .classList.remove("trade_timeline_gradient");
        document
            .querySelector(".trade_timeline")
            .classList.remove("trade_timeline_gradient");
    } else if (value === "invest") {
        document
            .querySelector("[data-title='company'] .timeline_dot")
            .classList.add("active_timeline_dot2");
        document
            .querySelector("[data-title='invest'] .timeline_dot")
            .classList.add("active_timeline_dot2");
        document
            .querySelector(".trade_line_3rd")
            .classList.add("trade_timeline_gradient");
        document
            .querySelector(".trade_line_second")
            .classList.add("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_3rd")
            .classList.remove("tradeLinetransitionFirst");
        document
            .querySelector(".trade_timeline")
            .classList.remove("trade_timeline_gradient");
    } else if (value === "shares") {
        allDots.forEach((dot) => dot.classList.add("active_timeline_dot"));
        document
            .querySelector(".trade_timeline")
            .classList.add("trade_timeline_gradient");
        document
            .querySelector(".trade_line_3rd")
            .classList.remove("tradeLinetransitionFirst");
        document
            .querySelector(".trade_line_3rd")
            .classList.remove("trade_timeline_gradient");
        document
            .querySelector(".trade_line_second")
            .classList.remove("tradeLinetransitionFirst");
    } else {
        document
            .querySelector(`[data-title="${value}"] .timeline_dot`)
            .classList.add("active_timeline_dot2");
        document
            .querySelector(".trade_line_3rd")
            .classList.remove("trade_timeline_gradient");
    }

    // Play the animation
    currentPlayer.element.play();
};

// Event listener for automatic button switching
const startAutomaticButtonSwitching = () => {
    // Start the timer initially
    timer = setTimeout(resetTimerAndSwitchButton, 7000);
};

// Start automatic button switching
startAutomaticButtonSwitching();