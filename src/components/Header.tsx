import { Menu, Search, ShoppingBag, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-9 py-2">
      <button className="p-2 rounded-full hover:bg-neutral-200">
        <Menu />
      </button>
      <a href="" className="font-medium text-6xl text-neutral-950">
        AYT
      </a>
      <div className="flex space-x-5">
        <button className="p-2 rounded-full hover:bg-neutral-200">
          <User />
        </button>
        <button className="p-2 rounded-full hover:bg-neutral-200">
          <Search />
        </button>
        <button className="p-2 rounded-full hover:bg-neutral-200">
          <ShoppingBag />
        </button>
      </div>
    </header>
  );
};

export default Header;
