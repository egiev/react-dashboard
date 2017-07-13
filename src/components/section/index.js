import React from 'react';
import classnames from 'classnames';

import './index.css';

const Section = props => {
	const cn = classnames({
		'col-xs-1': props.sm1, 'col-xs-2': props.sm2, 'col-xs-3': props.sm3, 'col-xs-4': props.sm4, 'col-xs-5': props.sm5, 'col-xs-6': props.sm6,
		'col-xs-7': props.sm7, 'col-xs-8': props.sm8, 'col-xs-9': props.sm9, 'col-xs-10': props.sm10, 'col-xs-11': props.sm11, 'col-xs-12': props.sm12,
		'col-sm-1': props.sm1, 'col-sm-2': props.sm2, 'col-sm-3': props.sm3, 'col-sm-4': props.sm4, 'col-sm-5': props.sm5, 'col-sm-6': props.sm6,
		'col-sm-7': props.sm7, 'col-sm-8': props.sm8, 'col-sm-9': props.sm9, 'col-sm-10': props.sm10, 'col-sm-11': props.sm11, 'col-sm-12': props.sm12,
		'col-md-1': props.sm1, 'col-md-2': props.sm2, 'col-md-3': props.sm3, 'col-md-4': props.sm4, 'col-md-5': props.sm5, 'col-md-6': props.sm6,
		'col-md-7': props.sm7, 'col-md-8': props.sm8, 'col-md-9': props.sm9, 'col-md-10': props.sm10, 'col-md-11': props.sm11, 'col-md-12': props.sm12,
		'col-lg-1': props.sm1, 'col-lg-2': props.sm2, 'col-lg-3': props.sm3, 'col-lg-4': props.sm4, 'col-lg-5': props.sm5, 'col-lg-6': props.sm6,
		'col-lg-7': props.sm7, 'col-lg-8': props.sm8, 'col-lg-9': props.sm9, 'col-lg-10': props.sm10, 'col-lg-11': props.sm11, 'col-lg-12': props.sm12,
	});

	const height = props.height;
	return(
		<div className={cn}>
			<div className="section-white">
				{props.children}
			</div>
		</div>
	)
}

export default Section