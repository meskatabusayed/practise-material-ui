import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";


const theme = createTheme({
    palette : {
        primary: {
            main: '#01BDB2'
        },
        secondary: {
            main: '#D80032'
        }
    }
})

const SiteTheme = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};



export default SiteTheme;