import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Coins from "./pages/Coins"
import News from "./pages/News"
import NotFoundPage from "./pages/NotFoundPage"
import SingleCoin from "./components/SingleCoin"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="coin" element={<Coins />} />
        <Route path="coin/:id" element={<SingleCoin />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
