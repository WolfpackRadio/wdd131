
const ticketForm = document.getElementById('TicketForm');
const eventTypeSelect = document.getElementById('eventType');
const conditionalContainer = document.getElementById('conditionalContainer');
const conditionalLabel = document.getElementById('conditionalLabel');
const conditionalInput = document.getElementById('conditionalInput');
const outputSection = document.getElementById('output');


eventTypeSelect.addEventListener('change', function () {
    const selectedValue = eventTypeSelect.value;

    if (selectedValue === 'one') {

        conditionalContainer.removeAttribute('hidden');
        conditionalLabel.textContent = 'Student I#';
        conditionalInput.placeholder = 'e.g., 123456789';
        conditionalInput.required = true;
    } else if (selectedValue === 'many') {

        conditionalContainer.removeAttribute('hidden');
        conditionalLabel.textContent = 'Access Code';
        conditionalInput.placeholder = 'Enter code';
        conditionalInput.required = true;
    } else {

        conditionalContainer.setAttribute('hidden', '');
        conditionalInput.required = false;
        conditionalInput.value = '';
    }
});


ticketForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    outputSection.innerHTML = ''; 
    let errors = [];


    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const eventDate = document.getElementById('availableDate').value;
    const selectedType = eventTypeSelect.value;
    const conditionalValue = conditionalInput.value.trim();


    if (selectedType === 'one') {
        const digitRegex = /^\d{9}$/;
        if (!digitRegex.test(conditionalValue)) {
            errors.push('Student I# must be exactly a 9-digit number.');
        }
    } else if (selectedType === 'many') {
        if (conditionalValue !== 'EVENT131') {
            errors.push('Invalid Access Code. Please input "EVENT131".');
        }
    }

    if (errors.length > 0) {

        let errorHtml = `
            <div style="color: #721c24; background-color: #f8d7da; padding: 12px; margin-top: 15px; border-radius: 4px; border: 1px solid #f5c6cb;">
                <strong>Please fix these errors before proceeding:</strong>
                <ul style="margin: 5px 0 0 20px; padding: 0;">
        `;
        errors.forEach(function (err) {
            errorHtml += `<li>${err}</li>`;
        });
        errorHtml += `</ul></div>`;
        outputSection.innerHTML = errorHtml;
    } else {

        const typeLabel = selectedType === 'one' ? 'Student' : 'Guest';
        const dynamicIdLabel = selectedType === 'one' ? 'Student I#' : 'Access Code';

        outputSection.innerHTML = `
            <div style="padding: 15px; margin-top: 20px; border: 1px solid #ccc; background-color: #f9f9f9; border-radius: 6px;">
                <h2 style="margin-top: 0; font-size: 1.3rem; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Ticket Information</h2>
                <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0;"><strong>Ticket Type:</strong> ${typeLabel}</p>
                <p style="margin: 8px 0;"><strong>${dynamicIdLabel}:</strong> ${conditionalValue}</p>
                <p style="margin: 8px 0;"><strong>Event Date:</strong> ${eventDate}</p>
            </div>
        `;


        ticketForm.reset();
        conditionalContainer.setAttribute('hidden', '');
    }
});