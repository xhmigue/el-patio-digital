import { MenuCategory } from "@/types/menu";

// Import images
import bodillo2 from "@/assets/bodillos/2.webp";
import bodillo4 from "@/assets/bodillos/4.webp";
import bodillo5 from "@/assets/bodillos/5.webp";
import bodillo11 from "@/assets/bodillos/11.webp";
import bodillo12 from "@/assets/bodillos/12.webp";
import bodillo13 from "@/assets/bodillos/13.webp";
import bodillo14 from "@/assets/bodillos/14.webp";
import bodillo16 from "@/assets/bodillos/16.webp";
import bodillo17 from "@/assets/bodillos/17.webp";

import tapa6 from "@/assets/tapas/6.webp";
import tapa8 from "@/assets/tapas/8.webp";
import tapa9 from "@/assets/tapas/9.webp";
import tapa10 from "@/assets/tapas/10.webp";
import tapa11 from "@/assets/tapas/11.webp";
import tapa12 from "@/assets/tapas/12.webp";
import tapa13 from "@/assets/tapas/13.webp";
import tapa18 from "@/assets/tapas/18.webp";
import tapa19 from "@/assets/tapas/19.webp";

// Import images (Platillos)
import anchoa from "@/assets/platillos/anchoa.webp";
import burgerDeCerdo from "@/assets/platillos/burger_de_cerdo.webp";
import camperoPolloAsado from "@/assets/platillos/campero_pollo_asado.webp";
import crispaChicken from "@/assets/platillos/crispa_chicken.webp";
import iberito from "@/assets/platillos/iberito.webp";
import kebab from "@/assets/platillos/kebab.webp";
import platoTonterias from "@/assets/platillos/plato_tonterias.webp";
import queso from "@/assets/platillos/queso.webp";
import tapasCaseras from "@/assets/platillos/tapas_caceras.webp";
import burgerAmericana from "@/assets/platillos/burger_americana.webp";
import camperoBells from "@/assets/platillos/campero_bells.webp";
import cremoso from "@/assets/platillos/cremoso.webp";
import dobleChease from "@/assets/platillos/doble_chease.webp";
import kapsuleCorp from "@/assets/platillos/kapsule_corp.webp";
import mechada from "@/assets/platillos/mechada.webp";
import pulgaTortillaPatatas from "@/assets/platillos/pulga_de_tortilla_de_patatas.webp";
import serranito from "@/assets/platillos/serranito.webp";
import tropezon from "@/assets/platillos/tropezon.webp";
import perrito from "@/assets/platillos/perrito.jpeg";
import plumi from "@/assets/platillos/plumi.jpeg";

export const menuCategories: MenuCategory[] = [
  {
    id: "cervezas-barril",
    name: "Barril El Águila Dorada",
    items: [
      { id: "cana", name: "Caña", price: "1,7€", category: "cervezas-barril" },
      {
        id: "copa",
        name: "Copa 0,30 cl",
        price: "2,40€",
        category: "cervezas-barril",
      },
      {
        id: "pinta",
        name: "Pinta",
        price: "3,4€",
        category: "cervezas-barril",
      },
    ],
    isOpen: false,
  },
  {
    id: "cervezas",
    name: "Cervezas",
    items: [
      {
        id: "cruzcampo",
        name: "Cruzcampo",
        price: "2,2€",
        category: "cervezas",
      },
      { id: "heineken", name: "Heineken", price: "2,5€", category: "cervezas" },
      { id: "alcazar", name: "Alcázar", price: "2,8€", category: "cervezas" },
      {
        id: "aguila-sin-filtrar",
        name: "El Águila Sin Filtrar",
        price: "2,8€",
        category: "cervezas",
      },
      {
        id: "alhambra-1925",
        name: "Alhambra 1925",
        price: "3€",
        category: "cervezas",
      },
      {
        id: "estrella-galicia",
        name: "Estrella Galicia",
        price: "2,4€",
        category: "cervezas",
      },
      {
        id: "mahou-5",
        name: "Mahou 5 Estrellas",
        price: "2,4€",
        category: "cervezas",
      },
      { id: "coronita", name: "Coronita", price: "3€", category: "cervezas" },
      { id: "budweiser", name: "Budweiser", price: "3€", category: "cervezas" },
      { id: "guinness", name: "Guinness", price: "3,5€", category: "cervezas" },
      { id: "radler", name: "Radler", price: "2,2€", category: "cervezas" },
      {
        id: "heineken-00",
        name: "Heineken 0'0",
        price: "2,4€",
        category: "cervezas",
      },
      {
        id: "amstel-00",
        name: "Amstel 0'0 Tostada",
        price: "2,2€",
        category: "cervezas",
      },
      { id: "salitos", name: "Salitos", price: "3,5€", category: "cervezas" },
      {
        id: "kopparberg",
        name: "Kopparberg",
        price: "3,5€",
        category: "cervezas",
      },
    ],
    isOpen: false,
  },
  {
    id: "vinos",
    name: "Vinos",
    items: [
      {
        id: "rioja",
        name: "Tinto Rioja Rivalia",
        subtitle: "(maceración carbonica)",
        price: "3€",
        description: "Botella: 12,5€",
        category: "vinos",
      },
      {
        id: "ribera",
        name: "Tinto Ribera Prado Marina",
        price: "2,8€",
        description: "Botella: 12€",
        category: "vinos",
      },
      {
        id: "rueda",
        name: "Rueda 100% Verdejo Casa de Castilla",
        price: "2,8€",
        description: "Botella: 12€",
        category: "vinos",
      },
      {
        id: "blanco-dulce",
        name: "Vino Blanco Dulce Árabe",
        price: "3€",
        description: "Botella: 12,5€",
        category: "vinos",
      },
      {
        id: "barbadillo",
        name: "Barbadillo",
        price: "2,8€",
        description: "Botella: 12€",
        category: "vinos",
      },
      {
        id: "fragolino",
        name: "Fragolino",
        price: "2,8€",
        description: "Botella: 12€",
        category: "vinos",
      },
    ],
    isOpen: false,
  },
  {
    id: "platotonterias",
    name: "Plato de Tonterías",
    items: [
      {
        id: "anchoa",
        name: "Anchoa de Santoña 0'0",
        price: "1,6€",
        category: "platotonterias",
        image: anchoa,
      },
      {
        id: "cerdo-jamon",
        name: "Cerdo, jamón serrano, pimiento rojo y alioli",
        price: "1,8€",
        category: "platotonterias",
        image: platoTonterias,
      },
      {
        id: "cerdo-queso",
        name: "Cerdo, queso curado, lechuga y alioli",
        price: "1,8€",
        category: "platotonterias",
        image: bodillo11,
      },
      {
        id: "tropezon",
        name: "Tropezón",
        description: "cerdo, tomate y huevo de codorniz",
        price: "1,8€",
        category: "platotonterias",
        image: tropezon,
      },
    ],
    isOpen: true,
  },
  {
    id: "tapas",
    name: "Tapas",
    items: [
      {
        id: "queso-curado",
        name: "Queso Curado",
        price: "1,5€",
        category: "tapas",
        image: queso,
      },
      {
        id: "salchichon",
        name: "Salchichón",
        price: "1,5€",
        category: "tapas",
        image: tapa6,
        isVisible: false,
      },
      {
        id: "tapas-caseras",
        name: "Tapas Caseras en Vitrina",
        price: "1,4€",
        category: "tapas",
        image: tapasCaseras,
        isVisible: false,
      },
      {
        id: "medias",
        name: "Medias Raciones",
        price: "5,8€",
        category: "tapas",
        image: tapa8,
        isVisible: false,
      },
      {
        id: "medias-especiales",
        name: "Medias Raciones Especiales",
        price: "6,5€",
        category: "tapas",
        image: tapa9,
        isVisible: false,
      },
      {
        id: "gildas-anchoa",
        name: "Gildas de Anchoa con Queso",
        subtitle: "(NEW)",
        price: "1,5€",
        category: "tapas",
        image: tapa10,
        isVisible: false,
      },
      {
        id: "gildas-cecina",
        name: "Gildas de Cecina con Queso",
        subtitle: "(NEW)",
        price: "1,5€",
        category: "tapas",
        image: tapa11,
        isVisible: false,
      },
      {
        id: "pinchos-morunos",
        name: "Pinchos Morunos",
        subtitle: "(NEW)",
        price: "1,8€",
        category: "tapas",
        image: tapa12,
        isVisible: false,
      },
      {
        id: "pincho-gambon",
        name: "Pincho de Gambón",
        subtitle: "(NEW)",
        price: "2,2€",
        category: "tapas",
        image: tapa13,
        isVisible: false,
      },
    ],
    isOpen: true,
  },
  {
    id: "mini-burgers",
    name: "Mini Burgers",
    items: [
      {
        id: "burger-cerdo",
        name: "Burger de Cerdo",
        description: "Con bacon, queso, cebolla a la plancha y alioli",
        price: "1,70€",
        category: "mini-burgers",
        image: burgerDeCerdo,
      },
      {
        id: "burger-americana",
        name: "Burger Americana de Ternera",
        description: "Queso cheddar, salsa americana y pepinillo",
        price: "1,9€",
        category: "mini-burgers",
        image: burgerAmericana,
      },
      {
        id: "doble-cheese",
        name: "Doble Cheese Burger",
        description:
          "Doble carne de ternera, queso cheddar, queso edam y kétchup",
        price: "2,6€",
        category: "mini-burgers",
        image: dobleChease,
      },
      {
        id: "crispy-chicken",
        name: "Crispy Chicken",
        description: "Pollo, tomate y alioli",
        price: "1,5€",
        category: "mini-burgers",
        image: crispaChicken,
      },
      {
        id: "burger-mojo",
        name: "Burger Mojo Picón",
        description: "Ternera, mojo picón, queso y lechuga",
        price: "1,9€",
        category: "mini-burgers",
        image: tapa18,
        isVisible: false,
      },
      {
        id: "perrito",
        name: "Perrito",
        description: "Cebolla crujiente y kétchup",
        price: "1,3€",
        category: "mini-burgers",
        image: perrito,
      },
    ],
    isOpen: true,
  },
  {
    id: "mini-camperos",
    name: "Mini Camperos",
    items: [
      {
        id: "pollo-asado",
        name: "Pollo Asado",
        price: "1,5€",
        description: "Tomate y alioli",
        category: "mini-camperos",
        image: camperoPolloAsado,
      },
      {
        id: "mixto",
        name: "Mixto",
        price: "1,5€",
        description: "York, queso y mantequilla",
        category: "mini-camperos",
        image: bodillo2,
        isVisible: false,
      },
      {
        id: "bells",
        name: "Bell's",
        price: "2,6€",
        description:
          "Pollo asado, carne mechada, queso, tomate, lechuga y alioli",
        category: "mini-camperos",
        image: camperoBells,
      },
      {
        id: "plumi",
        name: "Plumi",
        price: "2,3€",
        description: "Tortilla de patata, carne mechada y alioli",
        category: "mini-camperos",
        image: plumi,
      },
    ],
    isOpen: true,
  },
  {
    id: "pulguitas",
    name: "Pulguitas",
    items: [
      {
        id: "pollo-guacamole",
        name: "Pollo con Guacamole",
        price: "1,5€",
        category: "pulguitas",
        image: bodillo5,
        isVisible: false,
      },
      {
        id: "toritillapatatas",
        name: "Tortilla de Patatas",
        price: "1,5€",
        description: "Con alioli",
        category: "pulguitas",
        image: pulgaTortillaPatatas,
      },
      {
        id: "carnemechada",
        name: "Carne Mechada",
        price: "1,5€",
        description: "Con alioli",
        category: "pulguitas",
        image: mechada,
      },
      {
        id: "serranito",
        name: "Serranito",
        price: "1,8€",
        description: "Filete de cerdo, jamón serrano, pimiento rojo y alioli",
        category: "pulguitas",
        image: serranito,
      },
      {
        id: "baconqueso",
        name: "Bacon Queso",
        price: "1,5€",
        description: "Alioli",
        category: "pulguitas",
        image: bodillo4,
        isVisible: false,
      },
    ],
    isOpen: true,
  },
  {
    id: "rollitos",
    name: "Rollitos",
    items: [
      {
        id: "mini-kebab",
        name: "Mini Kebab",
        price: "1,9€",
        description: "Kebab de pollo, lechuga, cebolla plancha y salsa kebab",
        category: "rollitos",
        image: kebab,
      },
      {
        id: "fajita",
        name: "Fajita",
        subtitle: "(NEW)",
        price: "1,9€",
        description: "Con pollo, salteado de pimientos, un toque de pique",
        category: "rollitos",
        image: bodillo11,
        isVisible: false,
      },
      {
        id: "burrito",
        name: "Burrito",
        subtitle: "(NEW)",
        price: "2,5€",
        description: "Pulled pork con cheddar y guacamole",
        category: "rollitos",
        image: bodillo12,
        isVisible: false,
      },
    ],
    isOpen: true,
  },
  {
    id: "tapas-gourmet",
    name: "Tapas Gourmet",
    items: [
      {
        id: "mini-black-bomb",
        name: "Mini Black Bomb",
        price: "2,6€",
        description:
          "43g de carne black angus en pan brioche, crema de queso curado y confitura de tomate",
        category: "tapas-gourmet",
        image: bodillo13,
        isVisible: false,
      },
      {
        id: "mini-black-angus",
        name: "Mini Black Angus",
        price: "2,6€",
        description: "43g de carne black angus, queso cheddar y tomate",
        category: "tapas-gourmet",
        image: bodillo14,
        isVisible: false,
      },
      {
        id: "iberito",
        name: "Iberito",
        price: "2,1€",
        description: "Pulga de crema de jamón ibérico y carne mechada",
        category: "tapas-gourmet",
        image: iberito,
      },
      {
        id: "cremoso",
        name: "Cremoso",
        price: "1,7€",
        description: "Pulga con cerdo, crema de queso y cebolla caramelizada",
        category: "tapas-gourmet",
        image: cremoso,
      },
      {
        id: "flori",
        name: "Flori",
        price: "2,6€",
        description:
          "Pulga de filete de cerdo, queso curado, huevo de codorniz, lechuga y alioli",
        category: "tapas-gourmet",
        image: bodillo16,
        isVisible: false,
      },
      {
        id: "kapsule",
        name: "Kapsule Korp",
        subtitle: "(NEW)",
        price: "2,8€",
        description:
          "Pan brioche, pulled pork casero con cebolla morada y alioli",
        category: "tapas-gourmet",
        image: kapsuleCorp,
      },
      {
        id: "cristabells",
        name: "Cristabell’s",
        subtitle: "(NEW)",
        price: "2,8€",
        description:
          "Pan cristal, solomillo al whisky, mayo trufada con un toque de lima",
        category: "tapas-gourmet",
        image: bodillo17,
        isVisible: false,
      },
    ],
    isOpen: true,
  },
];
