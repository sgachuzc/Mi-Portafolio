import '../styles/ui/footer.css'

export const Footer = () => {

  const actualYear = new Date().getFullYear()

  return (
    <footer>
       &copy; { actualYear } Copyright: Sergio Gachúz
    </footer>
  )
}
