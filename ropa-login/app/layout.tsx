import type {Metadata} from 'next';
import { Inter, Noto_Sans_Thai } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const notoSansThai = Noto_Sans_Thai({ subsets: ['thai'], variable: '--font-thai', weight: ['400', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Login Interfaces',
  description: 'Frontend implementations of login screens',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="th" className={`${inter.variable} ${notoSansThai.variable}`}>
      <body className="font-thai antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
