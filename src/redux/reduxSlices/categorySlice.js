import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getArticles = createAsyncThunk("articles/getArticlesStatus", async(params, {dispatch}) => {
   const {category, searchQuery, sort} = params;
   try {
      const { data } = await axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/p22_articles?${searchQuery === "" ? `category=${category}` : ""}&${searchQuery ? `&search=${searchQuery}` : ""}`);
      let dataPagination = Array((Math.ceil(data.length/8))).fill(0).map((num, i) => num = i + 1);
      dispatch(setlistPagination(dataPagination));
      return data
   } catch (e) {
      alert(e.response.data.message)   
   }
})

const initialState = {
   articles: [],
   articlesFromLS: [],
   category: 0,
   sort: 0,
   listPagination: [],
   paginationNumber: 1,
   searchQuery: "",
   searchValue: "",
   // like: false,
   // favorite: false,
   // view: 0,
};

const dataCategorySlice = createSlice({
   name: "categoryData",
   initialState,

   reducers: {
      setCategory: (state, action) => {
         state.category = action.payload;
      },
      setSort: (state, action) => {
         state.sort = action.payload;
      },
      setlistPagination: (state, action) => {
         state.listPagination = action.payload;
      },
      setPaginationNumber: (state, action) => {
         state.paginationNumber = action.payload;
      },
      setSearchQuery: (state, action) => {
         state.searchQuery = action.payload;
      },
      setSearchValue: (state, action) => {
         state.searchValue = action.payload;
      },
      setArticlesFromLS: (state, action) => {
         state.articlesFromLS = action.payload;
      },
   },
   extraReducers: {
   [getArticles.pending]: (state) => {
      state.articles = [];
      state.status = "Loading";
   },
   [getArticles.fulfilled]: (state, action) => {
      state.articles = action.payload;
      state.status = "Success";
      const articlesToLS = JSON.stringify(state.articles);
      localStorage.setItem("articlesLS", articlesToLS);
   },
   [getArticles.rejected]: (state) => {
      state.articles = [];
      state.status = "Error";
   },
   }
});

export const { setCategory, setSort, setlistPagination, setPaginationNumber, setSearchQuery, setSearchValue, setArticlesFromLS } = dataCategorySlice.actions;

export default dataCategorySlice.reducer;