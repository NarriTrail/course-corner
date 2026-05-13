import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Alert,
  AlertTitle,
  Pagination,
  Skeleton,
} from "@mui/material";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";

import CourseCard, { CourseCardSkeleton } from "../components/CourseCard";
import FilterBar from "../components/FilterBar";
import useCourseFilter from "../hooks/useCourseFilter";

import allCoursesData from "../data/dummyCourses.json";

const PAGE_SIZE = 9;

const FAKE_LOAD_DELAY = 1200;


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), FAKE_LOAD_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const {
    searchQuery,
    selectedCategory,
    sortOption,
    currentPage,
    filteredCourses,
    paginatedCourses,
    categoryOptions,
    totalPages,
    handleSearchChange,
    handleCategoryChange,
    handleSortChange,
    handlePageChange,
    handleClearFilters,
  } = useCourseFilter(allCoursesData, PAGE_SIZE);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>

      <Box
        sx={{
          background: "linear-gradient(135deg, #1a2744 0%, #2e4080 60%, #3a50a0 100%)",
          pt: { xs: 12, md: 14 },
          pb: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(245,158,11,0.08)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -60,
            left: "40%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(245,158,11,0.05)",
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: 2,
              px: 2,
              py: 0.6,
              mb: 2.5,
            }}
          >
            <AutoStoriesRoundedIcon sx={{ color: "#f59e0b", fontSize: 16 }} />
            <Typography
              variant="caption"
              sx={{
                color: "#f59e0b",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
              }}
            >
              Learning Space
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              color: "#ffffff",
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
              lineHeight: 1.15,
              mb: 1.5,
              maxWidth: 640,
            }}
          >
            Explore Our{" "}
            <Box component="span" sx={{ color: "#f59e0b" }}>
              Course
            </Box>{" "}
            Catalogue
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.65)",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              maxWidth: 500,
              lineHeight: 1.7,
            }}
          >
            {allCoursesData.length} expertly curated courses across{" "}
            {[...new Set(allCoursesData.map((c) => c.category))].length} disciplines.
            Filter, search, and find your next skill.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 } }}>

        <FilterBar
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
          categoryOptions={categoryOptions}
          totalResults={filteredCourses.length}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
          onClearFilters={handleClearFilters}
        />

        {isLoading ? (
          <Grid container spacing={3}>
            {Array.from({ length: PAGE_SIZE }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CourseCardSkeleton />
              </Grid>
            ))}
          </Grid>
        ) : filteredCourses.length === 0 ? (
          <Alert
            severity="info"
            icon={<SearchOffRoundedIcon fontSize="large" />}
            sx={{
              borderRadius: 3,
              py: 3,
              px: 4,
              border: "1px solid #bfdbfe",
              backgroundColor: "#eff6ff",
              "& .MuiAlert-icon": { alignItems: "center" },
            }}
            action={
              <Box
                component="button"
                onClick={handleClearFilters}
                sx={{
                  border: "none",
                  background: "#1d4ed8",
                  color: "#fff",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  fontFamily: "inherit",
                  "&:hover": { background: "#1e40af" },
                }}
              >
                Clear Filters
              </Box>
            }
          >
            <AlertTitle sx={{ fontWeight: 700, color: "#1e3a8a" }}>
              No courses found
            </AlertTitle>
            <Typography variant="body2" sx={{ color: "#1d4ed8" }}>
              No courses match your current filters. Try adjusting your search
              term, category, or sorting options.
            </Typography>
          </Alert>
        ) : (
          <>
            <Grid container spacing={3}>
              {paginatedCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>

            {totalPages > 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                  gap: 2,
                  flexDirection: "column",
                }}
              >
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  shape="rounded"
                  size="large"
                  showFirstButton
                  showLastButton
                  sx={{
                    "& .MuiPaginationItem-root": {
                      fontWeight: 600,
                      borderRadius: 2,
                    },
                    "& .Mui-selected": {
                      background:
                        "linear-gradient(135deg, #2e4080 0%, #1a2744 100%) !important",
                      color: "#fff",
                    },
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  Showing{" "}
                  <strong>
                    {(currentPage - 1) * PAGE_SIZE + 1}–
                    {Math.min(currentPage * PAGE_SIZE, filteredCourses.length)}
                  </strong>{" "}
                  of <strong>{filteredCourses.length}</strong> courses
                </Typography>
              </Box>
            )}
          </>
        )}
      </Container>

      <Box
        component="footer"
        sx={{
          mt: 8,
          py: 3,
          borderTop: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          © 2025 Frontlines EduTech (FLM). Built with React & Material UI.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
