export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
  category: string;
  subtitle?:string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  isOpen: boolean;
}
