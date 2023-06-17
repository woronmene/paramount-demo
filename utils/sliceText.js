export function sliceText(text) {
  if (text.length > 18) {
    return text.slice(0, 18) + "...";
  }
  return text;
}
