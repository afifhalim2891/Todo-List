import { ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: ReactNode;
  addStyle?: string;
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  variant,
  children,
  addStyle,
  ...props
}: ButtonProps) {
  let style: string;

  const baseStyle = `rounded-lg text-white text-sm cursor-pointer px-7 py-3 ${addStyle} `;

  const primaryStyle = "bg-amber-500 hover:bg-amber-600";
  const secondaryStyle = "bg-stone-500 hover:bg-stone-600";

  if (variant === "primary") {
    style = baseStyle + primaryStyle;
  } else {
    style = baseStyle + secondaryStyle;
  }

  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
}
