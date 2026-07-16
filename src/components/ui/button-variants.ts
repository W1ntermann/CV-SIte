import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-semibold tracking-wide transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white border border-transparent shadow-sm hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500",
        secondary:
          "bg-white text-blue-600 border border-blue-600/20 hover:bg-blue-50 shadow-sm focus-visible:ring-blue-300",
        ghost: "bg-transparent text-blue-600 hover:bg-blue-600/5",
      },
      size: {
        default: "px-6 py-3 text-base",
        sm: "px-3 py-1.5 text-sm",
        lg: "px-8 py-3.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export type ButtonVariantProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
};
