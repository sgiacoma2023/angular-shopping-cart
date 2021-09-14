export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;

    constructor(id, name = ' ', description = ' ', price = 0, imageURL = 'https://image.emojipng.com/757/4757.jpg'){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
    }
}


