import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <h1 className="mb-5 w-32">MINI PROJECT</h1>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            incidunt, doloribus voluptatibus autem beatae nihil, illo quaerat
            deserunt placeat minima tenetur natus voluptas omnis quis?
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-mediummb-5">GET IN TOUCH</p>
          <div className="flex flex-col gap-1 text-gray-600">
            <li>+91-776-013-7012</li>
            <li>contact@miniproject.com</li>
          </div>
        </div>

      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ miniproject.com - All right Reserved</p>
      </div>

    </div>
  );
};

export default Footer;
