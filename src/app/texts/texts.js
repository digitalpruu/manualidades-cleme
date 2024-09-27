const title = "Manualidades Cleme";
const email = "clemenciaurriago@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573107977558"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Manualidades Cleme, nos dedicamos a la creación de hermosas manualidades navideñas, bisutería y la venta de blusas y blusones únicos. Creemos en el poder del trabajo creativo para transformar cualquier ocasión en algo especial.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Trabajar es poder.", // Slogan proporcionado
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com", // Link base ya que no se proporcionó uno específico
        instagram: "https://www.instagram.com", // Link base ya que no se proporcionó uno específico
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
