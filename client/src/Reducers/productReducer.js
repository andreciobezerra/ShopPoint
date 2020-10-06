import * as productConstants from "../Constants/productConstants";

export const listProducts = (state = { products: [] }, action) => {
  switch (action.type) {
    case productConstants.PRODUCTLIST_FETCH_START:
      return {
        loading: true,
        products: [],
      };
    case productConstants.PRODUCTLIST_FETCH_SUCCESS:
      return {
        products: action.payload.productList,
        count: action.payload.totalProduct,
        success: true,
      };
    case productConstants.PRODUCTLIST_FETCH_ERROR:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export const Product = (state = { product: {} }, action) => {
  switch (action.type) {
    case productConstants.PRODUCT_FETCH_START:
      return {
        loading: true,
        product: [],
      };
    case productConstants.PRODUCT_FETCH_SUCCESS:
      return {
        product: action.payload,
        success: true,
      };
    case productConstants.PRODUCT_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};