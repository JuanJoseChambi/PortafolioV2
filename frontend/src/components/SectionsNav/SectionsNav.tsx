
interface childrneProp {
    children: string
}

function SectionsNav({children} : childrneProp) {
  return (
    <li className="cursor-pointer hover:text-white-light transition-colors duration-300">
        {children}
    </li>
  )
}

export default SectionsNav