"use strict";
class ClassName {
    static getInstance() {
        if (this.instance === null) {
            this.instance = new ClassName();
        }
        return this.instance;
    }
}
ClassName.instance = null;
const a = ClassName.getInstance;
const b = ClassName.getInstance;
console.log(a === b);
