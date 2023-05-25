import { Nunito_Sans } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Get busybusy',
  description: 'Welcome to busybusy.',
};
const nunito = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--nunito-font',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased bg-busybusy-900 ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
