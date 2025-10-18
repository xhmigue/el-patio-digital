export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
