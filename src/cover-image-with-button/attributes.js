export default {
	blockHeight: {
		type: 'number',
		default: 200,
	},
	buttonText: {
		type: 'string',
		default: '',
	},
	buttonUrl: {
		type: 'string',
		default: '',
	},
	imageLabel: {
		source: 'children',
		selector: '.image-label',
	},
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
