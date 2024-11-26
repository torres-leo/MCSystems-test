import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

import Sidebar from '@/app/_components/Sidebar/Sidebar';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'MCSystems Test - Leo Torres',
	description: 'Test App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className='flex '>
					<Sidebar />
					<main className='pt-5 px-5'>{children}</main>
				</div>
			</body>
		</html>
	);
}
