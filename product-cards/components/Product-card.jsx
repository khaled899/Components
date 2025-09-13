import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import PropTypes from "prop-types";
import AddToWishListBtn from "./AddToWishListBtn";
import ProductQuickView from "./ProductQuickView";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full max-w-sm mx-auto cursor-pointer group">
      <div className="relative bg-gray-100 rounded-lg w-full aspect-square flex items-center justify-center overflow-hidden">
        <Link href={`/products/${product.id}`} className="w-full h-full block">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover sm:object-contain transition-transform duration-300 group-hover:scale-105"
            width={800}
            height={800}
            priority
          />
        </Link>

        {/* Quick View button */}
        <ProductQuickView product={product} />

        <div className="absolute top-2 right-2">
          <AddToWishListBtn />
        </div>
      </div>

      <p className="text-sm sm:text-base font-medium pt-1 w-full truncate">{product.title}</p>

      <p className="w-full text-xs sm:text-sm text-gray-500 max-sm:hidden truncate">{product.description}</p>

      <div className="flex items-center gap-1">
        <p className="text-xs sm:text-sm">4.5</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image key={`star-${product.id}-${index}`} src={index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon} alt="star" width={12} height={12} />
          ))}
        </div>
      </div>

      {/* Price & Cart */}
      <div className="flex items-center justify-between w-full mt-1">
        <p className="text-sm sm:text-base font-medium">${product.price}</p>
        {/* <AddToCartBtn className="px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition" text="Add To Cart" product={product} /> */}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductCard;
