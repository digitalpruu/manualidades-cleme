const title = "Manualidades Cleme";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Manualidades Cleme ofrece una variedad de productos creativos y únicos, incluyendo manualidades navideñas, bisutería, y una selección de blusas y blusones. Cada pieza está cuidadosamente elaborada para aportar un toque especial a tus festividades y estilo personal.",
        description2: "Nos apasiona el arte y la creatividad, y estamos comprometidos en brindar productos que no solo destaquen por su belleza, sino también por su calidad y originalidad."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Trabajar es poder",
            p2: "" // Información no proporcionada
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "", // Información no proporcionada
        instagram: "", // Información no proporcionada
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
