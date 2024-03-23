import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "../components/pages/Cart/CartContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "home",
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: "home",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "home",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "home",
    path: "/checkout",
    Element: CartContainer,
  },
];
