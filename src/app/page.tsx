'use client';

import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '@tanstack/react-form';
import { useQuery } from '@tanstack/react-query';
import { zodValidator } from '@tanstack/zod-form-adapter';

import { Country } from '@/core/interfaces/Company';
import { Input, Button } from './_components/ui/shadcn';
import { getCompanies } from '@/core/lib/company';
import { companySchema } from '@/core/lib/validators/company';
import { columns, DataTable } from './_components/company';
import { RootState } from '@/core/store/store';
import { resetCountry, setCountry } from '@/core/store/slices/countrySlice';
import Loader from './_components/ui/Loader';

export default function Home() {
	const dispatch = useDispatch();
	const country = useSelector((state: RootState) => state.country.countryValue);

	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ['companies'],
		queryFn: () => getCompanies(country as Country | undefined),
		enabled: true,
	});

	const form = useForm({
		defaultValues: {
			country: '',
		},
		validatorAdapter: zodValidator(),
		onSubmit: ({ value }) => {
			dispatch(setCountry(value.country as Country));
			refetch();
		},
		validators: {
			onSubmit: companySchema,
		},
		onSubmitInvalid: ({ formApi, value }) => {
			if (!value.country) {
				return toast.error('El campo Pais es requerido');
			}

			toast.error(formApi.state.errorMap.onSubmit?.toString());
		},
	});

	if (isLoading) return <Loader />;

	if (error instanceof Error) {
		toast.error(error.message);
	}

	const renderData = () => {
		if (!Array.isArray(data)) return <h2>Sorry, couldn&lsquo;t retrieve data</h2>;

		return <DataTable columns={columns} data={data} />;
	};

	const handleClear = async () => {
		form.reset();
		await dispatch(resetCountry());
		await refetch();
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		e.stopPropagation();

		refetch();
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
								placeholder='ej: Spain'
								value={field.state.value.toLowerCase().charAt(0).toUpperCase() + field.state.value.slice(1)}
								onChange={(e) => field.handleChange(e.target.value)}
							/>

							{field.state.meta.errors && (
								<span className='text-xs text-red-500 font-semibold leading-4 absolute -bottom-6'>
									{field.state.meta.errors}
								</span>
							)}

							<Button
								className='w-16 border bg-transparent bg-cyan-600 border-cyan-600 transition-all duration-200 hover:bg-cyan-600 hover:text-white'
								onClick={form.handleSubmit}
								disabled={!field.state.value}>
								Buscar
							</Button>

							{country && <Button onClick={handleClear}>Ver todas las empresas</Button>}
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
