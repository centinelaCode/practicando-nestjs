import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
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
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`)
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log(payload)
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if(product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index]
    }
    return null;
  }

  delete(id: number) {
    // const productToDelete =  this.products.find((product) => product.id === id);
    const productToDelete = this.findOne(id);
    // console.log(productToDelete)

    this.products = this.products.filter((product) => product.id !== id);
    return productToDelete;
  }
}
