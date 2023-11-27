export interface Contributors {
  role: string;
  name: string;
}

export interface Tax {
  country: string;
  region: string;
  rate: string;
  tax_ship: string;
}

export interface Shipping {
  country: string;
  region: string;
  service: string;
  price: string;
}

export interface Stores {
  name: string;
  country: string;
  currency: string;
  currency_symbol: string;
  price: string;
  sale_price: string;
  tax: Array<Tax>;
  link: string;
  item_group_id: string;
  availability: string;
  condition: string;
  shipping: Array<Shipping>;
  last_update: string;
}

export interface Reviews {
  name: string;
  rating: string;
  title: string;
  review: string;
  date: string;
}

export interface Products {
  barcode_number: string;
  barcode_formats: string;
  mpn: string;
  model: string;
  asin: string;
  title: string;
  category: string;
  manufacturer: string;
  brand: string;
  contributors: Array<Contributors>;
  age_group: string;
  ingredients: string;
  nutrition_facts: string;
  energy_efficiency_class: string;
  color: string;
  gender: string;
  material: string;
  pattern: string;
  format: string;
  multipack: string;
  size: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  release_date: string;
  description: string;
  features: Array<string>;
  images: Array<string>;
  last_update: string;
  stores: Array<Stores>;
  reviews: Array<Reviews>;
}

export interface SearchResultProducts {
  products: Array<Products>;
}

