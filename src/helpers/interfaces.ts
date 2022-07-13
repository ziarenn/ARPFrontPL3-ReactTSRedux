export interface CategoryTileProps {
  category: string;
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
