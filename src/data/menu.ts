export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
}

export const menuCategories: Category[] = [
  { id: 'campeoes', name: 'Campeão De Pedidos - 150 G !' },
  { id: 'pasteis', name: 'Pastel - Do Jeito Você Adora !!' },
  { id: 'porcoes', name: 'Porções & Acompanhamentos' },
  { id: 'bebidas', name: 'Bebidas & Sucos' },
];

export const products: Product[] = [
  // Hambúrgueres
  {
    id: 'xbacon-150g',
    name: 'X Bacon Salada Artesanal - 150 G',
    description: 'Este delicioso lanche é cuidadosamente preparado com suculentos hambúrguer de 150g, grelhados à perfeição.',
    price: 37.99,
    category: 'campeoes',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'xburguer-150g',
    name: 'X Burguer Artesanal - 150 G',
    description: 'Este delicioso lanche é cuidadosamente preparado com um suculento hambúrguer de 150g, grelhado à perfeição.',
    price: 27.99,
    category: 'campeoes',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80'
  },
  
  // Pastéis
  {
    id: 'pastel-3queijos',
    name: 'Pastel De 03 Queijos (Catupiry, Cheddar, Mussarela)',
    description: 'Delicioso pastel crocante recheado com mix de três queijos cremosos.',
    price: 18.00,
    category: 'pasteis',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'pastel-carne-catupiry',
    name: 'Pastel de Carne c/ Catupiry',
    description: 'Carne moída temperada com toque especial e catupiry generoso.',
    price: 20.00,
    category: 'pasteis',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80'
  },

  // Porções
  {
    id: 'porcao-fritas',
    name: 'Batata Frita Crocante',
    description: 'Porção generosa de batatas fritas sequinhas e crocantes.',
    price: 24.99,
    category: 'porcoes',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'porcao-onion',
    name: 'Onion Rings (Anéis de Cebola)',
    description: 'Anéis de cebola empanados e super crocantes acompanhados de molho especial.',
    price: 28.00,
    category: 'porcoes',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=80'
  },

  // Bebidas
  {
    id: 'coca-cola-lata',
    name: 'Refrigerante Lata 350ml (Coca-Cola / Guaraná)',
    description: 'Geladinho para acompanhar o seu lanche.',
    price: 6.50,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'suco-natural-laranja',
    name: 'Suco Natural de Laranja 500ml',
    description: 'Feito na hora com frutas frescas e selecionadas.',
    price: 9.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80'
  }
];