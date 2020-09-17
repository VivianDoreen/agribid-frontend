//react
import React from 'react';

const Logout = () => {
	return (
		<div style={{ width:60, height:30, border:'1px solid #ffffff', backgroundColor:'#ffffff', fontSize:16,borderRadius:3 }}>
			<a href='/' onClick={() => localStorage.removeItem('token')} style={{textDecoration:'none',  marginTop:5, color:'#00000'}}>
				Logout
			</a>
		</div>
	);
};

export default Logout;
