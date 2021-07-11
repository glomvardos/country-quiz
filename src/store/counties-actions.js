import { countriesActions } from './countries-slice'
import { loadingActions } from './loading-slice'

export const fetchCountries = () => {
  return async dispatch => {
    try {
      const responseEu = await fetch('https://restcountries.eu/rest/v2/region/europe')
      const responseAmerica = await fetch('https://restcountries.eu/rest/v2/region/americas')

      if (!responseEu.ok && !responseAmerica.ok) {
        throw new Error('Something went wrong.')
      }
      const dataEu = await responseEu.json()
      const dataAmerica = await responseAmerica.json()

      const data = [...dataEu, ...dataAmerica]

      dispatch(countriesActions.getCountries(data))
      dispatch(loadingActions.setIsNotLoading())
    } catch (err) {
      dispatch(loadingActions.setIsNotLoading())
    }
  }
}
