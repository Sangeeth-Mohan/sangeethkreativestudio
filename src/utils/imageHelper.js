const images = {
  TMobile: require("../components/Projects/TMobile.png"),
  KaiserPermanente: require("../components/Projects/KaiserPermanente.png"),
  Sempra: require("../components/Projects/Sempra.png"),
  Apple: require("../components/Projects/Apple.png"),
  Citi: require("../components/Projects/Citi.png"),
  VisaInc: require("../components/Projects/VisaInc.png"),
  BOTW: require("../components/Projects/BOTW.png"),
  botwLogo: require("../components/Projects/BotwLogo.png"),
  Concentrix: require("../components/Projects/Concentrix.png"),
};

export const loadImage = (imageName) => {
  return images[imageName] || null;
};

// export const loadImage = (imageName) => {
//   try {
//     return require(`../assets/images/${imageName}`).default;
//   } catch (err) {
//     console.error(`Image ${imageName} not found.`, err);
//     return null;
//   }
// };
