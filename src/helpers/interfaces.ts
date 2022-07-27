export interface CategoryTileProps {
  category: string;
  image: string;
}

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export interface NavbarProps {
  loggedIn: boolean;
}

export interface State {
  allProducts: {
    selectedProducts: Product[] | [];
    fetchedProducts: Product[] | [];
    fetchedImages: string[] | [];
    fetchedCategories: string[]|[]
  };
}

export interface CartProductTileProps {
  product: Product;
  key: number;
}
export interface CategoryMenuProps {
  categories: string[];
}

export interface RegisterFormInputs {
  email: string;
  password1: string;
  password2: string;
}
export interface ElectronicsPageProps {
  category: string;
}
export interface ProductTileProps {
  product: Product;
}
export interface initialState {
  selectedProducts: Product[] | [];
  fetchedProducts: Product[] | [];
  fetchedImages: string[] | [];
  fetchedCategories: string[]| []
}
