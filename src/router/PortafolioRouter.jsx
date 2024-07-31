import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages"

export const PortafolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> }/>
      <Route path="/*" element={ <Navigate to={"/"} />}/>
    </Routes>
  )
}