var names = ['kaweesa', 'moses', 'designer', 'web']

let double = 1;
let multilpier = 1;

var money = [`$1,000,000,000`, `$174,000`, `$1000`, `$200,000`]

let looper = -1;

const doubleMoney = document.querySelector('#doubleMoney').addEventListener('click',function(){
    multilpier++;
    money[0] = `$`+double*multilpier+`,000,000,000`;
    money[1] = `$`+(double + 173)*multilpier+`,000`;
    money[2] = `$`+double * multilpier+`,000`;
    money[3] = `$`+(double + 199)*multilpier+`,000`;
})


const addUser = document.querySelector('#add-user').addEventListener('click', function () {

    looper++;

    const bottomTablecontainer = document.querySelector('.bottom-table-container');
   
    const innerhtml = `
     <div class="titles">
       <h2 class="name">${names[looper]}</h2>
       <p class="riches">${money[looper]}</p>
     </div>`;

    bottomTablecontainer.insertAdjacentHTML('afterbegin', innerhtml)

    if (looper === 3) {
        looper = -1;
    }
})

const ShowOnlyMillions = document.querySelector('#Show-only-millions').addEventListener('click', function () {

    const bottomTablecontainer = document.querySelector('.bottom-table-container');
    bottomTablecontainer.innerHTML = '';
    const innerhtml = `
     <div class="titles">
       <h2 class="name">${names[0]}</h2>
       <p class="riches">${money[0]}</p>
     </div>`;

    bottomTablecontainer.insertAdjacentHTML('afterbegin', innerhtml)
})

const SortByRichest = document.querySelector('#Sort-by-richest').addEventListener('click', function () {
    var richest = [2,1,3,0]

    const bottomTablecontainer = document.querySelector('.bottom-table-container');
    bottomTablecontainer.innerHTML = '';
    
    for(let i = 0; i<richest.length; i++){
        const innerhtml = `
        <div class="titles">
          <h2 class="name">${names[richest[i]]}</h2>
          <p class="riches">${money[richest[i]]}</p>
        </div>`;
   
       bottomTablecontainer.insertAdjacentHTML('afterbegin', innerhtml)
    }
   
})

const CalculateEntireWealth = document.querySelector('#Calculate-entire-wealth').addEventListener('click', function () {

    const bottomTablecontainer = document.querySelector('.bottom-table-container');
     
      let total = 1000000000+1200000+4500000+40000
       const innerhtml = `
        <div class="titles">
          <h2 class="name">Total</h2>
          <p class="riches">${`$`+total}</p>
        </div>`;
   
       bottomTablecontainer.insertAdjacentHTML('afterend', innerhtml)
  
   
})