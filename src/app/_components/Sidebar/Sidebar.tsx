'use client';

import { useState } from 'react';
import { CgLogOut } from 'react-icons/cg';
import Image from 'next/image';
import Link from 'next/link';

import { NavLink } from '@/types';
import { navElements } from '@/data/NavElements';
import CustomIcon from '@/app/_components/Icon/CustomIcon';

function Sidebar() {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

	const handleSidebarOpen = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const renderLinks = (list: NavLink[]) => {
		return list.map((item) => (
			<Link
				key={crypto.randomUUID()}
				href={item.path}
				className={`sidebar__link ${sidebarOpen ? 'justify-start' : 'justify-center'}`}>
				<CustomIcon icon={item.icon} />
				{sidebarOpen && <span className='ms-6 text-white/80 text-lg font-light'>{item.text}</span>}
			</Link>
		));
	};

	return (
		<aside className={`sidebar ${sidebarOpen ? 'w-80' : 'w-32'}`}>
			<div className='sidebar__wrapper'>
				<div className={`sidebar__elements`}>
					<Link href='/' className='mx-auto'>
						{sidebarOpen ? (
							<Image src={'/images/financiera-logo.png'} alt='logo' width={220} height={100} />
						) : (
							<Image src={'/images/financiera-ico.png'} alt='logo' width={70} height={70} />
						)}
					</Link>

					{renderLinks(navElements)}
				</div>

				<button className={`sidebar__logout ${sidebarOpen ? 'w-full' : 'w-auto'}`} onClick={handleSidebarOpen}>
					<CustomIcon icon={CgLogOut} color='white' />
					{sidebarOpen && <span className='font-semibold text-lg text-nowrap'>Cerrar Sesión</span>}
				</button>
			</div>
			<button className='sidebar__button' onClick={handleSidebarOpen}>
				{sidebarOpen ? '<' : '>'}
			</button>
		</aside>
	);
}

export default Sidebar;
