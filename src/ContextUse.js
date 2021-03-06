import React, { createContext, useState, useContext } from 'react';

export const ContextUse = createContext(null);

const ToggleTheme = createContext(null);

export const useTheme = () => useContext(ContextUse);
export const useThemUpdate = () => useContext(ToggleTheme);

export const ThemeProvider = ({ children }) => {
	const [ globalToken, setGlobalToken ] = useState(true);
	const vv = () => {
		setGlobalToken((prevGlobalToken) => !prevGlobalToken);
	};
	return (
		<div>
			<ContextUse.Provider value={globalToken}>
				<ToggleTheme.Provider value={vv}> {children}</ToggleTheme.Provider>
			</ContextUse.Provider>
		</div>
	);
};
