import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/image/logo/logo.png';

const Header = () => {
    return (
        <div className='headerfix'>
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href="/" passHref className="navbar-brand">
                        <Image 
                            src={logo} 
                            className="logo rounded" 
                            alt="logo" 
                            width={150} 
                            height={50} 
                        />
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" passHref className="nav-link  fw-bold" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#about" passHref className="nav-link fw-bold">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#games" passHref className="nav-link fw-bold">How To Play</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#contact" passHref className="nav-link fw-bold">Contact Us</Link>
                            </li>
                            <li className="nav-item download_btn">
                                <Link href="/comming" passHref className="nav-link fw-bold">Download APK</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </div>
    );
};

export default Header;
