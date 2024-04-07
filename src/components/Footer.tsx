const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-[auto_auto_1fr] gap-32 ml-28 mb-8">
        <div>
          <strong className="uppercase block font-medium text-base text-neutral-900 mb-5">
            Sobre a loja
          </strong>
          <p className="font-normal text-base text-neutral-500 max-w-[36ch]">
            Após ficarmos frustrados por não encontrarmos acessórios essenciais
            de alta qualidade a preços justos, decidimos tomar as rédeas da
            situação e resolver o problema por conta própria.{" "}
          </p>
        </div>

        <div>
          <strong className="uppercase block font-medium text-base text-neutral-900 mb-5">
            Ajuda
          </strong>
          <ul className="font-normal text-base text-neutral-500 space-y-2">
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
          <strong className="uppercase block font-medium text-base text-neutral-900 mb-5">
            Newsletter
          </strong>
          <p className="font-normal text-base text-neutral-500 mb-6 max-w-[34ch]">
            Inscreva-se para receber atualizações, acesso a descontos exclusivos
            e mais.
          </p>
          <input
            className="input border border-neutral-400 py-3 px-6 pr-14 outline-none"
            type="text"
            placeholder="Preencha seu email"
          />
        </div>
      </div>

      <div className="block w-full text-center font-normal text-base text-neutral-300 py-4 bg-neutral-800">
        Copyright © TripleAYT
      </div>
    </footer>
  );
};

export default Footer;
