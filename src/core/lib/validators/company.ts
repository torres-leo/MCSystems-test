import { Country } from '@/core/interfaces/Company';
import { z } from 'zod';

export const companySchema = z.object({
	country: z.enum(
		[Country.Canada, Country.Germany, Country.Netherlands, Country.Spain, Country.UnitedStatesOfAmerica],
		{ message: 'Ingresa un pais válido: Canada | Germany | Netherlands | Spain | United States of America' }
	),
});
