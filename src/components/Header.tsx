import { Menu, Search, ShoppingBag, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-9 py-2 max-md:grid max-md:grid-cols-[1fr_auto_auto] max-md:grid-rows-2 max-md:px-3">
      <button className="p-2 rounded-full hover:bg-neutral-200 max-md:col-start-3 max-md:ml-1">
        <Menu />
      </button>
      <a
        href=""
        className="font-medium text-6xl text-neutral-950 max-md:col-start-1 max-md:row-start-1 max-md:text-5xl"
      >
        AYT
      </a>
      <div className="flex space-x-5 max-md:col-start-2 max-md:row-start-1 max-md:space-x-1">
        <button className="p-2 rounded-full hover:bg-neutral-200 max-md:hidden">
          <Search />
          <input
            type="text"
            className="bg-transparent outline-none ml-3 hidden max-md:block"
          />
        </button>
        <button className="p-2 rounded-full hover:bg-neutral-200">
          <User />
        </button>
        <button className="p-2 rounded-full hover:bg-neutral-200">
          <ShoppingBag />
        </button>
      </div>

      <button className="hidden max-md:flex p-2 rounded-full hover:bg-neutral-200 row-start-2 bg-neutral-200 col-span-3 my-3">
        <Search />
        <input
          type="text"
          className="bg-transparent outline-none ml-3 flex-1"
        />
      </button>
    </header>
  );
};

export default Header;
