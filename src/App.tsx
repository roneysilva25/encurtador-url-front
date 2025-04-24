import { Provider } from "./components/ui/provider"
import { Header } from "./components/ui/header"
import { Footer } from "./components/ui/footer"
import { Router } from "./routes"

function App() {
  return (
    <Provider>
      <Header />
        <Router />
      <Footer />
    </Provider>
  )
}

export default App
