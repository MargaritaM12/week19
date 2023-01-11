class Worker {
    constructor(options) {
        this.name = options.name;
        this.surname = options.surname;
        this.rate = options.rate;
        this.days = options.days;
    }
    getSalary(rate, days) {
        const salary = this.rate * this.days;
        return salary;
    }
}

const worker = new Worker({name: 'Misha', surname: 'Volkov', rate: 1500, days: 30})

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
