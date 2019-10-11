// CODE here for your Lambda Classes

const subject = ['Python', 'Javascript', 'CSS', 'LESS', 'HTML', 'Node', 'Java', 'OOP']

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
  constrcutor(tlAttrs) {
    super(tlAttrs);
    this.gradClassName = tlAttrs.gradClassName;
    this.favInstructor = tlAttrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel Standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}
