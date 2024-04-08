interface CategoryBannerProps {
  text: string;
  className?: string;
}

const CategoryBanner = ({ text, className }: CategoryBannerProps) => {
  return (
    <div
      className={`flex justify-center items-center w-full relative cursor-pointer bg-cover bg-center bg-no-repeat ${className}`}
    >
      <h3 className="font-medium text-neutral-100 text-4xl max-lg:text-3xl max-md:text-2xl">
        {text}
      </h3>
    </div>
  );
};

export default CategoryBanner;
