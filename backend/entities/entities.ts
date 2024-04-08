type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL"

export type TPants = {
    id: number;
    model: string;
    size: Size;
    price: number;
};

export class Pants {
    id: number;
    model: string;
    size: Size; 
    price: number;
    constructor(pants: TPants){
        this.id = pants.id;
        this.model = pants.model;
        this.size= pants.size;
        this.price=pants.price;
    }
}

export type TPantsDTO = {
    model  : string;
    size: Size; 
    price: string;
    updatedAt: Date;
}

export class PantsDTO  {
    model: string;
    size: Size; 
    price: string;
    updatedAt?: Date;
    constructor(pants: TPantsDTO){
        this.model = pants.model;
        this.size = pants.size;
        this.price = pants.price;
        this.updatedAt = pants.updatedAt;
    }
    validate(): void{
        if (this.model === "" || this.model === undefined || this.model === null ){
            throw new Error("parameter model is required")
        }
        if (this.price === undefined || this.price == null) {
            throw new Error ("parameter price is required")
        }
    }
}


// SHIRTS ENTITY

export type Shirts = {
    id: number;
    model: string;
    size: Size;
    price: number;
};

export type TShirtsDTO = {
    model  : string;
    size: Size; 
    price: string;
    updatedAt: Date;
}

export class ShirtsDTO  {
    model: string;
    size: Size; 
    price: string;
    updatedAt?: Date;
    constructor(shirts: TShirtsDTO){
        this.model = shirts.model;
        this.size = shirts.size;
        this.price = shirts.price;
        this.updatedAt = shirts.updatedAt;
    }
    validate(){
        if (this.model === "" || this.model === undefined || this.model === null ){
            throw new Error("parameter model is required")
        }
        if (this.size == undefined || this.size === null){
            throw new Error("parameter size is required")
        }
        if (this.price === undefined || this.price == null) {
            throw new Error ("parameter price is required")
        }
    }
}

// SHORT ENTITY

export type Shorts = {
    id: number;
    model: string;
    size: Size;
    price: number;
};

export type TShortsDTO = {
    model  : string;
    size: Size; 
    price: string;
    updatedAt: Date;
}

export class ShortsDTO  {
    model: string;
    size: Size; 
    price: string;
    updatedAt?: Date;
    constructor(shorts: TShortsDTO){
        this.model = shorts.model;
        this.size = shorts.size;
        this.price = shorts.price;
        this.updatedAt = shorts.updatedAt;
    }
    validate(){
        if (this.model === "" || this.model === undefined || this.model === null ){
            throw new Error("parameter model is required")
        }
        if (this.size == undefined || this.size === null){
            throw new Error("parameter size is required")
        }
        if (this.price === undefined || this.price == null) {
            throw new Error ("parameter price is required")
        }
    }
}