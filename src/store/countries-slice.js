import { createSlice } from '@reduxjs/toolkit'

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
  },
  reducers: {
    getCountries(state, actions) {
      const allCountires = actions.payload
      const transformedCountires = allCountires.map(country => ({
        name: country.name,
        capital: country.capital,
        flag: country.flag,
      }))

      state.countries = transformedCountires
    },
  },
})

export const countriesActions = countriesSlice.actions

export default countriesSlice
