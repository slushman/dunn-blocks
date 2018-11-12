export const dimRatioToClass = ( ratio ) => {
	return ( 0 === ratio ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
};
