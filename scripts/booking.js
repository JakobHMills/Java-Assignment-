/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35
var selectedDays = []
var dailyRate = costPerDay


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function updateCalculatedCost() {
    const calculatedCostElement = document.getElementById("calculated-cost");
    let totalCost = dailyRate * selectedDays.length;
    calculatedCostElement.textContent = totalCost;
}

function handleDayClick(dayElement) {
    const dayId = dayElement.id
    if (!selectedDays.includes(dayId)) {
        selectedDays.push(dayId)
        dayElement.classList.add("clicked")
        updateCalculatedCost()
    } else {
        const index = selectedDays.indexOf(dayId);
        if (index !== -1) {
            selectedDays.splice(index, 1)
            dayElement.classList.remove("clicked")
            updateCalculatedCost()
        }
    }
}

const dayElements = document.querySelectorAll(".day-selector li")
dayElements.forEach(dayElement => {
    dayElement.addEventListener("click", () => handleDayClick(dayElement))
})

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Add event listeners to day buttons

const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", () => {
    selectedDays = []
    dayElements.forEach(dayElement => dayElement.classList.remove("clicked"))
    dailyRate = costPerDay
    updateCalculatedCost()
})

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const halfButton = document.getElementById("half")
halfButton.addEventListener("click", () => {
    dailyRate = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked")
    updateCalculatedCost()
});

const fullButton = document.getElementById("full");
fullButton.addEventListener("click", () => {
    dailyRate = costPerDay;
    fullButton.classList.add("clicked")
    halfButton.classList.remove("clicked")
    updateCalculatedCost()
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


