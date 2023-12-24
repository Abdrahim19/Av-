import { navlinks } from "../../data/navlinks"

const Mobilemenu = ({Isblock}:{Isblock:boolean}) => {
  return Isblock ? (
    
    <div className="mobil_menu" style={{padding:'1rem', borderRadius:'1rem' , backgroundColor:'white'}}>
    <ul className="bg-light d-flex flex-column shadow-3 py-2 px-3">
      {navlinks.map((ele) => (
        <li className="btn btn-link btn-block m-0 p-2 text-start text-dark">{ele.name}</li>
      ))}
    </ul>
</div>
  ) : false
}

export default Mobilemenu