import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productAPI } from "../../../services/api/product/product";

interface productItemState {
    productCode: string,
    productName: string,
    productColor: string,
    productPrice: number,
    productImage: string,
    availableSizes: {
        xs: boolean,
        s: boolean,
        m: boolean,
        l: boolean,
        xl: boolean
    },
    soldOut: boolean
} 

interface productState {
    loading: boolean,
    error: string | null,
    productItems: {
        data:  productItemState[]
    }
} 

const initialState: productState = {
  productItems: { data: [] as productItemState[]} ,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  productItemState[],          // return type
  void,               // argument type
  { rejectValue: string }
>(
  "product",
  async (_, { rejectWithValue }) => {
    try {
      const data = await productAPI();
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // pending
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // fulfilled
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productItems.data = action.payload;
      })

      // rejected
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export default productSlice.reducer;