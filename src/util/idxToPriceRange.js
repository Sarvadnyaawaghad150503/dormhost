export const arrPriceRanges = [
    "0-5000",
    "5000-10000",
    "10000-20000",
    "20000-30000",
    "30000-500000"
]

export const priceRangeToIndex = (priceRange) => {
   const index = arrPriceRanges.findIndex(priceRg => priceRg === priceRange)

   return index
}