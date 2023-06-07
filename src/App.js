import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage"
import NotFoundPage from "./Pages/NotFoundPage"

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;