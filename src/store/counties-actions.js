import { countriesActions } from './countries-slice'
import { loadingActions } from './loading-slice'

export const fetchCountries = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://restcountries.eu/rest/v2/region/europe')

      if (!response.ok) {
        throw new Error('Something went wrong.')
      }
      const data = await response.json()

      dispatch(countriesActions.getCountries(data))
      dispatch(loadingActions.setIsNotLoading())
    } catch (err) {
      dispatch(loadingActions.setIsNotLoading())
    }
  }
}
