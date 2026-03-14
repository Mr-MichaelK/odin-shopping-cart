export default function ShopItemCard({
  title,
  price,
  description,
  category,
  imgUrl,
  onClick,
  inCart = false,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <title>{title}</title>
      <p>{price}$</p>
      <p>{description}</p>
      <p>{category}</p>
      <button onClick={onClick}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
