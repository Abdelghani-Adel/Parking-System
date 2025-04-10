"use client";

import { PopoverContent, PopoverTrigger, Popover as ShadcnPopover } from "../ui/popover";
import { FC, ReactNode } from "react";

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  contentClassName?: string;
}

const Popover: FC<PopoverProps> = (props) => {
  const { trigger, children, contentClassName } = props;

  return (
    <ShadcnPopover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>

      <PopoverContent className={`w-80 p-3 ${contentClassName}`}>{children}</PopoverContent>
    </ShadcnPopover>
  );
};

export default Popover;
