import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '@/core/interfaces/Company';

interface CountryState {
	countryValue?: Country | undefined;
}

const initialState: CountryState = {
	countryValue: undefined,
};

const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		setCountry: (state, action: PayloadAction<Country | undefined>) => {
			state.countryValue = action.payload;
		},
		resetCountry: (state) => {
			state.countryValue = undefined;
		},
	},
});

export const { setCountry, resetCountry } = countrySlice.actions;

export default countrySlice.reducer;
