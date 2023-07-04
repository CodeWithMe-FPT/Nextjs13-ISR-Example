export default interface IProduct {
  _id: string;
  name: string;
  title: string;
  types: [IProductTypes];
  category: string;
  discount: number;
  introduce: string;
  image: string;
  images: [string];
  status: boolean;
  quantity: number;
  createAt: Date;
  updateAt: Date;
}

export interface ICategory {
  _id: string;
  name: string;
  image: string;
}

interface IProductTypes {
  name: string;
  price: number;
}
