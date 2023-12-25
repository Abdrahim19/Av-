import './hero.css'
const Hero = () => {
  return (
    <>
        <h1 className="hero_titel text-center mb-4">
          Service N1, leader incontesté dans la fourniture
de prestations de services de haute qualité en Suisse.</h1>
    <div  style={{gap:'15rem'}} className='d-flex flex-column justify-content-between'>
<section className="hero_container d-flex flex-column-reverse justify-content-between flex-xl-row 
align-items-xl-center gap-3">
  <div className='heroimg_container justify-content-start col-xl-5'>
<img  src="/téléchargement.png" alt="hero_img" className="hero_img" />
  </div>
<div className='col-xl-7 flex flex-col justify-content-center '>
  <h1 className="second_titel">Prestations de services et location de  matériel</h1>
  <p className="second_discrption">4 millions d’habitants et professionnels partout en  France</p>
  <div className="d-flex w-100 flex-wrap align-items-center gap-4 justify-content-center">
    <button className="outline_button">Connexion</button>
    <button className="outline_button">Inscription</button>
  </div>
</div>
</section>
    </div>
    </>
  )
} 

export default Hero