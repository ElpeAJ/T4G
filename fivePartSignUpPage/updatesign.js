const formSteps = document.querySelectorAll('.form-step');
const stepIndicators = document.querySelectorAll('.step-indicator');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentStep = 0;

function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
        if (index === stepIndex) {
            step.classList.add('active');
            step.classList.remove('disabled');
        } else {
            step.classList.remove('active');
            step.classList.add('disabled');
        }
    });

    // Update step indicator
    stepIndicators.forEach((indicator, index) => {
        if (index <= stepIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    updateNavigation();
}

function updateNavigation() {
    // Disable the "Previous" button on the first step
    prevBtn.disabled = currentStep === 0;

    // If the current step is the last step, change "Next" to "Submit"
    if (currentStep === formSteps.length - 1) {
        nextBtn.textContent = 'Submit';
    } else {
        nextBtn.textContent = 'Next';
    }
}

// Function to handle Next button click
nextBtn.addEventListener('click', () => {
    if (currentStep === formSteps.length - 1) {
        // If it's the last step, you can handle form submission here
        document.querySelector('form').submit();
    } else {
        currentStep++;
        showStep(currentStep);
    }
});

// Function to handle Previous button click
prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

// Initialize form by showing the first step
showStep(currentStep);

// Occupation Dropdown Script
const occupationDropdown = document.getElementById('occupationDropdown');
const occupationInput = occupationDropdown.querySelector('input');
// const occupationInput = occupationDropdown.getElementById('occupation');
const occupationOptions = occupationDropdown.querySelector('.custom-dropdown-options');

// Toggle dropdown on click
occupationInput.addEventListener('click', function() {
    occupationDropdown.classList.toggle('active');
});

// Select option and update input value
occupationOptions.querySelectorAll('div').forEach(option => {
    option.addEventListener('click', function() {
        occupationInput.value = option.textContent;
        occupationDropdown.classList.remove('active');
    });
});

// Close dropdown if clicking outside
document.addEventListener('click', function(event) {
    if (!occupationDropdown.contains(event.target)) {
        occupationDropdown.classList.remove('active');
    }
});


// Experience Dropdown Script
const experienceDropdown = document.getElementById('experienceDropdown');
const experienceInput = experienceDropdown.querySelector('input');
// const occupationInput = occupationDropdown.getElementById('occupation');
const experienceOptions = experienceDropdown.querySelector('.custom-dropdown-options');

// Toggle dropdown on click
experienceInput.addEventListener('click', function() {
    experienceDropdown.classList.toggle('active');
});

// Select option and update input value
experienceOptions.querySelectorAll('div').forEach(option => {
    option.addEventListener('click', function() {
        experienceInput.value = option.textContent;
        experienceDropdown.classList.remove('active');
    });
});

// Close dropdown if clicking outside
document.addEventListener('click', function(event) {
    if (!experienceDropdown.contains(event.target)) {
        experienceDropdown.classList.remove('active');
    }
});

// Industry Dropdown Script
const industryDropdown = document.getElementById('industryDropdown');
const industryInput = industryDropdown.querySelector('input');
// const occupationInput = occupationDropdown.getElementById('occupation');
const industryOptions = industryDropdown.querySelector('.custom-dropdown-options');

// Toggle dropdown on click
industryInput.addEventListener('click', function() {
    industryDropdown.classList.toggle('active');
});

// Select option and update input value
industryOptions.querySelectorAll('div').forEach(option => {
    option.addEventListener('click', function() {
        industryInput.value = option.textContent;
        industryDropdown.classList.remove('active');
    });
});

// Close dropdown if clicking outside
document.addEventListener('click', function(event) {
    if (!industryDropdown.contains(event.target)) {
        industryDropdown.classList.remove('active');
    }
});

const interestDropdown = document.getElementById('interestDropdown');
    const interestInput = interestDropdown.querySelector('input');
    const interestOptions = interestDropdown.querySelectorAll('.custom-dropdown-options div');
    let selectedInterests = [];

    // Toggle dropdown on click for Area of Interest
    interestInput.addEventListener('click', function() {
    interestDropdown.classList.toggle('active');
    });

    // Close Area of Interest dropdown if clicking outside
    document.addEventListener('click', function(event) {
    if (!interestDropdown.contains(event.target)) {
        interestDropdown.classList.remove('active');
        }
    });


    interestOptions.forEach(option => {
        option.addEventListener('click', function() {
            const value = option.getAttribute('data-value');
            if (selectedInterests.includes(value)) {
                selectedInterests = selectedInterests.filter(item => item !== value);
                option.classList.remove('selected');
            } else {
                selectedInterests.push(value);
                option.classList.add('selected');
            }
            interestInput.value = selectedInterests.join(', ');
        });
    });