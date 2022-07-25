import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity'


@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description product 1',
      price: 111,
      image: '',
      stock: 1111,
    },
    // {
    //   id: 2,
    //   name: 'Product 2',
    //   description: 'Description product 2',
    //   price: 222,
    //   image: '',
    //   stock: 2222,
    // },
  ];

  findAll() {
    return this.products
  }

  findOne(id: number) {
   return this.products.find((product) => product.id === id);
    // if(product) {
    //   return this.products.find((product) => product.id === id);
    // }

    // return null;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    //onst product = this.products.find((item) => item.id === id);
    // console.log(id)
    // console.log(product)

    if(product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index]
    }
    return null;


    // const productToUpdate = this.products.findIndex((product) => product.id === id);
    // if (!productToUpdate) {
    //   return {
    //     message: `Product with ID:${id} not found`
    //   }
    // }

    // this.products[productToUpdate] = { ...payload };
    // return this.products[productToUpdate]
  }

  delete(id: number) {
    // const productToDelete =  this.products.find((product) => product.id === id);
    const productToDelete = this.findOne(id);
    console.log(productToDelete)

    if(!productToDelete) {
      return {
        message: `Product with ID:${id} not found`
      }
    }


    this.products = this.products.filter((product) => product.id !== id);
    return productToDelete;
  }
}
