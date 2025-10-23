import { convertToSlug } from "./utils";

//get product
export const getProducts = (products, category, type, limit) => {
  category = category && category.toLowerCase() === "all" ? "" : category;
  const finalProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : products;
  if (type && type === "new") {
    const newProducts = finalProducts.filter((product) => product.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  } else {
    return (
      finalProducts &&
      finalProducts.slice(0, limit ? limit : finalProducts.length)
    );
  }
};

//get product by slug
export const getProductBySlug = (products, slug) => {
  return slug
    ? products.find(
        (product) => convertToSlug(product.name.toLowerCase()) === slug.toLowerCase()
      )
    : null;
};

//sort product
export const getProductBySort = (products, type, limit) => {
  function sortWithCondition(arr, value, reverse = false) {
    let num = reverse ? -1 : 1;
    return products.slice(0, limit ? limit : products.length).sort((a, b) => {
      if (a[value] < b[value]) {
        return -1 * num;
      }
      if (a[value] > b[value]) {
        return 1 * num;
      }
      return 0;
    });
  }
  if (!type || type === "default") {
    return products;
  } else if (type === "az") {
    return sortWithCondition(products, "name");
  } else if (type === "za") {
    return sortWithCondition(products, "name", true);
  } else if (type === "lowToHigh") {
    return sortWithCondition(products, "price");
  } else if (type === "highToLow") {
    return sortWithCondition(products, "price", true);
  } else {
    return products.slice(0, limit ? limit : products.length);
  }
};

//get product by price
export const getProductByPrice = (products, from, to, limit) => {
  if (from && !to) {
    return products.filter((p) => p.price > from);
  } else if (!from && to) {
    return products.filter((p) => p.price < to);
  } else if (!from && !to) {
    return products;
  } else {
    return products.filter((p) => p.price > from && p.price < to);
  }
};

//get product by brand
export const getProductByBrand = (products, brand) => {
  return brand
    ? products.filter((p) => p.brand.toLowerCase() === brand.toLowerCase())
    : products;
};

//get product by rate
export const getProductByRate = (products, rate) => {
  return rate
    ? products.filter((p) => p.rate.toLowerCase() === rate.toLowerCase())
    : products;
};

//get product by filter
export const getProductbyFilter = (
  products,
  sortType,
  category,
  from,
  to,
  brand,
  rate,
  limit
) => {
  // Filter products by category
  let filteredProducts = category
    ? getProducts(products, category)
    : [...products];

  // Filter products by price
  if (from || to) {
    filteredProducts = getProductByPrice(filteredProducts, from, to);
  }

  // Filter products by brand
  if (brand) {
    filteredProducts = getProductByBrand(filteredProducts, brand);
  }

  // Filter products by rate
  if (rate) {
    filteredProducts = getProductByRate(filteredProducts, rate);
  }

  // Sort products
  filteredProducts = getProductBySort(filteredProducts, sortType);

  // Products quantity return
  return filteredProducts.slice(0, limit || filteredProducts.length);
};