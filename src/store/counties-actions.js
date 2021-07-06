import { countriesActions } from './countries-slice'

export const fetchCountries = () => {
  return async dispatch => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()

    dispatch(countriesActions.getCountries(data))
  }
}
