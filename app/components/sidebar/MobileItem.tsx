"use client";

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProp {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProp> = ({
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `
        group
        flex
        gap-x-3
        text-sm
        leading-6
        font-semibold
        w-full
        justify-center
        p-4
        text-gray-500
        hover:text-black
        hover:bg-gray-100
    `,
        active && "bg-gray-100 text-gray-950"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
