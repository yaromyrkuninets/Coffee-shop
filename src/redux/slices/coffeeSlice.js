import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hook/http.hook';

const coffeesAdapter = createEntityAdapter();

const initialState = coffeesAdapter.getInitialState({
    coffeesLoadingStatus: 'idle',
    coffees: [],
    filteredCoffees: [],
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
})

export const fetchCoffees = createAsyncThunk(
    'coffees/fetchCoffees', 
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/coffees")
    }
);

const coffeesSlice = createSlice({
    name: 'coffees',
    initialState,
    reducers: {
        filteredCoffeesByName: (state, action) => {
			state.coffees = state.filteredCoffees.filter((coffee) =>
                coffee.name.toLowerCase().includes(action.payload.toLowerCase())
			);
		},

        filteredCoffeesByCoutry: (state, action) => {
			state.coffees = state.filteredCoffees.filter((coffee) =>
                coffee.country === action.payload
			);
		},

        reset: (state) => {
            state.coffees = state.filteredCoffees
        },

        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }

            else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => 
            total + Number(item.price) * Number(item.quantity),0);

            console.log(state.totalQuantity);
            console.log(state.cartItems);
            console.log(newItem);
        },

        deleteItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item) => 
            total + Number(item.price) * Number(item.quantity),0);
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffees.pending, state => {state.coffeesLoadingStatus = 'loading'})
            .addCase(fetchCoffees.fulfilled, (state, action) => {
                state.coffeesLoadingStatus = 'idle';
                state.coffees = action.payload;
                state.filteredCoffees = action.payload;
                coffeesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCoffees.rejected, state => {state.coffeesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = coffeesSlice;

export default reducer;

export const {
    filteredCoffeesByName,
    filteredCoffeesByCoutry,
    reset,
    addItem,
    deleteItem
} = actions