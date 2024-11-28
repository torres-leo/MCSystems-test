import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

import { TanstackProvider } from '@/core/providers/tanstack.provider';
import { StoreProvider } from '@/core/providers/store.provider';
import Sidebar from '@/app/_components/ui/Sidebar';
import ToastNotify from './_components/ui/ToastNotify';

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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
				<StoreProvider>
					<div className='flex '>
						<Sidebar />
						<main className='pt-10 ps-10 pe-5 w-full overflow-hidden'>
							<TanstackProvider>{children}</TanstackProvider>
						</main>
						<ToastNotify />
					</div>
				</StoreProvider>
			</body>
		</html>
	);
}
