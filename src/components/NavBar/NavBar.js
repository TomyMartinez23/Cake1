import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar(props) {

    //console.log(props)
    const pages = [
    {
        title:'Home',
        url: '/'
    }, 
    {
        title: 'Productos',
        url: '/productos'
    },
    {
        title: 'Contacto',
        url: '/contacto'
    }]
    return(
        //JSX
        <header className='main-header'>
            <div className='container-logo'>
                <img src="../Logo2.png" className="img-header"/>
            </div>
            <ul className='navbar'>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/Tortas'}>Tortas</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/Tartas'}>Tartas</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/Otros'}>Otros</Link>
                        </Button>     
                    </li>
                {pages.map((page) => {
                    return(
                        <li>
                            <Button className="custom-btn" variant="contained">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                    )
                })}

            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar