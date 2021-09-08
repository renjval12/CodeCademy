class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

const romeroName = surgeonRomero.name
const romeroDept = surgeonRomero.department
const romeroVacationDays = surgeonRomero.remainingVacationDays

const jacksonName = surgeonJackson.name
const jacksonDept = surgeonJackson.department
const jacksonVacationDays = surgeonJackson.remainingVacationDays


console.log(`Surgeon Name: ${romeroName}`)
console.log(`Surgeon Department: ${romeroDept}`)
surgeonRomero.takeVacationDays(3)
console.log(`Surgeon ${romeroName}'s Remaining Vacation Days: ${surgeonRomero.remainingVacationDays}`)