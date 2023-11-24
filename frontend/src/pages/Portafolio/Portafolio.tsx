import Footer from "../../layout/Portafolio/Footer/Footer"
import Header from "../../layout/Portafolio/Header/Header"
import Main from "../../layout/Portafolio/Main/Main"
import Nav from "../../layout/Portafolio/Nav/Nav"

function Portafolio() {


  return (
    <div className="overflow-y-scroll h-screen snap-mandatory snap-y">
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Portafolio