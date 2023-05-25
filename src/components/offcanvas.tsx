
import {useState} from 'react'
import './offcanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { AiFillDashboard } from 'react-icons/ai';
import { BsQuestionSquareFill } from 'react-icons/bs';
import { MdQuestionAnswer } from 'react-icons/md';
import { IoNewspaper } from 'react-icons/io5';
import { GiFoldedPaper } from 'react-icons/gi';
import { SiCoursera } from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa'

type OffCanvasProps = {
    show: Boolean,
    handleClose: () => void
}

function OffCanvas({show, handleClose}:OffCanvasProps){
  const [activeMenu, setActiveMenu] = useState(0);
  const [routeList] = useState([
      {
          label: 'Dashboard',
          to: '/dashboard',
          icon: <AiFillDashboard/>
      },
      {
          label: 'Question Paper',
          to: '/',
          icon: <BsQuestionSquareFill/>
      },
      {
          label: 'Guess Paper',
          to: '/',
          icon: <MdQuestionAnswer/>
      },
      {
          label: 'Paper',
          to: '/',
          icon: <IoNewspaper/>
      },
      {
          label: 'Semester/Year',
          to: '/',
          icon: <GiFoldedPaper/>
      },
      {
          label: 'Course',
          to: '/',
          icon: <SiCoursera/>
      },
      {
          label: 'University',
          to: '/',
          icon: <FaUniversity/>
      }
  ]);
  type SidebarActiveProp = {
      index: number
  }
  const handleActive = ({index}:SidebarActiveProp) => {
      setActiveMenu(index);
      handleClose();
  }
  return ( 
    <>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navbar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='nav-offcanvas'>
          <ul >
              {routeList.map((rt, index) => <li key={index} className={index === activeMenu ? "active" : ""} onClick={ () => handleActive({index})}><Link to={rt.to}>{rt.icon}&#10240;<span>{rt.label}</span></Link></li>)}
          </ul> 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvas;