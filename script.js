function calculateEMI() {
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let loanTenure = document.getElementById('loanTenure').value;

    if (loanAmount === '' || interestRate === '' || loanTenure === '') {
        alert('Please fill in all fields.');
        return;
    }

    loanAmount = parseFloat(loanAmount);
    interestRate = parseFloat(interestRate) / 12 / 100;
    loanTenure = parseInt(loanTenure);

    let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) /
        (Math.pow(1 + interestRate, loanTenure) - 1);

    let totalPayment = emi * loanTenure;
    let totalInterest = totalPayment - loanAmount;

    document.getElementById('emiValue').innerText = `₹${emi.toFixed(2)}`;
    document.getElementById('totalPayment').innerText = `₹${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').innerText = `₹${totalInterest.toFixed(2)}`;
}
