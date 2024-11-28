'use client';

import { getCompanies } from '@/core/lib/company';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { DataTable } from './_components/company/data-table';
import { columns } from './_components/company/columns';
import { Country } from '@/core/interfaces/Company';
import { Input } from './_components/ui/shadcn/input';
import { Button } from './_components/ui/shadcn/button';

export default function Home() {
	const [country, setCountry] = useState<string | undefined>();

	const { data, isLoading, error } = useQuery({
		queryKey: ['companies'],
		queryFn: () => getCompanies(country as Country | undefined),
		enabled: true,
	});

	const formSchema = z.object({
		country: z.enum(
			[Country.Canada, Country.Germany, Country.Netherlands, Country.Spain, Country.UnitedStatesOfAmerica],
			{ message: 'Ingresa un pais válido: Canada | Germany | Netherlands | Spain | United States of America' }
		),
	});

	const form = useForm({
		defaultValues: {
			country: '',
		},
		validatorAdapter: zodValidator(),
		onSubmit: (values) => {
			console.log(values);
		},
		validators: {
			onSubmit: formSchema,
		},
		onSubmitInvalid: ({ formApi, value }) => {
			toast.error(formApi.state.errorMap.onSubmit?.toString());
		},
	});

	if (isLoading) return <p>Loading...</p>;

	if (error instanceof Error) {
		toast.error(error.message);
	}

	const renderData = () => {
		if (!Array.isArray(data)) return <h2>Sorry, couldn&lsquo;t retrieve data</h2>;

		return <DataTable columns={columns} data={data} />;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		e.stopPropagation();
		console.log(e);
	};

	return (
		<section className='main-container'>
			<form className='mb-12 w-full ' onSubmit={(e) => handleSubmit(e)}>
				<label className='text-lg font-semibold mb-2 block' htmlFor='country'>
					Pais
				</label>
				<form.Field
					name='country'
					children={(field) => (
						<div className='flex gap-x-2 w-full relative'>
							<Input
								autoFocus
								className='max-w-xs'
								id='country'
								list='valid-countries'
								placeholder='Ingresa el nombre de un pais'
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
							/>
							{field.state.meta.errors && (
								<span className='text-sm text-red-500 font-semibold leading-4 absolute -bottom-6'>
									{field.state.meta.errors}
								</span>
							)}

							<Button
								className='w-16 border bg-transparent bg-cyan-600 border-cyan-600 transition-all duration-200 hover:bg-cyan-600 hover:text-white'
								onClick={form.handleSubmit}>
								Buscar
							</Button>
						</div>
					)}
				/>

				<datalist id='valid-countries'>
					<option value='Canada'></option>
					<option value='Germany'></option>
					<option value='Netherlands'></option>
					<option value='Spain'></option>
					<option value='United States of America'></option>
				</datalist>
			</form>
			{renderData()}
		</section>
	);
}
