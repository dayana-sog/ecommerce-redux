export const { format: formatPrice } = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});
