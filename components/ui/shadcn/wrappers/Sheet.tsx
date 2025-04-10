"use client";

import React, { FC, ReactNode } from "react";
import {
  Sheet as ShadcnSheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

interface IProps {
  trigger: ReactNode;
  children: ReactNode;
  closer?: ReactNode;
  title?: string;
  description?: string;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  top?: boolean;
}

const Sheet: FC<IProps> = (props) => {
  const { trigger, children, closer, title, description } = props;
  const { left, right, top, bottom } = props;

  const side = right ? "right" : top ? "top" : bottom ? "bottom" : "left";

  return (
    <ShadcnSheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        {children}

        <SheetFooter>
          <SheetClose asChild>{closer}</SheetClose>
        </SheetFooter>
      </SheetContent>
    </ShadcnSheet>
  );
};

export default Sheet;
