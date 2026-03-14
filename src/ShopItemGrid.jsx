import ShopItemCard from "./ShopItemCard";
import useFetch from "./utils/useFetch";
import { useOutletContext } from "react-router";

export default function ShopItemGrid() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );

  const [cart, setCart] = useOutletContext();

  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  function handleClick(item) {
    setCart((prevCart) => {
      const exists = prevCart.some((cartItem) => cartItem.id === item.id);

      if (exists) {
        return prevCart;
      }

      return [...prevCart, item];
    });
  }

  return (
    <div>
      <ul>
        {data.map((card) => (
          <li key={card.id}>
            <ShopItemCard
              title={card.title}
              price={card.price}
              description={card.description}
              category={card.category}
              imgUrl={card.image}
              onClick={() => handleClick(card)}
              inCart={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
