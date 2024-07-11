type Car =  {
  id?: number,
  brand?: string,
  carModel?: string,
  price?: number,
  rating?: number,
  carImage?: string,
  InStockStatus?: boolean
}

type Cars = Array<Car>;

export {Car, Cars}
