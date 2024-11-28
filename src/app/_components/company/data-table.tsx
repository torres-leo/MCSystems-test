'use client';

import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/_components/ui/shadcn/table';
import { Button } from '../ui/shadcn/button';
import { useState } from 'react';
import FilterInput from './FilterInput';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
		},
	});

	return (
		<>
			<div>
				<h4 className='text-2xl font-semibold mb-4'>Filtrar datos:</h4>

				<div className='flex items-center gap-x-6 mb-4'>
					<FilterInput
						placeholder='Nombre comercial'
						value={(table.getColumn('NombreComercial')?.getFilterValue() as string) ?? ''}
						onChange={(event) => table.getColumn('NombreComercial')?.setFilterValue(event.target.value)}
						className='max-w-xs'
					/>

					<FilterInput
						placeholder='CEO'
						value={(table.getColumn('CEO')?.getFilterValue() as string) ?? ''}
						onChange={(event) => table.getColumn('CEO')?.setFilterValue(event.target.value)}
						className='max-w-xs'
					/>
				</div>
			</div>

			<div className='rounded-md border'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className='h-24 text-center'>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<div className='flex items-center justify-center space-x-2 py-4'>
				<Button variant='custom' size='sm' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
					Previous
				</Button>

				<Button variant='custom' size='sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					Next
				</Button>
			</div>
		</>
	);
}
