import { Link } from 'react-router-dom'
import {Container} from '../index'
function Header() {
    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            Logo
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        <li>
                            <button
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                            >Home</button>
                        </li>
                        <li>
                            <button
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                            >Contact</button>
                        </li>
                        <li>
                            <button
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                            >About Us</button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header