import React from 'react';
import classnames from 'classnames';

import './index.css';

const Section = props => {
	const cn = classnames({
		'col-sm-1': props.sm1,
		'col-sm-2': props.sm2,
		'col-sm-3': props.sm3,
		'col-sm-4': props.sm4,
		'col-sm-5': props.sm5,
		'col-sm-6': props.sm6,
		'col-sm-7': props.sm7,
		'col-sm-8': props.sm8,
		'col-sm-9': props.sm9,
		'col-sm-10': props.sm10,
		'col-sm-11': props.sm11,
		'col-sm-12': props.sm12,
		'col-sm-offset-1': props.smo1,
		'col-sm-offset-2': props.smo2,
		'col-sm-offset-3': props.smo3,
		'col-sm-offset-4': props.smo4,
		'col-sm-offset-5': props.smo5,
		'col-sm-offset-6': props.smo6,
		'col-sm-offset-7': props.smo7,
		'col-sm-offset-8': props.smo8,
		'col-sm-offset-9': props.smo9,
		'col-sm-offset-10': props.smo10,
		'col-sm-offset-11': props.smo11,
		'col-sm-offset-12': props.smo12
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