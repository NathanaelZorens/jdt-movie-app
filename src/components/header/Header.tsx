import React from "react";

const navData = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/trending",
    label: "Trending",
  },
  {
    route: "/now_playing",
    label: "Now Playing",
  },
  {
    route: "/airing_today",
    label: "Airing Today",
  },
];

const Header: React.FC = () => {
  return (
    <div className="flex flex-row w-screen h-18 bg-black justify-between p-2 ">
      <h1 className="text-2xl my-auto font-normal text-zinc-200 m-2 hover:text-amber-400 rounded-md border-4 border-zinc-300 hover:border-amber-400 px-3 py-2 font-pacifico"><a href="/">Movie App</a></h1>

      <nav className="flex flex-row my-auto">
        {navData.map((item) => (
          <a
            className="hover:text-amber-500 underline-offset-4 hover:underline font-medium my-auto px-1 md:px-4 text-md md:text-lg transition-color duration-300 delay-100"
            key={item.route}
            href={item.route}
          >
            <div className="flex flex-row m-auto gap-0.5">
              <p className="hidden md:flex">{item.label}</p>
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
