import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // Blue
        },
        secondary: {
            main: "#f50057", // Pink
        },
        background: {
            default: "#f4f4f4",
            paper: "#ffffff",
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },
        body1: {
            fontSize: "1rem",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none", // Prevents uppercase transformation
                },
            },
        },
    },
});

export default theme;
