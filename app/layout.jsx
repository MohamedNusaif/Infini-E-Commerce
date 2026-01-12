import './globals.css';

export const metadata = {
    title: 'Infini',
    description: 'Welcome to Infini',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}