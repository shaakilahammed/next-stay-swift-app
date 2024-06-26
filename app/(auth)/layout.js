import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Stay Swift - Home',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar menu={false} />
                <main>{children}</main>
            </body>
        </html>
    );
}
