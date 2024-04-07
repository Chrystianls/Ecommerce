interface ProductProps {
  src: string;
  alt: string;
  name: string;
}

const Product = ({ src, alt, name }: ProductProps) => {
  return (
    <div className="grid justify-center cursor-pointer">
      <img className="w-full  h-[288px] mb-2" src={src} alt={alt} />
      <h4 className="font-medium text-base text-center text-neutral-400 px-4">
        {name}
      </h4>
    </div>
  );
};

export default Product;
