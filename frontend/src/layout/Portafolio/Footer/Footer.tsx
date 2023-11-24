import { useContext, useEffect, useRef } from "react"
import ContextSharedRef from "../../../utils/Contexts/ContextSharedRef"
function Footer() {
  const footerRef = useRef<HTMLHeadingElement | null>(null)

  const context = useContext(ContextSharedRef);

  if (!context) {
    return null
  }
  const { setLine } = context
  

  useEffect(() => {
    console.log(setLine);
    
    if (footerRef.current) {
      setLine(true)
    }
    return () => {
      setLine(false)
    }
  }, [footerRef.current])
  
  return (
    <footer>
      <section className="area h-screen snap-center" ref={footerRef}>
        <article className="text-white">Hola Este es el Footer</article>
      </section>
    </footer>
  )
}

export default Footer