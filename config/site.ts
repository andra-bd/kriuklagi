export const siteConfig = {
  name: "KriukLagi",
  tagline: "Sekali Kriuk, Mau Lagi.",
  email: "hello.kriuklagi@gmail.com",
  // Ganti nomor ini sebelum website diluncurkan.
  whatsapp: "628XXXXXXXXXX",
  instagram: "",
  tiktok: "",
  marketplace: "",
};

export const waLink = (message: string) => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
