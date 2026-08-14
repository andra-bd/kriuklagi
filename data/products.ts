export type Product = { name: string; description: string; price: number; flavor: string; color: string };
export const products: Product[] = [
  { name: "Keripik Singkong Balado", description: "Keripik singkong renyah dengan bumbu balado yang gurih dan pedas.", price: 10000, flavor: "Balado", color: "red" },
  { name: "Basreng Pedas", description: "Basreng renyah dengan bumbu pedas yang bikin tangan susah berhenti.", price: 10000, flavor: "Pedas", color: "orange" },
  { name: "Makaroni Pedas", description: "Makaroni crunchy dengan rasa pedas gurih yang cocok buat teman santai.", price: 10000, flavor: "Extra pedas", color: "yellow" },
];
