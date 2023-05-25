import {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Header from './components/header'
import Dashboard from './pages/Dashboard'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './components/sidebar'
import OffCanvas from './components/offcanvas'

function App() {
  const [show, setShow] = useState(false);
  const [routeList] = useState([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    }
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header handleShow={handleShow}/>
      <Row>
        <Col xl={2} className='d-none d-xl-block'>
          <OffCanvas show={show} handleClose={handleClose}/>
          <Sidebar/>
        </Col>
        <Col xl={10} md={12}>
          <Routes>
            {routeList.map((rt, index) => <Route key={index} path={rt.path} element={rt.element}/>)}
          </Routes>
        </Col>
      </Row>
      
    </>
  )
}

export default App
