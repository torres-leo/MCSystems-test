import { BaseSyntheticEvent } from 'react';
import { Input } from '../ui/shadcn/input';

interface Props {
	value: string;
	placeholder: string;
	onChange: (event: BaseSyntheticEvent) => void;
	className: string;
}

function FilterInput({ className, placeholder, onChange, value }: Props) {
	return <Input placeholder={placeholder} value={value} onChange={onChange} className={`max-w-xs ${className}`} />;
}

export default FilterInput;
