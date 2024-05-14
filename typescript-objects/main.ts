interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Mark',
  lastName: 'Matlock',
  age: 30,
};

const fullName: string = `${student.firstName} ${student.lastName}`;
console.log('fullName:', fullName);

// Student object
student.livesInIrvine = false;
student.previousOccupation = 'Systems Engineer';

console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log(student);
console.log('typeof student:', typeof student);

// Vehicle object
const vehicle: Vehicle = {
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
const pet: Pet = {
  name: 'Dallas',
  kind: 'Labrador dog',
};

delete pet.name;
delete pet.kind;

console.log(pet);
console.log('typeof pet:', typeof pet);
