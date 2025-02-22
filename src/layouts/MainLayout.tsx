import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router"

function MainLayout() {
  return (
    <>
        <Header/>
        <div className="container mx-auto p-4">
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default MainLayout
