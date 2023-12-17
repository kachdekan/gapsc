export const joinClasses = (...classes: (string | false | undefined)[]) =>
  classes
    .filter((c) => !!c)
    .join(" ")
    .replace(/ +/g, " ");
