import { NavLink } from '@/core/types';
import { CgNotes } from 'react-icons/cg';
import { FaRegEdit } from 'react-icons/fa';

export const navElements: NavLink[] = [
	{
		text: 'Requerimientos',
		path: '/requirements',
		icon: CgNotes,
	},
	{
		text: 'Personalizacion',
		path: '/customize',
		icon: FaRegEdit,
	},
];
