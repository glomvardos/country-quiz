import { useSelector } from 'react-redux'
import Layout from './containers/Layout/Layout'
import QuizContent from './containers/QuizContent/QuizContent'
import Results from './containers/Results/Results'
import Footer from './components/Footer/Footer'

const App = () => {
  const showResults = useSelector(state => state.quiz.showResults)

  return (
    <Layout>
      {!showResults && <QuizContent />}
      {showResults && <Results />}
      <Footer />
    </Layout>
  )
}

export default App
