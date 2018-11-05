export default {
	imageUrl: {
		type: 'string',
		default: '',
	},
	overlayContent: {
		source: 'children',
		selector: '.overlay-content',
	},
	overlayColor: {
		type: 'string',
	},
	overlayOpacity: {
		type: 'number',
		default: 50,
	},
};
