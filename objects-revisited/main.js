'use strict';
const business = {
  opens: '10:30AM',
  closes: '5:00PM',
  totalEmployees: null,
  daysOpen: ['M', 'W', 'F'],
  employees: {
    mark: {
      position: 'Cook',
      daysOfWeekWorking: ['M', 'Th', 'W', 'F'],
    },
    john: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'F'],
    },
    jessica: {
      position: 'Waitress',
      daysOfWeekWorking: ['T', 'Th', 'F'],
    },
    peter: {
      position: 'Owner',
      daysOfWeekWorking: ['M', 'T'],
    },
  },
};
const currentDaysOpen = business.daysOpen;
const daysOfWeek = ['M', 'T', 'W', 'Thu', 'F'];
const jobTitles = ['Cook', 'Cashier', 'Manager'];
function addWeekends() {
  currentDaysOpen.push('S', 'Su');
  const employeeNames = Object.keys(business.employees);
  const numOfEmployees = Object.keys(business.employees).length;
  for (let i = 0; i < numOfEmployees; i++) {
    business.employees[employeeNames[i]].daysOfWeekWorking.push('S', 'Su');
  }
}
function createEmployee(data) {
  if (!data) return;
  for (let i = 0; i < 4; i++) {
    const shuffledDays = daysOfWeek.sort(() => Math.random() - 0.5);
    let indexEnd = Math.floor(Math.random() * 5);
    if (indexEnd === 0) {
      indexEnd = Math.floor(Math.random() * 5);
    }
    const employeeName = data[i].name;
    // creating a new property with employeeName
    business.employees[employeeName] = {
      position: jobTitles[Math.floor(Math.random() * jobTitles.length)],
      daysOfWeekWorking: shuffledDays.slice(0, indexEnd),
    };
  }
}
async function addEmployees() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to get a response.');
    const data = await response.json();
    createEmployee(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
function deleteEmployee(employeeName) {
  Object.keys(business.employees).forEach((key) => {
    if (key === employeeName) {
      delete business.employees[key];
    }
  });
  business.totalEmployees = Object.keys(business.employees).length;
}
function checkIfFullTime() {
  Object.keys(business.employees).forEach((key) => {
    if (business.employees[key].daysOfWeekWorking.length >= 5) {
      business.employees[key].fullTime = true;
    } else {
      business.employees[key].fullTime = false;
    }
  });
}
window.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  addEmployees();
  checkIfFullTime();
  console.log('business', business);
  deleteEmployee('mark');
});
