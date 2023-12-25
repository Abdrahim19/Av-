import { navlinks } from "../../data/navlinks"
import { IoIosCloseCircleOutline } from "react-icons/io";


const Mobilemenu = ({Isblock , onClick}:{Isblock:boolean , onClick:() => void}) => {
  return Isblock ? (
    <>
    <div className="mask" style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} ></div>
    <ul className={Isblock ? 'visible  h-100 fixed-top w-50 bg-light d-flex flex-column shadow-3 py-2 px-3' : 'invisible' } style={{padding:'1rem', borderRadius:'1rem' , backgroundColor:'white'}}>
      <div className="d-flex align-items-center justify-content-between mb-3">
      <h1 className='user-select-none'>Qui est AVE?</h1>
        <IoIosCloseCircleOutline onClick={onClick} size={50} />
      </div>
      {navlinks.map((ele) => (
        <li className="btn btn-outline-dark m-0 p-2 text-center mt-4">{ele.name}</li>
      ))}
</ul>
    </>
  ) : false
} 

export default Mobilemenu