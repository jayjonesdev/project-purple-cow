import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: '#5c3977'
        },
        secondary: {
            light: '#fff',
            main: '#c2c3c4',
            contrastText: '#5c3977'
        }
    }
});