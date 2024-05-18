import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import Logout from './auth/Logout';

const Navbar = async ({ menu }) => {
    const session = await auth();
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

            {menu && (
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
                        {session?.user ? (
                            <div>
                                <span>{session?.user?.name}</span> | <Logout />
                            </div>
                        ) : (
                            <Link href="/login" className="login">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
