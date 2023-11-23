import Header from "../../layout/Portafolio/Header/Header"
import Main from "../../layout/Portafolio/Main/Main"
import Nav from "../../layout/Portafolio/Nav/Nav"

function Portafolio() {
  return (
    <main className="overflow-y-scroll h-screen snap-mandatory snap-y ">
      <Nav/>
      <Header/>
      <Main/>
    </main>
  )
}

export default Portafolio