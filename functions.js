const getProductsOfNormalQuality = (pProductList) => {
  return pProductList.filter((product) => product.quality === "Normal")
};

const getProductImageWithPngExtension = (pProductList) => {
  return pProductList.filter((product)=> product.productImage.includes("png"))
};

const getCalorieOfTheMostExpensiveProduct = (pProductList) => {
  return pProductList.sort((firstProduct, secondProduct) => secondProduct.price-firstProduct.price) [0].totalCalories;
};

const sortByExpirationDate = (pProductList) => {
  return pProductList
  .sort((obja,objb)=> Number(obja.expireDate-objb.expireDate))
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
