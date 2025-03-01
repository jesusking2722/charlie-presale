import React, { FC } from "react";

export type NavItemType = {
  label: string;
  path: string;
  actived: boolean;
  blank?: boolean;
};

interface NavItemGroupProps {
  items: NavItemType[];
}

const NavItemGroup: FC<NavItemGroupProps> = ({ items }) => {
  return (
    <ul className="flex flex-row items-center gap-10">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.path}
            target={item.blank ? "_blank" : ""}
            rel={item.blank ? "noopener noreferrer" : ""}
            className={`${item.actived ? "gradient-text" : "text-white"}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItemGroup;
