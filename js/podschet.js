let money = prompt("Ваш бюджет на месяц?", '');

if(!money || isNaN(money) || money <= 0 ){
   alert("Вы ввели не число,отрицательное число или 0, перезагрузите страницу");
   location.reload();
}
else{

let time = prompt("Введите дату в формате YYYY-MM-DD", '');


let qw1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let qw2 = prompt("Во сколько обойдется?", '');

let qw4 = prompt("Введите еще одну статью расходов в этом месяце", '');
let qw5 = prompt("Во сколько обойдется?", '');

if(!qw2 || isNaN(qw2) || qw2 < 0 ){
    qw2=0;
}
if(!qw5 || isNaN(qw5) || qw5 < 0 ){
    qw5=0;
}

let appData = {

    budget: money,

    timeData:time,

    expenses: { 
        qw1: qw2, 
        qw4: qw5
        },
    
    optionalExpenses: {},
    
    income: [],
    
    savings: false
    
    };
    alert((money-appData.expenses.qw1-appData.expenses.qw4)/30);
}

    