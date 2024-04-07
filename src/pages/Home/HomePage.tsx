import CategoryBanner from "../../components/Home/CategoryBanner";
import Header from "../../components/Header";
import HomeGrey from "../../assets/home-gray.jpg";
import HomeMen from "../../assets/home-men.jpg";
import HomeProduct from "../../components/Home/Product";
import Footer from "../../components/Footer";
import Banner from "../../components/Home/Banner";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner bg="bg-[url('./assets/home-page.jpg')]">
        <h2 className="uppercase font-medium text-5xl text-neutral-50 mb-10 ml-28">
          Apenas o básico
        </h2>
        <button className="uppercase font-medium text-2xl text-neutral-900 w-fit py-3 px-4 bg-neutral-100 ml-28 hover:bg-neutral-800 hover:text-neutral-50">
          Comprar Agora
        </button>
      </Banner>

      <div className="grid grid-cols-[repeat(3,minmax(0,406px))] justify-center gap-10 h-[565px] px-12 mb-20 mx-auto">
        <CategoryBanner src={HomeMen} alt="Roupas Masculinas." text="Homem" />
        <CategoryBanner src={HomeMen} alt="Roupas Femininas." text="Mulher" />
        <CategoryBanner src={HomeMen} alt="Roupas Fitness." text="Fitness" />
      </div>

      <div
        className="grid grid-cols-[repeat(4,minmax(0,220px))] gap-20 justify-center mx-auto mb-24
  "
      >
        <HomeProduct
          src={HomeGrey}
          alt="Produto"
          name="Moletom com capuz feminino cinza"
        />
        <HomeProduct
          src={HomeGrey}
          alt="Produto"
          name="Moletom com capuz feminino cinza"
        />
        <HomeProduct
          src={HomeGrey}
          alt="Produto"
          name="Moletom com capuz feminino cinza"
        />
        <HomeProduct
          src={HomeGrey}
          alt="Produto"
          name="Moletom com capuz feminino cinza"
        />
      </div>

      <button className="flex uppercase font-medium text-base text-neutral-50 py-3 px-4 bg-neutral-800 w-fit mx-auto mb-5 hover:bg-neutral-600">
        Ver todos os produtos
      </button>

      <div className="bg-[url('./assets/home-page.jpg')] bg-cover bg-no-repeat w-full h-[521px] mb-7"></div>

      <Footer />
    </>
  );
};

export default HomePage;
