interface ProductProps {
  src: string;
  alt: string;
  name: string;
}

const Product = ({ src, alt, name }: ProductProps) => {
  return (
    <div className="grid justify-center cursor-pointer">
      <img className="w-full h-full block" src={src} alt={alt} />
      <h4 className="font-medium text-base mt-1 text-center text-neutral-400 px-4 max-md:text-xs max-lg:px-2 max-md:px-1">
        {name}
      </h4>
    </div>
  );
};

export default Product;
