export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Pizza" | "Pasta" | "Salate" | "Desserts" | "Getränke";
  image?: string;
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  // Pizza
  {
    id: "p1",
    name: "Pizza Margherita",
    description: "San Marzano Tomaten, Mozzarella di Bufala, frisches Basilikum, Olivenöl",
    price: 8.50,
    category: "Pizza",
    tags: ["Vegetarisch", "Bestseller"]
  },
  {
    id: "p2",
    name: "Pizza Diavola",
    description: "Tomaten, Mozzarella, scharfe Salami, Peperoni, Oliven",
    price: 11.50,
    category: "Pizza",
    tags: ["Scharf", "Bestseller"]
  },
  {
    id: "p3",
    name: "Pizza Prosciutto e Funghi",
    description: "Tomaten, Mozzarella, gekochter Schinken, frische Champignons",
    price: 10.50,
    category: "Pizza"
  },
  {
    id: "p4",
    name: "Pizza Tonno e Cipolla",
    description: "Tomaten, Mozzarella, Thunfisch, rote Zwiebeln, Kapern",
    price: 11.00,
    category: "Pizza"
  },
  {
    id: "p5",
    name: "Pizza Quattro Formaggi",
    description: "Mozzarella, Gorgonzola, Parmesan, Pecorino (ohne Tomatensauce)",
    price: 12.00,
    category: "Pizza",
    tags: ["Vegetarisch"]
  },

  // Pasta
  {
    id: "pa1",
    name: "Tagliatelle al Tartufo",
    description: "Frische Tagliatelle, schwarzer Trüffel, Parmesan-Creme, Schnittlauch",
    price: 14.50,
    category: "Pasta",
    tags: ["Premium", "Vegetarisch", "Bestseller"]
  },
  {
    id: "pa2",
    name: "Spaghetti Carbonara",
    description: "Original italienisch mit Guanciale, Eigelb, Pecorino Romano, schwarzer Pfeffer",
    price: 12.50,
    category: "Pasta",
    tags: ["Bestseller"]
  },
  {
    id: "pa3",
    name: "Penne all'Arrabbiata",
    description: "Würzige Tomatensauce, Knoblauch, Chili, Petersilie",
    price: 9.50,
    category: "Pasta",
    tags: ["Scharf", "Vegan"]
  },

  // Salate
  {
    id: "s1",
    name: "Insalata Caprese",
    description: "Büffelmozzarella, reife Tomaten, frisches Basilikum, Balsamico-Reduktion",
    price: 9.00,
    category: "Salate",
    tags: ["Vegetarisch"]
  },
  {
    id: "s2",
    name: "Insalata Mista",
    description: "Gemischter Saisonsalat mit Kirschtomaten, Gurken und Hausdressing",
    price: 6.50,
    category: "Salate",
    tags: ["Vegan"]
  },

  // Desserts
  {
    id: "d1",
    name: "Tiramisu Classico",
    description: "Hausgemacht nach Familienrezept mit Mascarpone und Espresso",
    price: 6.00,
    category: "Desserts",
    tags: ["Bestseller"]
  },
  {
    id: "d2",
    name: "Panna Cotta",
    description: "Gekochte Sahne mit Vanille und hausgemachtem Beeren-Coulis",
    price: 5.50,
    category: "Desserts"
  }
];
