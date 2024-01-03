import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "@tanstack/react-router";
import clsx from "clsx";

type LinkProps = {
  asButton?: boolean;
} & RouterLinkProps;

export function Link({ asButton, className, ...otherProps }: LinkProps) {
  return (
    <RouterLink
      className={clsx(
        asButton &&
          "inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600",
        className,
      )}
      {...otherProps}
    />
  );
}
