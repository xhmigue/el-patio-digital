import { MenuCategory } from "@/types/menu";

// Import images
import bodillo1 from "@/assets/bodillos/1.jpg";
import bodillo2 from "@/assets/bodillos/2.jpg";
import bodillo3 from "@/assets/bodillos/3.jpg";
import bodillo4 from "@/assets/bodillos/4.jpg";
import bodillo5 from "@/assets/bodillos/5.jpg";
import bodillo6 from "@/assets/bodillos/6.jpg";
import bodillo7 from "@/assets/bodillos/7.jpg";
import bodillo8 from "@/assets/bodillos/8.jpg";
import bodillo9 from "@/assets/bodillos/9.jpg";
import bodillo10 from "@/assets/bodillos/10.jpg";
import bodillo11 from "@/assets/bodillos/11.jpg";
import bodillo12 from "@/assets/bodillos/12.jpg";
import bodillo13 from "@/assets/bodillos/13.jpg";
import bodillo14 from "@/assets/bodillos/14.jpg";
import bodillo15 from "@/assets/bodillos/15.jpg";
import bodillo16 from "@/assets/bodillos/16.jpg";
import bodillo17 from "@/assets/bodillos/17.jpg";

import tapa1 from "@/assets/tapas/1.jpg";
import tapa2 from "@/assets/tapas/2.jpg";
import tapa3 from "@/assets/tapas/3.jpg";
import tapa4 from "@/assets/tapas/4.jpg";
import tapa5 from "@/assets/tapas/5.jpg";
import tapa6 from "@/assets/tapas/6.jpg";
import tapa7 from "@/assets/tapas/7.jpg";
import tapa8 from "@/assets/tapas/8.jpg";
import tapa9 from "@/assets/tapas/9.jpg";
import tapa10 from "@/assets/tapas/10.jpg";
import tapa11 from "@/assets/tapas/11.jpg";
import tapa12 from "@/assets/tapas/12.jpg";
import tapa13 from "@/assets/tapas/13.jpg";
import tapa14 from "@/assets/tapas/14.jpg";
import tapa15 from "@/assets/tapas/15.jpg";
import tapa16 from "@/assets/tapas/16.jpg";
import tapa17 from "@/assets/tapas/17.jpg";
import tapa18 from "@/assets/tapas/18.jpg";
import tapa19 from "@/assets/tapas/19.jpg";
import tapa20 from "@/assets/tapas/20.jpg";

export const menuCategories: MenuCategory[] = [
  {
    id: "cervezas-barril",
    name: "Barril El Águila Dorada",
    items: [
      { id: "plato-tonterias", name: "Plato de Tonterías", price: "6,5€", category: "cervezas-barril" },
      { id: "cana", name: "Caña", price: "1,7€", category: "cervezas-barril" },
      { id: "copa", name: "Copa 0,30 cl", price: "2,40€", category: "cervezas-barril" },
      { id: "pinta", name: "Pinta", price: "3,4€", category: "cervezas-barril" },
    ],
  },
  {
    id: "cervezas",
    name: "Cervezas",
    items: [
      { id: "cruzcampo", name: "Cruzcampo", price: "2,2€", category: "cervezas" },
      { id: "heineken", name: "Heineken", price: "2,5€", category: "cervezas" },
      { id: "alcazar", name: "Alcázar", price: "2,8€", category: "cervezas" },
      { id: "aguila-sin-filtrar", name: "El Águila Sin Filtrar", price: "2,8€", category: "cervezas" },
      { id: "alhambra-1925", name: "Alhambra 1925", price: "3€", category: "cervezas" },
      { id: "estrella-galicia", name: "Estrella Galicia", price: "2,4€", category: "cervezas" },
      { id: "mahou-5", name: "Mahou 5 Estrellas", price: "2,4€", category: "cervezas" },
      { id: "coronita", name: "Coronita", price: "3€", category: "cervezas" },
      { id: "budweiser", name: "Budweiser", price: "3€", category: "cervezas" },
      { id: "guinness", name: "Guinness", price: "3,5€", category: "cervezas" },
      { id: "radler", name: "Radler", price: "2,2€", category: "cervezas" },
      { id: "heineken-00", name: "Heineken 0'0", price: "2,4€", category: "cervezas" },
      { id: "amstel-00", name: "Amstel 0'0 Tostada", price: "2,2€", category: "cervezas" },
      { id: "salitos", name: "Salitos", price: "3,5€", category: "cervezas" },
      { id: "kopparberg", name: "Kopparberg", price: "3,5€", category: "cervezas" },
    ],
  },
  {
    id: "vinos",
    name: "Vinos",
    items: [
      { id: "rioja", name: "Tinto Rioja Rivalia", price: "3€", description: "Botella: 12,5€", category: "vinos" },
      { id: "ribera", name: "Tinto Ribera Prado Marina", price: "2,8€", description: "Botella: 12€", category: "vinos" },
      { id: "rueda", name: "Rueda 100% Verdejo Casa de Castilla", price: "2,8€", description: "Botella: 12€", category: "vinos" },
      { id: "blanco-dulce", name: "Vino Blanco Dulce Árabe", price: "3€", description: "Botella: 12,5€", category: "vinos" },
      { id: "barbadillo", name: "Barbadillo", price: "2,8€", description: "Botella: 12€", category: "vinos" },
      { id: "fragolino", name: "Fragolino", price: "2,8€", description: "Botella: 12€", category: "vinos" },
    ],
  },
  {
    id: "tapas",
    name: "Tapas",
    items: [
      { id: "anchoa", name: "Anchoa de Santoña 0'0", price: "1,6€", category: "tapas", image: tapa1 },
      { id: "cerdo-jamon", name: "Cerdo, jamón serrano, pimiento rojo y alioli", price: "1,8€", category: "tapas", image: tapa2 },
      { id: "cerdo-queso", name: "Cerdo, queso curado, lechuga y alioli", price: "1,8€", category: "tapas", image: tapa3 },
      { id: "tropezon", name: "Tropezón", price: "1,8€", category: "tapas", image: tapa4 },
      { id: "queso-curado", name: "Queso Curado", price: "1,5€", category: "tapas", image: tapa5 },
      { id: "salchichon", name: "Salchichón", price: "1,5€", category: "tapas", image: tapa6 },
      { id: "tapas-caseras", name: "Tapas Caseras en Vitrina", price: "1,4€", category: "tapas", image: tapa7 },
      { id: "medias", name: "Medias Raciones", price: "5,8€", category: "tapas", image: tapa8 },
      { id: "medias-especiales", name: "Medias Raciones Especiales", price: "6,5€", category: "tapas", image: tapa9 },
      { id: "gildas-anchoa", name: "Gildas de Anchoa con Queso", price: "1,5€", category: "tapas", image: tapa10 },
      { id: "gildas-cecina", name: "Gildas de Cecina con Queso", price: "1,5€", category: "tapas", image: tapa11 },
      { id: "pinchos-morunos", name: "Pinchos Morunos", price: "1,8€", category: "tapas", image: tapa12 },
      { id: "pincho-gambon", name: "Pincho de Gambón", price: "2,2€", category: "tapas", image: tapa13 },
    ],
  },
  {
    id: "mini-burgers",
    name: "Mini Burgers",
    items: [
      { id: "burger-cerdo", name: "Burger de Cerdo", price: "1,70€", category: "mini-burgers", image: tapa14 },
      { id: "burger-americana", name: "Burger Americana de Ternera", price: "1,9€", category: "mini-burgers", image: tapa15 },
      { id: "doble-cheese", name: "Doble Cheese Burger", price: "2,6€", category: "mini-burgers", image: tapa16 },
      { id: "crispy-chicken", name: "Crispy Chicken", price: "1,5€", category: "mini-burgers", image: tapa17 },
      { id: "burger-mojo", name: "Burger Mojo Picón", price: "1,9€", category: "mini-burgers", image: tapa18 },
      { id: "perrito", name: "Perrito", price: "1,3€", category: "mini-burgers", image: tapa19 },
    ],
  },
  {
    id: "mini-camperos",
    name: "Mini Camperos",
    items: [
      { id: "pollo-asado", name: "Pollo Asado", price: "1,5€", description: "Tomate y alioli", category: "mini-camperos", image: bodillo1 },
      { id: "mixto", name: "Mixto", price: "1,5€", description: "York, queso y mantequilla", category: "mini-camperos", image: bodillo2 },
      { id: "bells", name: "Bell's", price: "2,6€", description: "Pollo asado, carne mechada, queso, tomate, lechuga y alioli", category: "mini-camperos", image: bodillo3 },
      { id: "plumi", name: "Plumi", price: "2,3€", description: "Tortilla de patata, carne mechada y alioli", category: "mini-camperos", image: bodillo4 },
      { id: "pollo-guacamole", name: "Pollo con Guacamole", price: "1,5€", category: "mini-camperos", image: bodillo5 },
      { id: "iberito", name: "Iberito", price: "2,1€", description: "Pulga de crema de jamón ibérico y carne mechada", category: "mini-camperos", image: bodillo6 },
      { id: "serranito", name: "Serranito", price: "1,80€", description: "Filete de cerdo, jamón serrano, pimiento rojo y alioli", category: "mini-camperos", image: bodillo7 },
      { id: "bacon-queso", name: "Bacon Queso", price: "1,5€", description: "Alioli", category: "mini-camperos", image: bodillo8 },
      { id: "cristabells", name: "Cristabel's", price: "2,8€", description: "Pan cristal, solomillo al whisky, mayo trufada con un toque de lima", category: "mini-camperos", image: bodillo9 },
    ],
  },
  {
    id: "rollitos",
    name: "Rollitos",
    items: [
      { id: "mini-kebab", name: "Mini Kebab", price: "1,9€", description: "Kebab de pollo, lechuga, cebolla plancha y salsa kebab", category: "rollitos", image: bodillo10 },
      { id: "fajita", name: "Fajita", price: "1,9€", description: "Con pollo, salteado de pimientos, un toque de pique", category: "rollitos", image: bodillo11 },
      { id: "burrito", name: "Burrito", price: "2,5€", description: "Pulled pork con cheddar y guacamole", category: "rollitos", image: bodillo12 },
    ],
  },
  {
    id: "tapas-gourmet",
    name: "Tapas Gourmet",
    items: [
      { id: "mini-black-bomb", name: "Mini Black Bomb", price: "2,6€", description: "43g de carne black angus en pan brioche, crema de queso, confitura de tomate", category: "tapas-gourmet", image: bodillo13 },
      { id: "mini-black-angus", name: "Mini Black Angus", price: "2,6€", description: "43g de carne black angus, queso cheddar y tomate", category: "tapas-gourmet", image: bodillo14 },
      { id: "cremoso", name: "Cremoso", price: "1,7€", description: "Pulga con cerdo, crema de queso y cebolla caramelizada", category: "tapas-gourmet", image: bodillo15 },
      { id: "flori", name: "Flori", price: "2,6€", description: "Pulga de filete de cerdo, queso curado, huevo de codorniz, lechuga y alioli", category: "tapas-gourmet", image: bodillo16 },
      { id: "kapsule", name: "Kapsule Korp", price: "2,8€", description: "Pan brioche, pulled pork casero con cebolla morada y alioli", category: "tapas-gourmet", image: bodillo17 },
    ],
  },
];
