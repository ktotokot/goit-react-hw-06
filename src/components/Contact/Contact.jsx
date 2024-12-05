import css from './Contact.module.css';
import { CiUser } from "react-icons/ci";


const Contact = ({name, number, id, deleteContact}) => {
  return (
    <><div className={css.contact}><p>
      <CiUser />
      {name}</p>
    <p>{number}</p>
    </div>
    <button type='button' className={css.deleteBtn} onClick={()=>deleteContact(id)}>Delete</button>
    </>
  )
}

export default Contact