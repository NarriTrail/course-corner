import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";


function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled
            ? "rgba(26, 39, 68, 0.97)"
            : "linear-gradient(135deg, #1a2744 0%, #2e4080 100%)",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 0.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(245,158,11,0.4)",
                }}
              >
                <MenuBookRoundedIcon sx={{ color: "#fff", fontSize: 20 }} />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontFamily: '"Sora", sans-serif',
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "#fff",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    display: "block",
                  }}
                >
                  Course{" "}
                  <Box
                    component="span"
                    sx={{ color: "#f59e0b" }}
                  >
                    corner
                  </Box>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  learn with soul
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box
              sx={{
                px: 2,
                py: 0.6,
                borderRadius: 2,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                }}
              >
                17 Courses
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
