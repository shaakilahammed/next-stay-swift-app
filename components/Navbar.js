import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <Image
                    src="/stayswift.svg"
                    alt="Stay Swift Logo"
                    width={200}
                    height={200}
                />
            </Link>

            <ul>
                <li>
                    <Link href="/hotels">Recommended Places</Link>
                </li>

                <li>
                    <Link href="/about-us">About Us</Link>
                </li>

                <li>
                    <Link href="/contact-us">Contact us</Link>
                </li>

                <li>
                    <Link href="/bookings">Bookings</Link>
                </li>

                <li>
                    <Link href="/login" className="login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
