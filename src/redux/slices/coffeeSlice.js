import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hook/http.hook';


const coffeesAdapter = createEntityAdapter();

const initialState = coffeesAdapter.getInitialState({
    coffeesLoadingStatus: 'idle',
    coffees: []
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
        // coffeesSelector: (state, action) => {
        //     state.coffees = action.payload
        // }
        // heroCreated: (state, action) => {
        //             coffeesAdapter.addOne(state, action.payload);
        //         },
        // heroDeleted: (state, action) => {
        //             coffeesAdapter.removeOne(state, action.payload);
        //         }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffees.pending, state => {state.coffeesLoadingStatus = 'loading'})
            .addCase(fetchCoffees.fulfilled, (state, action) => {
                state.coffeesLoadingStatus = 'idle';
                state.coffees = action.payload;
                // coffeesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCoffees.rejected, state => {state.coffeesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = coffeesSlice;

export default reducer;

const {selectAll} = coffeesAdapter.getSelectors(state => state.coffees);

export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    selectAll,
    (filter, heroes) => {
        if (filter === 'all') {
            return heroes;
        } else {
            return heroes.filter(item => item.element === filter)
        }
    }
);

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} = actions