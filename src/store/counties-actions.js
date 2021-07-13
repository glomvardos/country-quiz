import { countriesActions } from './countries-slice'
import { loadingActions } from './loading-slice'

export const fetchCountries = () => {
  return async dispatch => {
    const urls = [
      'https://restcountries.eu/rest/v2/region/europe',
      'https://restcountries.eu/rest/v2/region/americas',
    ]

    try {
      const [countriesEu, countriesAmerica] = await Promise.all(
        urls.map(async url => {
          const response = await fetch(url)
          if (!response.ok) throw new Error('Something went wrong!')
          return response.json()
        })
      )
      const data = [...countriesEu, ...countriesAmerica]
      dispatch(countriesActions.getCountries(data))
      dispatch(loadingActions.setIsNotLoading())
    } catch (err) {
      dispatch(loadingActions.setIsNotLoading())
    }
  }
}
