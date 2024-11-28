'use client';

import { Company } from '@/core/interfaces/Company';
import { formatCurrency } from '@/utils/formatCurrency';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/shadcn/button';
import { ArrowUpDown } from 'lucide-react';

export const columns: ColumnDef<Company>[] = [
	{
		accessorKey: 'NombreComercial',
		header: ({ column }) => {
			return (
				<Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Nombre Comercial
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			);
		},
	},
	{ accessorKey: 'NombreLegal', header: 'Nombre Legal' },
	{
		accessorKey: 'CEO',
		header: 'CEO',
	},
	{
		accessorKey: 'FechaCreacion',
		header: ({ column }) => {
			return (
				<Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Fecha de creacion
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			);
		},
		cell: ({ row }) => {
			const value = row.getValue('FechaCreacion');

			return <span className='text-center block'>{value}</span>;
		},
	},
	{ accessorKey: 'PrincipalProducto', header: 'Producto principal' },
	{
		accessorKey: 'IngresoAnual',
		header: ({ column }) => {
			return (
				<Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Ingreso anual
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			);
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('IngresoAnual'));
			const formatted = formatCurrency(amount);

			return <div className='text-right mr-3'>{formatted}</div>;
		},
	},
	{
		accessorKey: 'CantidadEmpleados',
		header: 'Cantidad de empleados',
	},
	{
		accessorKey: 'Pais',
		header: 'Pais',
	},
];
