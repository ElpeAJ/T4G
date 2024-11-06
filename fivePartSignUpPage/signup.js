const formSteps = document.querySelectorAll('.form-step');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentStep = 0;

function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
        if (index === stepIndex) {
            step.classList.add('active');
            step.classList.remove('disabled');
            step.querySelectorAll('input, select, textarea, .self-indicator').forEach((input, indicator, i) => {
                input.disabled = false;
                indicator.classList.add('active');
            });
        } else {
            step.classList.remove('active');
            step.classList.add('disabled');
            step.querySelectorAll('input, select, textarea, .self-indicator').forEach((input, indicator, i) => {
                input.disabled = true;
                indicator.classList.remove('active');
            });
        }

        // Update step indicator classes
        // formProgress.querySelectorAll('.step-indicator').forEach((indicator, i) => {
        //     if (i === stepIndex) {
        //         indicator.classList.add('active');
        //     } else {
        //         indicator.classList.remove('active');
        //     }
        // });
    });

    updateNavigation();
}

function updateNavigation() {
    if (currentStep === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentStep === formSteps.length - 1) {
        nextBtn.textContent = 'Submit';
    } else {
        nextBtn.textContent = 'Next';
    }
}

nextBtn.addEventListener('click', () => {
    currentStep++;
    showStep(currentStep);
});

prevBtn.addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
});

showStep(currentStep);