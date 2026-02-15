const PHONE = "56933301114";

export const createWhatsAppLink = (
  material: string,
  quantity: string = "",
  location: string = ""
): string => {
  const parts = [`Hola Exportandes, quiero vender ${material}`];
  if (quantity) parts[0] += ` (${quantity})`;
  if (location) parts[0] += ` en ${location}`;
  parts[0] += ". Solicito cotización.";
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(parts[0])}`;
};

export const createGeneralWhatsAppLink = (): string => {
  const text = "Hola Exportandes, quiero cotizar la venta de chatarra. ¿Me pueden ayudar?";
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const getTrendIcon = (trend: string): { icon: string; color: string; label: string } => {
  switch (trend) {
    case "up":
      return { icon: "↑", color: "text-brand-green", label: "Al alza" };
    case "down":
      return { icon: "↓", color: "text-red-400", label: "A la baja" };
    default:
      return { icon: "→", color: "text-brand-ice", label: "Estable" };
  }
};
