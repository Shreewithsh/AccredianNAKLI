import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Accredian - Career Potential Unlocked',
  description: 'Enterprise program clone for Full Stack Intern Assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning extension se hone wale errors ko rokta hai */}
      <body 
        className={inter.className} 
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}