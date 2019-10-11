// CODE here for your Lambda Classes

const subject = ['Python', 'Javascript', 'CSS', 'LESS', 'HTML', 'Node', 'Java', 'OOP', 'Ruby']

// Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
};

class Instructor extends Person {
  constructor(instAttrs) {
    super(instAttrs);
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }

  demo(subject) {
    return `Today, we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
  }

  listSubjects() {
    return this.favSubjects;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun Sprint Challenge on ${subject}.`;
  }
}

class TeamLead extends Instructor {
  constrcutor(teamAttrs) {
    this.gradClassName = teamAttrs.gradClassName;
    this.favInstructor = teamAttrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel Standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}

// Objects

// Instructors

const jaiden = new Instructor({
  name: 'Jaiden Shah',
  age: 37,
  location: 'Omaha, Nebraska',
  specialty: 'Front-end',
  favLanguage: 'Ruby',
  catchPhrase: 'Ruby - first class!'
});

const estelle = new Instructor({
  name: 'Estelle Woods',
  age: 29,
  location: 'Baton Rouge, Louisiana',
  specialty: 'Back-end',
  favLanguage: 'Javascript',
  catchPhrase: 'I\'m going places.'
});

const kerys = new Instructor({
  name: 'Kerys Bate',
  age: 29,
  location: 'Boston, Massachusetts',
  specialty: 'Debugging',
  favLanguage: 'CSS',
  catchPhrase: 'Programming is my sport.'
});

// Students

const tatiana = new Student({
  name: 'Tatiana Quintana',
  age: 19,
  location: 'Oakland, California',
  previousBackground: 'Barista',
  className: 'WEBPT11',
  favSubjects: ['Javascript', 'Node', 'CSS']
});

const reese = new Student({
  name: 'Reese Dupont',
  age: 25,
  location: 'Baltimore, Maryland',
  previousBackground: 'Fast food worker',
  className: 'WEBPT11',
  favSubjects: ['LESS', 'Computer Science', 'Ruby']
});

// Team Leads

const chloe = new TeamLead({
  name: 'Chloe Leblanc',
  age: 27,
  location: 'Houston, Texas',
  specialty: 'Front-end',
  favLanguage: 'CSS',
  catchPhrase: 'Let\'s make people successful in a changing world.',
  gradClassName: 'WEB4',
  favInstructor: 'Estelle'
});

const jayce = new TeamLead({
  name: 'Jayce Webster',
  age: 54,
  location: 'San Diego, California',
  specialty: 'Back-end',
  favLanguage: 'Java',
  catchPhrase: 'I\'m what the world is waiting for.',
  gradClassName: 'WEB7',
  favInstructor: 'Kerys'
});

// Console Logs

console.log(jaiden.speak());
console.log(estelle.speak());
console.log(kerys.speak());
console.log(tatiana.speak());
console.log(reese.speak());

console.log(estelle.demo(subject[3]));
console.log(kerys.grade(tatiana, subject[2]));

console.log(reese.listSubjects());
console.log(reese.PRAssignment(subject[subject.length - 1]));
console.log(tatiana.sprintChallenge(subject[subject.length - 3]));

console.log(chloe.standUp('webpt11_chloe'));
console.log(jayce.debugsCode(reese, subject[4]));
