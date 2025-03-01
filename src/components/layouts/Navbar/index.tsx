import React from "react";
import type { NavItemType } from "./NavItemGroup";
import NavItemGroup from "./NavItemGroup";
import Button from "../../common/Button";
import { useAppKit } from "@reown/appkit/react";
import useAppkitWallet from "../../../hooks/useAppkitWallet";
import { formatAppkitAddress } from "../../../helper";

const navItems: NavItemType[] = [
  { label: "Home", path: "#home", actived: true },
  {
    label: "Official Page",
    path: "https://charlieunicornai.eu",
    actived: false,
    blank: true,
  },
  { label: "Tokenomics", path: "#tokenomics", actived: false },
  { label: "Partners", path: "#partners", actived: false },
  { label: "Contact", path: "#contact", actived: false },
];

const Navbar = () => {
  const { open } = useAppKit();
  const { appkitConnected, appkitAddress, appkitBalance } = useAppkitWallet();

  return (
    <header className="w-full fixed top-0 left-0 p-4 bg-[#1C1C1C] border-b-[1px] border-[#444444] z-10 flex flex-col justify-center">
      <nav className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-20">
          <img src="./assets/logo.png" alt="Logo" className="w-20 h-auto" />
          <NavItemGroup items={navItems} />
        </div>
        <Button
          type="outline"
          label={
            appkitAddress
              ? formatAppkitAddress(appkitAddress)
              : "Connect Wallet"
          }
          icon={appkitConnected ? "mdi:user" : "mdi:wallet"}
          iconPosition="left"
          onClick={() => open()}
        />
      </nav>
    </header>
  );
};

export default Navbar;
