import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row bg-amber-400 min-h-[100px] text-black justify-between py-3 px-10 mt-2 border-t-4 border-black">
      <div className="flex flex-col justify-between">
        <div className="mt-2">
          <h1 className=" text-2xl font-normal font-italiana">
            Movie App
          </h1>

        </div>

        <p className="font-light md:font-normal text-sm">
          made with love. All Rights Reserved.
        </p>
      </div>

      {/* <div className="flex flex-row my-auto text-sm md:text-lg font-light h-18">
        <ul className="hidden md:flex flex-col h-full justify-between mr-3">
          <li>
            <h3 className=""> Instagram </h3>
          </li>
          <li>
            <h3 className="">E-mail </h3>
          </li>
        </ul>
        <ul className="flex flex-col h-full justify-center md:justify-between">
          <li>: nathanael.z_</li>
          <li className="truncate">: nathanaelzorens@gmail.com</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Footer;
