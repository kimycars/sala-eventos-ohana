/* ==================================================================
   CONTENIDO EDITABLE DEL SITIO — SALA DE EVENTOS OHANA
   Centraliza marca, textos e imágenes. Cambia estos valores y el
   sitio se actualiza solo. Datos reales confirmados por el negocio
   (teléfono, dirección) o tomados de sus redes sociales (IG).
   Las fotografías del espacio son imágenes de referencia (stock)
   a la espera de las fotos reales del salón.
   ================================================================== */

export const brand = {
  name: "Sala de Eventos Ohana",
  shortName: "Ohana",
  tagline: "Espacio para eventos en Humanes de Madrid",
  phone: "624 698 293",
  phoneRaw: "34624698293",
  address: "C. de Rocinante, 33",
  city: "28970 Humanes de Madrid",
  instagram: "@ohana_sala_de_eventos",
  instagramUrl: "https://www.instagram.com/ohana_sala_de_eventos",
  hours: [
    { days: "Lunes - Viernes", time: "16:00 - 2:00" },
    { days: "Sábado", time: "12:00 - 3:00" },
    { days: "Domingo", time: "12:00 - 3:00" },
  ],
};

/* Ayudante para imágenes de Pexels (placeholders de referencia) */
export const pexels = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const heroImage = "16985129";
export const ctaImage = "37958132";

export const gallery = [
  {
    id: "17244244",
    alt: "Salón amplio con techos altos y luz natural",
    caption: "El salón principal, con techos altos",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    id: "16985178",
    alt: "Sala de banquetes preparada para invitados",
    caption: "Sala preparada para banquetes",
    className: "md:col-span-5",
  },
  {
    id: "17206048",
    alt: "Decoración elegante con mesas redondas y flores",
    caption: "Mesa redonda con decoración floral",
    className: "md:col-span-5",
  },
  {
    id: "36766850",
    alt: "Banquete con decoración floral",
    caption: "Detalle de la mesa y los arreglos",
    className: "md:col-span-7",
  },
  {
    id: "37958132",
    alt: "Celebración al aire libre con luces cálidas",
    caption: "Celebraciones al aire libre, de noche",
    className: "md:col-span-12",
  },
];

export const eventIdeas = [
  {
    title: "Celebraciones",
    desc: "Cumpleaños, aniversarios y ocasiones para reunir a los tuyos en un espacio pensado para disfrutar.",
    image: "17001792",
  },
  {
    title: "Eventos privados",
    desc: "Un ambiente íntimo y cuidado para celebraciones a medida, sin agobios y con tiempo para todo.",
    image: "36766850",
  },
  {
    title: "Reuniones y encuentros",
    desc: "Encuentros de trabajo, de familia o de amigos con todas las comodidades y espacio para todos.",
    image: "16985207",
  },
  {
    title: "Fiestas y ocasiones especiales",
    desc: "Ese plan que tienes en mente también tiene sitio en Ohana. Cuéntanoslo y lo hacemos posible.",
    image: "37958132",
  },
];