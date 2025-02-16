class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Error: ${number} has not been added.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

class Observer {
    update(number) {
        // To be implemented by subclasses
    }
}

class PrintObserver extends Observer {
    update(number) {
        console.log(`Phone Number: ${number}`);
    }
}

class DialObserver extends Observer {
    update(number) {
        console.log(`Now Dialling ${number}`);
    }
}

// Example Usage
const phone = new Telephone();
const printObserver = new PrintObserver();
const dialObserver = new DialObserver();

phone.addObserver(printObserver);
phone.addObserver(dialObserver);

phone.addPhoneNumber("2347023232");
phone.dialPhoneNumber("2347023232");
