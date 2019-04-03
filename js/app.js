'use strict';
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
// populates arraycookie sales and assigns a total sum estimate
Store.prototype.populateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
    this.arrayCookieSales.push(resultHour);
  }
  this.totalEstSale = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
};

// renders a table
Store.prototype.renderTable = function() {
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  for (let i = 0; i < this.arrayCookieSales.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.arrayCookieSales[i];
    trEl.appendChild(tdElement);
  }
  let tdElement = document.createElement('td');
  tdElement.textContent = this.totalEstSale;
  trEl.appendChild(tdElement);
  salesTable.appendChild(trEl);
};


new Store('First and Pike', 23, 65, 6.3);
new Store ('Seatac', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);

//builds a table
function tableBuilder () {
  let trEL = document.createElement('tr');
  let thEL = document.createElement('th');
  trEL.appendChild(thEL);
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

// calls everything in proper executed order
function callAll() {
  for (let i = 0; i < allStoresInstance.length; i++) {
    allStoresInstance[i].populateSales();
    allStoresInstance[i].renderTable();
  }
}

callAll();

// calculate those columns
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

// renders the totals of the columns
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
