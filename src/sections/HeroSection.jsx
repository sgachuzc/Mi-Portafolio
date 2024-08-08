import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed'; 
import '../styles/sections/hero.css'

export const HeroSection = () => { 
  const textToType = [
    "Desarrollador Web",
    "Ing. en Sistemas Computacionales",
  ]
  return (
    <section id='hero'>
      <span>Hola🫡, soy</span>
      <h1>Sergio<br />Gachúz</h1>
      <ReactTyped strings={ textToType } typeSpeed={ 40 } backSpeed={ 30 } />
      <div className="section-links">
        <Link className='download-cv' target='_blank' to={'../../public/Curriculum.pdf'} download>
          Descargar CV 
          <figure>
            <img src={'/download.svg'} alt="" />
          </figure>
        </Link>
      </div>
    </section>
  )
}
