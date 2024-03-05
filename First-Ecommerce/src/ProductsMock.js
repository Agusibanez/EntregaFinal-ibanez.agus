export let products = [
  {
    id: "1",
    tittle: "logitech alloy fps",
    price: 59.99,
    description:
      "Teclado mecánico retroiluminado con switches Cherry MX, ideal para gaming.",
    category: "Teclados",
    img: "https://res.cloudinary.com/dk6xc7hov/image/upload/v1709169628/teclado-hyperx-alloy-fps-rgb-mecanico-gaming-kailh-0_zatkgx.webp",
    stock: 13,
  },
  {
    id: "2",
    tittle: "logitech G203",
    price: 29.99,
    description:
      "Ratón inalámbrico ergonómico con diseño contorneado para mayor comodidad durante largas horas de uso.",
    category: "Mouse",
    img: "https://res.cloudinary.com/dk6xc7hov/image/upload/v1709169628/38349_1_qjoclv.webp",
    stock: 15,
  },
  {
    id: "3",
    tittle: "Patriot Viper V570 Blackout",
    price: 49.99,
    description:
      "Auriculares gaming con sonido envolvente y micrófono retráctil, ideal para comunicación durante el juego.",
    category: "Mouse",
    img: "https://res.cloudinary.com/dk6xc7hov/image/upload/v1709169628/patriot_pv570luxwak_viper_rgb_laser_mouse_1509985258_1372117_ll1h9v.webp",
    stock: 8,
  },
  {
    id: "4",
    tittle: "Redragon Kumara K552",
    price: 39.99,
    description:
      "Teclado ergonómico con reposamuñecas acolchado para mayor comodidad durante largas sesiones de escritura.",
    category: "Teclados",
    img: "https://res.cloudinary.com/dk6xc7hov/image/upload/v1709169628/937503-MLA44928893908_022021-F_lj2pt6.webp",
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
