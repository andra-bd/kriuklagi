import { Product } from "@/data/products";
import { waLink } from "@/config/site";
import { SnackArt } from "./SnackArt";

const rupiah = (price: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(price);

export function ProductCard({ product }: { product: Product }) {
  const message = `Halo KriukLagi 👋\n\nSaya mau pesan:\n${product.name} — 1 pcs\n\nTotal: ${rupiah(product.price)}\n\nNama:\nAlamat:`;
  return <article className="product-card">
    <div className="product-art"><span className="flavor">{product.flavor}</span><SnackArt variant={product.color} /></div>
    <div className="product-copy"><h3>{product.name}</h3><p>{product.description}</p><div className="card-bottom"><strong>{rupiah(product.price)}</strong><a href={waLink(message)} target="_blank" rel="noreferrer" aria-label={`Pesan ${product.name} via WhatsApp`}>Pesan <span>→</span></a></div></div>
  </article>;
}
