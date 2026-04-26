export const SITE = {
  brand: "Talat Interiors",
  fullName: "Talat UPVC & Interiors",
  phones: ["0300-5479119", "0333-5902119"],
  whatsapp: "923005479119",
  office: "Ara Bazar, Chakwal, Pakistan",
  factory: "Pinwal Road, Gujar Chowk, Chakwal, Pakistan",
  factoryCoords: { lat: 32.935089, lng: 72.868286 },
};

export const waLink = (msg = "Hello Talat Interiors, I'd like a quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = (n: string) => `tel:${n.replace(/[^+0-9]/g, "")}`;
