export default function currency(val: number) {
  return Intl.NumberFormat().format(val);
}