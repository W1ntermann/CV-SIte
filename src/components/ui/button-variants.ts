import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] active:bg-blue-800 focus-visible:ring-blue-500",
        secondary:
          "bg-white text-blue-600 border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-blue-300",
        outline:
          "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-blue-500",
        ghost:
          "bg-transparent text-blue-600 hover:bg-blue-600/10 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-blue-400",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-white/50",
        gradient:
          "relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-blue-500 after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 overflow-hidden",
        link:
          "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-400 p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-3 text-base",
        sm: "h-9 px-4 py-2 text-sm rounded-md",
        lg: "h-12 px-8 py-3.5 text-lg rounded-xl",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export type ButtonVariantProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "gradient" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};
