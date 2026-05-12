import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a2744",       
      light: "#2e4080",
      dark: "#0f1830",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f59e0b",       
      light: "#fcd34d",
      dark: "#d97706",
      contrastText: "#1a2744",
    },
    background: {
      default: "#f5f6fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a2744",
      secondary: "#5a6888",
    },
    success: {
      main: "#10b981",
    },
    divider: "#e4e7f0",
  },

  typography: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Sora", "Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    body1: {
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  shadows: [
    "none",
    "0 1px 3px rgba(26,39,68,0.06), 0 1px 2px rgba(26,39,68,0.04)",
    "0 3px 8px rgba(26,39,68,0.08), 0 1px 3px rgba(26,39,68,0.05)",
    "0 6px 16px rgba(26,39,68,0.10), 0 2px 6px rgba(26,39,68,0.06)",
    "0 10px 24px rgba(26,39,68,0.12), 0 4px 8px rgba(26,39,68,0.07)",
    "0 14px 32px rgba(26,39,68,0.14)",
    "0 18px 40px rgba(26,39,68,0.16)",
    "0 22px 48px rgba(26,39,68,0.18)",
    "0 26px 56px rgba(26,39,68,0.20)",
    "0 30px 64px rgba(26,39,68,0.22)",
    "0 34px 72px rgba(26,39,68,0.24)",
    "0 38px 80px rgba(26,39,68,0.26)",
    "0 42px 88px rgba(26,39,68,0.28)",
    "0 46px 96px rgba(26,39,68,0.30)",
    "0 50px 104px rgba(26,39,68,0.32)",
    "0 54px 112px rgba(26,39,68,0.34)",
    "0 58px 120px rgba(26,39,68,0.36)",
    "0 62px 128px rgba(26,39,68,0.38)",
    "0 66px 136px rgba(26,39,68,0.40)",
    "0 70px 144px rgba(26,39,68,0.42)",
    "0 74px 152px rgba(26,39,68,0.44)",
    "0 78px 160px rgba(26,39,68,0.46)",
    "0 82px 168px rgba(26,39,68,0.48)",
    "0 86px 176px rgba(26,39,68,0.50)",
    "0 90px 184px rgba(26,39,68,0.52)",
  ],

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #e4e7f0",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 16px 40px rgba(26,39,68,0.13)",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 20px",
          fontWeight: 600,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #2e4080 0%, #1a2744 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #3a50a0 0%, #243560 100%)",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#e4e7f0",
            },
            "&:hover fieldset": {
              borderColor: "#2e4080",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1a2744",
            },
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#ffffff",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "0.72rem",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
