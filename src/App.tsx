import { ThemeProvider } from "styled-components"
import { theme } from "./AppStyles"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <MainPage />
    </ThemeProvider>
  )
}

export default App
