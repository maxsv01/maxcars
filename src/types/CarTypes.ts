export interface Car {
  carBrand: string;
  carModel: string;
  carYearOfManufacture: string;
  slugify: string;
  imageId: string | null;
}

export interface CarFormInputs extends Omit<Car, 'slugify' | 'imageId'> {
  imageFile: File | null;
}
