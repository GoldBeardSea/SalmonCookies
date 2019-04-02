'use strict';
console.log('Linked');
let hours = [ '6 am', '7 am', ' 8 am' , '9 am', '10 am ', ' 11 am', ' 12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

let pikeStore = {
  name: 'First and Pike',
  nameID: 'firstAndPike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  arrayCookieSales: [],
  totalEstSale: 0,
  calcCookieByHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
      this.arrayCookieSales.push(resultHour);
    }
    let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    this.totalEstSale = sumGen;
    this.ammendToDOM();
  },
  ammendToDOM: function() {
    let ulEl = document.getElementById(this.nameID);
    ulEl.textContent = this.name;
    for (let i = 0; i < this.arrayCookieSales.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
    ulEl.appendChild(liEl);
  }

};

let seatacStore = {
  name: 'SeaTac Airport',
  nameID: 'seaTac',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  arrayCookieSales: [],
  totalEstSale: 0,
  calcCookieByHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
      this.arrayCookieSales.push(resultHour);
    }
    let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    this.totalEstSale = sumGen;
    this.ammendToDOM();
  },
  ammendToDOM: function() {
    let ulEl = document.getElementById(this.nameID);
    ulEl.textContent = this.name;
    for (let i = 0; i < this.arrayCookieSales.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
    ulEl.appendChild(liEl);
  }

};

let seacentStore = {
  name: 'Seattle Center',
  nameID: 'seaCent',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  arrayCookieSales: [],
  totalEstSale: 0,
  calcCookieByHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
      this.arrayCookieSales.push(resultHour);
    }
    let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    this.totalEstSale = sumGen;
    this.ammendToDOM();
  },
  ammendToDOM: function() {
    let ulEl = document.getElementById(this.nameID);
    ulEl.textContent = this.name;
    for (let i = 0; i < this.arrayCookieSales.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
    ulEl.appendChild(liEl);
  }
};

let capStore = {
  name: 'Capitol Hill',
  nameID: 'capHill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  arrayCookieSales: [],
  totalEstSale: 0,
  calcCookieByHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
      this.arrayCookieSales.push(resultHour);
    }
    let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    this.totalEstSale = sumGen;
    this.ammendToDOM();
  },
  ammendToDOM: function() {
    let ulEl = document.getElementById(this.nameID);
    ulEl.textContent = this.name;
    for (let i = 0; i < this.arrayCookieSales.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
    ulEl.appendChild(liEl);
  }

};

let alkiStore = {
  name: 'Alki Beach',
  nameID: 'alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  arrayCookieSales: [],
  totalEstSale: 0,
  calcCookieByHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let resultHour = Math.round(Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) * this.avgCookie);
      this.arrayCookieSales.push(resultHour);
    }
    let sumGen = this.arrayCookieSales.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    this.totalEstSale = sumGen;
    this.ammendToDOM();
  },
  ammendToDOM: function() {
    let ulEl = document.getElementById(this.nameID);
    ulEl.textContent = this.name;
    for (let i = 0; i < this.arrayCookieSales.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.arrayCookieSales[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    let liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalEstSale + ' cookies';
    ulEl.appendChild(liEl);
  }

};
