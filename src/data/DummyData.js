import {strings} from '../i18n';
export const increase_more_data = [
	{name: 'Increase', id: 1},
	{id: 2, name: 'Decrease'},
];
export const Rate_worth_data = [
	{name: 'Fixed', id: 1},
	{id: 2, name: 'Percentage'},
];
export const action_data = [
	{id: 1, name: strings('Yes'), is_printed: 1},
	{id: 2, name: strings('No'), is_printed: 0},
];
export const orders_data = [
	{
		id: 120777,
		user: {
			id: 29602,
			name: 'خالد  المصعبي',
			mobile: '569180107',
		},
		shop: {
			id: 40,
			name: 'ملحمة الفرح',
		},
		total: '257.25',
		status: {
			id: 6,
			name: 'تم الطلب بنجاح',
		},
		payment: {
			id: 1,
			name: 'دفع عند الاستلام',
			status: null,
		},
		date: '',
		time: {
			from: '02:00 PM',
			to: '04:00 PM',
		},
		is_read: 1,
		is_deliverd: 0,
		is_thirt_min: 0,
	},

	{
		id: 121088,
		user: {
			id: 62368,
			name: 'hossam  alqudah',
			mobile: '502507079',
		},
		shop: {
			id: 40,
			name: 'ملحمة الفرح',
		},
		total: '1701.00',
		status: {
			id: 6,
			name: 'تم الطلب بنجاح',
		},
		payment: {
			id: 1,
			name: 'دفع عند الاستلام',
			status: 'completed',
		},
		date: '2023-11-09',
		time: {
			from: '01:00 PM',
			to: '03:00 PM',
		},
		is_read: 0,
		is_deliverd: 0,
		is_thirt_min: 0,
	},
];
export const departments_data = ['Aqeeqa', 'Personal', 'Zabehaty', 'Udhyaa', 'gifts'];
export const emirates_data = ['Abudhabi', 'Dubai', 'Sharjah', 'Fujairah', 'Ras-al-khaima', 'Um-al-quwain', 'Ajman'];
export const regions_data = ['Al-yahar', 'Al-jimi', 'Al-khabisi', 'Al-nehadat'];
export const payment_methods_data = ['Payment Upon Receipt', 'Visa', 'Bank Transfer', 'Pay Link', 'POS'];
export const shipping_methods_data = ['Regular Shipping', 'Express Shipping', 'VIP Delivery', 'Book a Slaughter ticket', 'Adahy'];
export const products_data = ['Fish Box Offer', 'Bury', 'Talabiya', 'Basar', 'Biyah'];
export const time_slots_data = [
	{id: 1, name: '03.00 AM - 06:00 PM'},
	{id: 2, name: '03.00 AM - 06:00 PM'},
	{id: 3, name: '03.00 AM - 06:00 PM'},
];
export const status_data = ['Inprogress', 'Order has been created Successfully', 'Driver has been Assigned'];
export const paying_off_data = ['Payment Upon Receipt', 'Visa', 'Bank Transfer', 'Pay Link', 'POS'];
export const drivers_data = ['Kashif', 'Raza', 'Adnan', 'Abbid', 'Hamza'];

export const branch_data = ['Abu Dhabi', 'Al Dhaid', 'Al Sila', 'Liwa', 'Al Mirfa'];

export const section_data = [
	{id: 1, name: 'Personal', category_id: null},
	{id: 2, name: 'Sheep', category_id: null},
	{id: 1, name: 'Nuaimi', category_id: 2},
	{id: 1, name: 'Indian', category_id: 2},
	{id: 1, name: 'Jaziri', category_id: 2},
	{id: 1, name: 'Goat', category_id: null},
	{id: 1, name: 'Local', category_id: 3},
];
export const special_categories_data = ['Amendment', 'Modification'];
export const sort_data = [
	'Fish Box Offer',
	'Bury',
	'Talabiya',
	'Basar',
	'Biyah',
	'Fish Box Offer',
	'Bury',
	'Talabiya',
	'Basar',
	'Biyah',
	'Fish Box Offer',
	'Bury',
	'Talabiya',
	'Basar',
	'Biyah',
	'Fish Box Offer',
	'Bury',
	'Talabiya',
	'Basar',
	'Biyah',
	'Fish Box Offer',
	'Bury',
	'Talabiya',
	'Basar',
	'Biyah',
	'Fish Box Offer',
	'Bury',
	'Talabiya',
	'Basar',
	'Biyah',
];

export const checkbox_data = [
	{id: 1, name: 'Personal', selected: true},
	{id: 2, name: 'Sheep', selected: false},
	{id: 3, name: 'Nuaimi', selected: true},
	{id: 4, name: 'Indian', selected: false},
	{id: 5, name: 'Jaziri', selected: true},
	{id: 6, name: 'Goat', selected: true},
	{id: 7, name: 'Local', selected: true},
];

export const shop_type_data = [
	{id: 'shop', name: strings('Shop')},
	{id: 'restaurant', name: strings('Restaurant')},
];
