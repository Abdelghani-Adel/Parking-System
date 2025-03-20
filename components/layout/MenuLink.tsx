"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";

interface IProps {
  href: string;
  children: ReactNode;
}

const MenuLink: FC<IProps> = (props) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link
      href={props.href}
      className={clsx("flex items-center gap-2 w-full p-3 rounded-lg relative", {
        "text-grey bg-grey-lighter dark:bg-grey": isActive,
        "text-grey-lighter dark:text-grey-light hover:bg-grey-lighter hover:text-grey": !isActive,
      })}
    >
      {props.children}
    </Link>
  );
};

export default MenuLink;
