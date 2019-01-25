export const currency = money => {
  if (money > 10000) {
    return `${(money / 10000).toFixed(2)}万`
  } else {
    return money
  }
}

export const formatCurrency = currency => {
  return currency.toFixed(2)
}
