export class TextField {
    constructor(options) {
        this.name = options.name;
        this.elem = this.getElem();
    }

    getElem() {
        const elem = document.querySelector(`[name = "${this.name}"]`);
        if (!elem) throw new Error(`Elem is not defined`);
        console.log(elem)
        return elem;
    }

    getValue() {
        return this.elem.value;
    }
}
