import ShopItemCard from "./ShopItemCard";
import { useOutletContext } from "react-router";

export default function CartItemGrid() {
  const [cart, setCart] = useOutletContext();

  function handleClick(cardId) {
    setCart(cart.filter((item) => item.id !== cardId));
  }

  console.log(cart);

  return (
    <div>
      <ul>
        {cart.map((card) => (
          <li key={card.id}>
            <ShopItemCard
              title={card.title}
              price={card.price}
              description={card.description}
              category={card.category}
              imgUrl={card.image}
              onClick={() => handleClick(card.id)}
              inCart={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
