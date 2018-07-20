import React from 'react';

const Scroll = (props) =>{
	return (
		<div className="scroll-section" style={{overflowY: 'scroll', border: '2px solid black', height: '800px', paddingRight: '17px',boxSizing: 'content-box'}}>
			{props.children}
		</div>
	);
}

export default Scroll;