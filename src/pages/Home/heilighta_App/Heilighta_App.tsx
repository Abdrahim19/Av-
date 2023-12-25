import  "./Heilighta_App.css";
const Heilighta_App = () => {
  return (
    <div className="Heilighta_container w-100">
      <section  className="d-flex align-items-center gap-3">
  <img src="/iPhone.png" alt="iPhone" className="app_img order-2 order-xl-1 col-xl-6" />
<div className='col-xl-6 flex flex-col text-center justify-content-center order-1 order-xl-2'>

            <img src="/small_logo.png" className="small_logo" alt="small_logo" />
            <p className="pargraf text-right ">Dans un monde où la distance entre les individus semble parfois grandissante, 
                AVE émerge comme une bouffée d'air frais, rapprochant les gens au sein de leurs
                 communautés locales. Notre application est conçue pour faciliter l'entraide et le
                  partage de services entre voisins, renforçant ainsi les liens communautaires et créant
                   un sentiment 
                d'appartenance et de solidarité.</p>
</div>
</section>
    </div>
  )
}
 
export default Heilighta_App