export interface Company {
	NombreComercial: string;
	NombreLegal: string;
	CEO: string;
	FechaCreacion: Date;
	IngresoAnual: number;
	CantidadEmpleados: number;
	Pais: Country;
	PrincipalProducto: string;
}

export enum Country {
	Canada = 'Canada',
	Germany = 'Germany',
	Netherlands = 'Netherlands',
	Spain = 'Spain',
	UnitedStatesOfAmerica = 'United States of America',
}

export type ErrorResponse = {
	statusCode: number;
	message: string;
	errors: {
		received: string;
		code: string;
		options: string[];
		path: string[];
		message: string;
	}[];
};
