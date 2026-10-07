const form = document.getElementById('transaction-form');
const list = document.getElementById('new-list');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const balance = document.getElementById('balance');



function renderTransactions() {
    let exp = 0;
    let inc = 0;
    let bal = 0;
    list.innerHTML = '';
    transactions.forEach(transactiondata => {
        const newlirow = document.createElement("tr");
        newlirow.innerHTML = `<td>${transactiondata.description}</td> <td>₹ ${transactiondata.amount}</td> 
                        <td style="color: ${transactiondata.type === 'income' ? 'green' : 'red'}; font-weight: bold;">${(transactiondata.type).toUpperCase()}</td>`;
        list.appendChild(newlirow);
        // render balance , income and expenses

        if (transactiondata.type === "expense") {
            exp += Number(transactiondata.amount);
        }
        if (transactiondata.type === "income") {
            inc += Number(transactiondata.amount);
        }
        bal = inc - exp;
        income.textContent = `₹ ${inc}`;
        expense.textContent = `₹ ${exp}`;
        balance.textContent = `₹ ${bal}`;
    });
}
renderTransactions();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const des = description.value;
    const am = Number(amount.value);
    const ty = type.value;

    const transactiondata = {
        description: des,
        amount: am,
        type: ty
    };
    transactions.push(transactiondata);
    //table refresh ho jayega
    renderTransactions();

    //save kiya local storage me
    localStorage.setItem("transactions", JSON.stringify(transactions));
    const data = localStorage.getItem("transactions");
    // transactions = JSON.parse(data);

    description.value = '';
    amount.value = '';
    type.value = '';

});
