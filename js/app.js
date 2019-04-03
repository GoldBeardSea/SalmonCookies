'use strict';
console.log('Linked');
let hours = [ '6 am', '7 am', ' 8 am', '9 am', '10 am', ' 11 am', ' 12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let allStoresInstance = [];
let salesTable = document.getElementById('salesTable');
let allStoresSalesByColumn = [];

function Store (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalEstSale = 0;
  this.arrayCookieSales = [];
  allStoresInstance.push(this);
}

Store.prototype.populateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
    this.arrayCookieSales.push(resultHour);
  }
  this.totalEstSale = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
};

Store.prototype.renderTable = function() {
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  for (var i = 0; i < this.arrayCookieSales.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.arrayCookieSales[i];
    trEl.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalEstSale;
  trEl.appendChild(tdElement);
  salesTable.appendChild(trEl);
};

new Store('First and Pike', 23, 65, 6.3);
new Store ('Seatac', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);

function tableBuilder () {
  //
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  trEL.appendChild(thEL);
  // thEl.textContent = 'Store Location';
  for (let i = 0; i < hours.length; i++) {
    thEL = document.createElement('th');
    thEL.textContent = hours[i];
    trEL.appendChild(thEL);
  }
  thEL = document.createElement('th');
  thEL.textContent = 'Daily Location Total';
  trEL.append(thEL);
  salesTable.appendChild(trEL);
}
tableBuilder();

function callAll() {
  for (let i = 0; i < allStoresInstance.length; i++) {
    allStoresInstance[i].populateSales();
    console.log('I am here');
    allStoresInstance[i].renderTable();
  }
}

callAll();

function calculateColumns () {
  for (let i = 0; i < hours.length; i++) {
    let storeAccum = 0;
    for (let j = 0; j < allStoresInstance.length; j++) {
      storeAccum += allStoresInstance[j].arrayCookieSales[i];
    }
    allStoresSalesByColumn.push(storeAccum);
  }
}
calculateColumns();

function renderColumnTotal() {
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  for (let i = 0; i < allStoresSalesByColumn.length; i++) {
    let tdEl = document.createElement('td');
    tdEl.textContent = allStoresSalesByColumn[i];
    trEl.appendChild(tdEl);
  }
  let tdEl = document.createElement('td');
  tdEl.textContent = allStoresSalesByColumn.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  trEl.appendChild(tdEl);
  salesTable.appendChild(trEl);
}

renderColumnTotal();

// let pikeStore = {
//   name: 'First and Pike',
//   nameID: 'firstAndPike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   arrayCookieSales: [],
//   totalEstSale: 0,
//   calcCookieByHour: function() {
//     for (let i = 0; i < hours.length; i++) {
//       let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
//       this.arrayCookieSales.push(resultHour);
//     }
//     let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
//       return accumulator + currentValue;
//     });
//     this.totalEstSale = sumGen;
//     this.ammendToDOM();
//   },
//   ammendToDOM: function() {
//     let ulEl = document.getElementById(this.nameID);
//     ulEl.textContent = this.name;
//     for (let i = 0; i < this.arrayCookieSales.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
//     ulEl.appendChild(liEl);
//   }

// };

// let seatacStore = {
//   name: 'SeaTac Airport',
//   nameID: 'seaTac',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   arrayCookieSales: [],
//   totalEstSale: 0,
//   calcCookieByHour: function() {
//     for (let i = 0; i < hours.length; i++) {
//       let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
//       this.arrayCookieSales.push(resultHour);
//     }
//     let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
//       return accumulator + currentValue;
//     });
//     this.totalEstSale = sumGen;
//     this.ammendToDOM();
//   },
//   ammendToDOM: function() {
//     let ulEl = document.getElementById(this.nameID);
//     ulEl.textContent = this.name;
//     for (let i = 0; i < this.arrayCookieSales.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
//     ulEl.appendChild(liEl);
//   }

// };

// let seacentStore = {
//   name: 'Seattle Center',
//   nameID: 'seaCent',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   arrayCookieSales: [],
//   totalEstSale: 0,
//   calcCookieByHour: function() {
//     for (let i = 0; i < hours.length; i++) {
//       let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
//       this.arrayCookieSales.push(resultHour);
//     }
//     let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
//       return accumulator + currentValue;
//     });
//     this.totalEstSale = sumGen;
//     this.ammendToDOM();
//   },
//   ammendToDOM: function() {
//     let ulEl = document.getElementById(this.nameID);
//     ulEl.textContent = this.name;
//     for (let i = 0; i < this.arrayCookieSales.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// };

// let capStore = {
//   name: 'Capitol Hill',
//   nameID: 'capHill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   arrayCookieSales: [],
//   totalEstSale: 0,
//   calcCookieByHour: function() {
//     for (let i = 0; i < hours.length; i++) {
//       let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
//       this.arrayCookieSales.push(resultHour);
//     }
//     let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
//       return accumulator + currentValue;
//     });
//     this.totalEstSale = sumGen;
//     this.ammendToDOM();
//   },
//   ammendToDOM: function() {
//     let ulEl = document.getElementById(this.nameID);
//     ulEl.textContent = this.name;
//     for (let i = 0; i < this.arrayCookieSales.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
//     ulEl.appendChild(liEl);
//   }

// };

// let alkiStore = {
//   name: 'Alki Beach',
//   nameID: 'alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   arrayCookieSales: [],
//   totalEstSale: 0,
//   calcCookieByHour: function() {
//     for (let i = 0; i < hours.length; i++) {
//       let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
//       this.arrayCookieSales.push(resultHour);
//     }
//     let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
//       return accumulator + currentValue;
//     });
//     this.totalEstSale = sumGen;
//     this.ammendToDOM();
//   },
//   ammendToDOM: function() {
//     let ulEl = document.getElementById(this.nameID);
//     ulEl.textContent = this.name;
//     for (let i = 0; i < this.arrayCookieSales.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
//     ulEl.appendChild(liEl);
//   }

// };

// pikeStore.calcCookieByHour();
// seatacStore.calcCookieByHour();
// seacentStore.calcCookieByHour();
// capStore.calcCookieByHour();
// alkiStore.calcCookieByHour();

