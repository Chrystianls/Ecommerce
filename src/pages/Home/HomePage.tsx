import CategoryBanner from "../../components/Home/CategoryBanner";
import Header from "../../components/Header";
import HomeGrey from "../../assets/home-gray.jpg";
import Footer from "../../components/Footer";
import Banner from "../../components/Home/Banner";
import Product from "../../components/Home/Product";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner
        bg="bg-[url('./assets/home-page.jpg')]"
        className="max-xl:max-h-[500px] max-md:max-h-96"
      >
        <h2 className="uppercase font-medium text-5xl text-neutral-50 mb-10 ml-28 max-xl:ml-14 max-md:ml-7 max-xl:mb-6 max-md:mb-3 max-lg:text-4xl max-md:text-2xl">
          Apenas o básico
        </h2>
        <button className="uppercase font-medium text-2xl text-neutral-900 w-fit py-3 px-4 bg-neutral-100 ml-28 hover:bg-neutral-800 hover:text-neutral-50 max-xl:ml-14 max-md:ml-7 max-xl:text-base max-md:text-sm">
          Comprar Agora
        </button>
      </Banner>

      <div className="grid grid-cols-[repeat(3,minmax(0,406px))] justify-center gap-10 h-[565px] px-12 mb-20 mx-auto max-xl:max-h-[460px] max-md:max-h-72 max-md:gap-4 max-sm:gap-2 max-md:px-8 max-sm:px-4 max-lg:mb-16 max-md:mb-8">
        <CategoryBanner
          className="bg-[url('./assets/home-men.jpg')]"
          text="Homem"
        />
        <CategoryBanner
          className="bg-[url('./assets/home-men.jpg')]"
          text="Mulher"
        />
        <CategoryBanner
          className="bg-[url('./assets/home-men.jpg')]"
          text="Fitness"
        />
      </div>

      <div className="grid grid-cols-[repeat(4,minmax(64px,220px))] px-10 gap-20 justify-center mx-auto mb-24 max-xl:gap-10 max-sm:px-8 max-md:gap-3 max-sm:grid-cols-3 max-lg:mb-16 max-md:mb-8">
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
      </div>

      <button className="flex uppercase font-medium text-base text-neutral-50 py-3 px-4 bg-neutral-800 w-fit mx-auto mb-5 hover:bg-neutral-600 max-sm:text-xs">
        Ver todos os produtos
      </button>

      <div className="bg-[url('./assets/home-page.jpg')] bg-cover bg-no-repeat bg-center w-full h-[521px] mb-7 max-lg:max-h-80 max-md:max-h-60"></div>

      <Footer />
    </>
  );
};

export default HomePage;
