import Header from "../../components/Header";
import Product from "../../components/Home/Product";
import HomeGrey from "../../assets/home-gray.jpg";
import Footer from "../../components/Footer";

const ProductsPage = () => {
  return (
    <>
      <Header />

      <main className="grid grid-cols-[repeat(4,minmax(120px,240px))] mx-auto gap-x-10 gap-y-5 justify-center px-5 max-lg:gap-5 max-md:grid-cols-[repeat(3,minmax(120px,240px))] max-sm:grid-cols-[repeat(2,minmax(120px,240px))] mb-20">
        <nav className="col-span-full justify-self-end">
          <select aria-placeholder="Tamanho">
            <option disabled>Tamanhos</option>
            <option value="todos">Todos</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XLL</option>
          </select>

          <select name="" id="">
            <option disabled>Cores</option>
            <option value="todas">Todas</option>
            <option value="branco">Branco</option>
            <option value="cinza">Cinza</option>
            <option value="preto">Preto</option>
          </select>

          <select name="" id="">
            <option disabled={true} aria-checked={true}>
              Preços
            </option>
            <option value="qualquer">Qualquer</option>
            <option value="">R$ 50 - R$ 150</option>
            <option value="">R$ 150 - R$ 200</option>
            <option value="">R$ 200 - R$ 300</option>
          </select>
        </nav>

        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
        <Product src={HomeGrey} alt="Produto" name="Moletom com capuz" />
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
