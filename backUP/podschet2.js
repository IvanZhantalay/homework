let money = +prompt("Ваш бюджет на месяц?", ''),
time = +prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
    budget: money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
    };

for (let i = 0; i < 2; i++) {
    let qw1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
     qw2 = prompt("Во сколько обойдется?", '');
    
     if((typeof(qw1))==='string'&& (typeof(qw1)) !=null && (typeof(qw2)) != null && qw1 != '' && qw2 != '' && qw1.length <50){
         console.log("done");
         appData.expenses[qw1] = qw2;
     }
     else{}
}
appData.moneyPerDay =appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
console.log("Минимальный уровень достатка");
}
else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
    console.log("Средний уровень достатка");
    }
    else if(appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
        }
        else{
            console.log("Произошла ошибка");
        }
    