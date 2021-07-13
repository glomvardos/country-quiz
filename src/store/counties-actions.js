import { countriesActions } from './countries-slice'
import { loadingActions } from './loading-slice'

export const fetchCountries = () => {
  return async dispatch => {
    const urls = [
      'https://restcountries.eu/rest/v2/region/europe',
      'https://restcountries.eu/rest/v2/region/americas',
    ]

    const [countriesEu, countriesAmerica] = await Promise.all(
      urls.map(url =>
        fetch(url)
          .then(res => {
            if (!res.ok) throw new Error('Something went wrong!')
            return res.json()
          })
          .catch(err => dispatch(loadingActions.setIsNotLoading()))
      )
    )

    const data = [...countriesEu, ...countriesAmerica]

    dispatch(countriesActions.getCountries(data))
    dispatch(loadingActions.setIsNotLoading())
  }
}
