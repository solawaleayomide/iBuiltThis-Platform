export interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "ParityKit",
    description: "A tool kit for creating parity products",
    // link: "https://paritykit.com",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "ParityKit",
    description: "A tool kit for creating parity products",
    // link: "https://paritykit.com",
    tags: ["Saas", "course", "Next js"],
    votes: 565,
    isFeatured: false,
  },
  {
    id: 3,
    name: "ParityKit",
    description: "A tool kit for creating parity products",
    // link: "https://paritykit.com",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 4,
    name: "ParityKit",
    description: "A tool kit for creating parity products",
    // link: "https://paritykit.com",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
];

export const recentlyLaunchedProducts: Product[] = [
  // {
  //   id: 1,
  //   name: "ParityKit",
  //   description: "A tool kit for creating parity products",
  //   // link: "https://paritykit.com",
  //   tags: ["Saas", "Pricing", "Global"],
  //   votes: 615,
  //   isFeatured: true,
  // },
  // {
  //   id: 2,
  //   name: "ParityKit",
  //   description: "A tool kit for creating parity products",
  //   // link: "https://paritykit.com",
  //   tags: ["Saas", "course", "Next js"],
  //   votes: 565,
  //   isFeatured: false,
  // },
  // {
  //   id: 3,
  //   name: "ParityKit",
  //   description: "A tool kit for creating parity products",
  //   // link: "https://paritykit.com",
  //   tags: ["Saas", "Pricing", "Global"],
  //   votes: 615,
  //   isFeatured: true,
  // },
  // {
  //   id: 4,
  //   name: "ParityKit",
  //   description: "A tool kit for creating parity products",
  //   // link: "https://paritykit.com",
  //   tags: ["Saas", "Pricing", "Global"],
  //   votes: 615,
  //   isFeatured: true,
  // },
];
