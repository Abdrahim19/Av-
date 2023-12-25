import './hero/hero.css'
const Hero = () => {
  return (
    <div>
        <h1 className="hero_titel text-center">
          Service N1, leader incontesté dans la fourniture <br />
de prestations de services de haute qualité en Suisse.</h1>
<section  className="row align-items-center   gap-3">
<img  src="/peinture_noire.png" alt="hero_img" className="hero_img order-2 order-lg-1 col-lg-6" />
<div className='col-lg-6 flex flex-col justify-content-center gap-4 order-1 order-lg-2'>
  <h1 className="second_titel">Prestations de <br /> services et location de <br /> matériel</h1>
  <p className="second_discrption">4 millions d’habitants et professionnels partout en <br /> France</p>
  <div className="d-flex w-100 flex-wrap align-items-center gap-4 justify-content-center">
    <button className="outline_button">Connexion</button>
    <button className="outline_button">Inscription</button>
  </div>
</div>
</section>
    </div>
  )
} 

export default Hero