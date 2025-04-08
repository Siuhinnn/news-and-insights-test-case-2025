import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-medium uppercase cursor-pointer tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background font-[var(--font-dm-serif-display)]";

    const variantClasses =
      variant === "filled"
        ? "bg-[var(--color-background)] text-[var(--color-icon)] hover:opacity-90"
        : "border border-[var(--color-background)] bg-transparent text-[var(--color-background)] hover:bg-[var(--color-background)] hover:text-[var(--color-icon)]";

    const combinedClasses = `${baseClasses} ${variantClasses} ${
      className || ""
    }`.trim();

    return (
      <button className={combinedClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
