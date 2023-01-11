class Cat {
    constructor(options) {
        this.namepet = options.namepet;
        this.nameowner = options.nameowner;
        this.contact = options.contact;
        this.comment = options.comment;
    }
}

const cat = new Cat({namepet: {}, nameowner: {}, contact: {}, comment: {}})

console.log(cat);

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    document
        .querySelector('input')
        .value;
    console.log(input.value);
})
