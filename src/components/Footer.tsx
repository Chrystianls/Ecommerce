const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-[auto_auto_1fr] gap-32 ml-28 mb-8 max-lg:gap-16 max-md:gap-4 max-md:ml-0 max-md:px-5 max-md:mx-auto max-md:grid-cols-1">
        <div className="">
          <strong className="uppercase block font-medium text-base text-neutral-900 mb-5 max-md:mb-2 max-md:text-sm">
            Sobre a loja
          </strong>
          <p className="font-normal text-base text-neutral-500 max-w-[36ch] max-md:max-w-full max-sm:text-xs">
            Após ficarmos frustrados por não encontrarmos acessórios essenciais
            de alta qualidade a preços justos, decidimos tomar as rédeas da
            situação e resolver o problema por conta própria.{" "}
          </p>
        </div>

        <div>
          <strong className="uppercase block font-medium text-base text-neutral-900 mb-5 max-md:mb-2 max-md:text-sm">
            Ajuda
          </strong>
          <ul className="font-normal text-base text-neutral-500 space-y-2 max-sm:text-xs">
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Devoluções</a>
            </li>
            <li>
              <a href="">Política de Privacidade</a>
            </li>
            <li>
              <a href="">Termos e Condições</a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="uppercase block font-medium text-base text-neutral-900 mb-5 max-md:mb-2 max-md:text-sm">
            Newsletter
          </strong>
          <p className="font-normal text-base text-neutral-500 mb-6 max-w-[34ch] max-sm:text-xs max-md:mb-2">
            Inscreva-se para receber atualizações, acesso a descontos exclusivos
            e mais.
          </p>
          <input
            className="input border border-neutral-400 py-3 px-6 pr-14 outline-none max-md:py-2 max-md:px-4 max-md:placeholder:text-xs"
            type="text"
            placeholder="Preencha seu email"
          />
        </div>
      </div>

      <div className="block w-full text-center font-normal text-base text-neutral-300 py-4 bg-neutral-800 max-md:py-2 max-md:text-sm">
        Copyright © TripleAYT
      </div>
    </footer>
  );
};

export default Footer;
