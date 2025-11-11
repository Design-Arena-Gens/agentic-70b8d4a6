import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Peta Konsep Flora-Fauna Indonesia',
  description: 'Sebaran flora dan fauna Indonesia per zona Barat, Tengah, Timur beserta spesies khas.',
};

export const viewport: Viewport = {
  themeColor: '#14532d',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="header">
          <div className="container">
            <h1>Peta Konsep Flora?Fauna Indonesia</h1>
            <nav>
              <a href="#peta-konsep">Peta Konsep</a>
              <a href="#sebaran-fauna">Sebaran Fauna</a>
              <a href="#sebaran-flora">Sebaran Flora</a>
              <a href="#fauna-khas">Fauna Khas</a>
              <a href="#flora-khas">Flora Khas</a>
              <a href="#peta-zona">Gambar Peta</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">? {new Date().getFullYear()} Nusantara Biodiversitas</footer>
      </body>
    </html>
  );
}
