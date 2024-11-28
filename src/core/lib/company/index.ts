import { Company, ErrorResponse, Country } from '@/core/interfaces/Company';
import axiosInstance from '../config/axios';

export const getCompanies = async (country?: Country): Promise<Company[] | ErrorResponse> => {
	try {
		const { data } = await axiosInstance.get('', {
			params: country ? { country } : undefined,
		});

		if (Array.isArray(data)) return data;

		throw new Error(data.message || 'Failed to retrieve data');
	} catch (error) {
		console.log(error);
		throw new Error((error as Error).message || 'Failed to retrieve data');
	}
};

export const getCompaniesByCountry = async (country: Country): Promise<Company[] | ErrorResponse> => {
	const { data } = await axiosInstance.get('', {
		params: {
			country: country,
		},
	});
	return data;
};
