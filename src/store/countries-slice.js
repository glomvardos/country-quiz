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
      const allCountires = actions.payload
      const transformedCountriess = allCountires.map(country => ({
        name: country.name,
        capital: country.capital,
        flag: country.flag,
      }))
      const randomArray = shuffleArray(transformedCountriess)

      state.selectedCountries = shuffleArray(randomArray.slice(0, 4))
      state.countries = randomArray
    },
    arrayIndexHanlder(state) {
      state.countriesArrayIndex++
    },
    nextCountryHandler(state) {
      const copiedCountries = state.countries.filter(
        country => state.countries[state.countriesArrayIndex].name !== country.name
      )

      const randomCountries = shuffleArray(copiedCountries).slice(0, 3)
      const currentCounty = state.countries[state.countriesArrayIndex]
      const newSelectedCountries = shuffleArray([currentCounty, ...randomCountries])

      state.selectedCountries = newSelectedCountries
    },
  },
})

export const countriesActions = countriesSlice.actions

export default countriesSlice
