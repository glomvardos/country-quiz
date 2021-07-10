import { createSlice } from '@reduxjs/toolkit'
import { shuffleArray } from '../helpers/shuffleArray'

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    selectedCountries: [],
    countriesArrayIndex: 0,
  },
  reducers: {
    getCountries(state, actions) {
      const allCountries = actions.payload
      const transformedCountries = allCountries.map(country => ({
        name: country.name,
        capital: country.capital,
        flag: country.flag,
      }))
      const randomCountries = shuffleArray(transformedCountries)

      state.selectedCountries = shuffleArray(randomCountries.slice(0, 4))
      state.countries = randomCountries
    },
    arrayIndexHanlder(state) {
      state.countriesArrayIndex++
    },
    nextCountryHandler(state) {
      const currentCountry = state.countries[state.countriesArrayIndex]
      const copiedCountries = state.countries.filter(
        country => currentCountry.name !== country.name
      )

      const randomCountries = shuffleArray(copiedCountries).slice(0, 3)
      const newSelectedCountries = shuffleArray([currentCountry, ...randomCountries])

      state.selectedCountries = newSelectedCountries
    },
  },
})

export const countriesActions = countriesSlice.actions

export default countriesSlice
