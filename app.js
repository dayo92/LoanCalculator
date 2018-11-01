// listen for submit / once form as been submitted you want to call the calculateResults function
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results / pass in the event parameter (e)
function calculateResults(e){

    // console.log('Calculating...');


    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayments = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //taking the amount and getting the value and turning it into a decimal 
    const principal = parseFloat(amount.value);

    const calculatedInterest = parseFloat(interest.value) / 100 / 12; //calculated interest 
    const calculatedPayments = parseFloat(years.value) * 12;

    



    e.preventDefault();
};