interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>⭐ {product.rating}</p>

      <h2>₹{product.price}</h2>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;