class Phone{
    id
    name
    manufacturer
    price
    
    constructor(inputId, inputName, inputManufacturer, inputPrice){
        this.id = inputId;
        this.name = inputName;
        this.manufacturer = inputManufacturer;
        this.price = inputPrice;
    }
    
    get id() {
        return this.id;
    }
    
    set id(inputId) {
        this.id = inputId;
    }
    
    get name() {
        return this.name;
    }
    
    set name(inputName) {
        this._name = inputName;
    }
    
    get manufacturer() {
        return this.manufacturer;
    }
    
    set manufacturer(inputManufacturer) {
        this.manufacturer = inputManufacturer;
    }
    
    get price() {
        return this.price;
    }
    
    set price(inputPrice) {
        this.price = inputPrice;
    }
    toString(){
        return `Id: ${this.id} - Name: ${this.name} - Manufacturer: ${this.manufacturer} - Price: ${this.price}`;
    }
}