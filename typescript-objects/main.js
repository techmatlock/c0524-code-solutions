'use strict';
const student = {
  firstName: 'Mark',
  lastName: 'Matlock',
  age: 30,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('fullName:', fullName);
// Student object
student.livesInIrvine = false;
student.previousOccupation = 'Systems Engineer';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log(student);
console.log('typeof student:', typeof student);
// Vehicle object
const vehicle = {
  make: 'tesla',
  model: 'cybertruck',
  year: 2024,
};
vehicle['color'] = 'steel';
vehicle['isConvertible'] = false;
console.log('color property:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log(vehicle);
console.log('typeof vehicle:', typeof vehicle);
// Pet object
const pet = {
  name: 'Dallas',
  kind: 'Labrador dog',
};
delete pet.name;
delete pet.kind;
console.log(pet);
console.log('typeof pet:', typeof pet);
