export function dateConversion(input) {
  const date = new Date(input.replace(" ", "T"));
  const formatted = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
  return formatted.replace(" à ", " - ").replace(":", "h");
}

export function timeConversion(input) {
  return new Intl.DateTimeFormat("fr-FR", { timeStyle: "short" })
    .format(new Date(`01/01/2000 ${input}`))
    .replace(":", "h");
}
