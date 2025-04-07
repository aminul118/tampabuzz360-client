import Link from "next/link";
import React from "react";
import Copiright from "./Copiright";

const Footer = () => {
  const allThingsGood = [
    {
      title: "Stories",
      url: "/stories",
    },
    {
      title: "Events",
      url: "/events",
    },
    {
      title: "Eats",
      url: "/eats",
    },
    {
      title: "Things To Do",
      url: "/things-to-do",
    },
  ];

  const moreFromUs = [
    {
      title: "Advertise",
      url: "/advertise",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Careers",
      url: "/careers",
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
    },
  ];

  return (
    <footer className="bg-black py-10 px-4 md:px-10 text-white">
      <div className="flex flex-col md:flex-row gap-6 justify-between container mx-auto">
        {/* Left */}
        <div>
          <p className=" text-sm max-w-xl">
            Since 2013, That’s So Tampa has been the most trusted local resource
            for discovering All Things Good in Tampa Bay.
          </p>
        </div>

        {/* Middle */}
        <div>
          <p className="text-lg font-semibold mb-3">All Things Good</p>
          <ul className="space-y-2">
            {allThingsGood.map((menu, i) => (
              <li key={i}>
                <Link href={menu.url} className="text-white/90  text-sm">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="text-lg font-semibold mb-3">More From Us</p>
          <ul className="space-y-2">
            {moreFromUs.map((menu, i) => (
              <li key={i}>
                <Link href={menu.url} className="text-white/90  text-sm">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Copiright />
    </footer>
  );
};

export default Footer;
