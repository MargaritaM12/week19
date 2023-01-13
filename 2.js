class Cat {
    constructor(options) {
        this.namepet = options.namepet;
        this.nameowner = options.nameowner;
        this.contact = options.contact;
        this.comment = options.comment;
    }
}
const cat = new Cat({namepet: {}, nameowner: {}, contact: {}, comment: {}});
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.querySelector('input');.value.cat;
    console.log(input.value);
})
