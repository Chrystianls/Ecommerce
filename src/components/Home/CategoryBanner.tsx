interface CategoryBannerProps {
  src: string;
  alt: string;
  text: string;
}

const CategoryBanner = ({ src, alt, text }: CategoryBannerProps) => {
  return (
    <div className="flex justify-center items-center w-full relative cursor-pointer">
      <img className="absolute w-full h-full -z-10" src={src} alt={alt} />
      <h3 className="font-medium text-neutral-100 text-4xl">{text}</h3>
    </div>
  );
};

export default CategoryBanner;
