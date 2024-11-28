import { IconType } from 'react-icons';

interface Props {
	icon: IconType;
	color?: string;
	customClass?: string;
	size?: number;
}

function CustomIcon({ icon: Icon, size = 30, color = '#b4b4b4', customClass }: Props) {
	return <Icon size={size} color={color} className={customClass} />;
}

export default CustomIcon;
