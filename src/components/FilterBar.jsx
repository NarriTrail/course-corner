import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  IconButton,
  Tooltip,
  InputAdornment,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";


const FilterBar = ({
  searchQuery,
  selectedCategory,
  sortOption,
  categoryOptions,
  totalResults,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onClearFilters,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    sortOption !== "default";

  return (
    <Box
      sx={{
        background: "#ffffff",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        p: { xs: 2, sm: 3 },
        mb: 3,
        boxShadow: "0 2px 12px rgba(26,39,68,0.06)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FilterListRoundedIcon sx={{ color: "primary.main", fontSize: 20 }} />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "text.primary", fontSize: "0.95rem" }}
          >
            Filter Courses
          </Typography>
          <Chip
            label={`${totalResults} result${totalResults !== 1 ? "s" : ""}`}
            size="small"
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.7rem",
              height: 22,
            }}
          />
        </Box>

        {hasActiveFilters && (
          <Tooltip title="Clear all filters">
            <IconButton
              onClick={onClearFilters}
              size="small"
              sx={{
                backgroundColor: "#fef2f2",
                color: "#b91c1c",
                "&:hover": { backgroundColor: "#fee2e2" },
                borderRadius: 2,
              }}
            >
              <ClearRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",             
            sm: "1fr 1fr",        
            md: "2fr 1fr 1fr",    
          },
          gap: 2,
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Search by course name or instructor…"
          value={searchQuery}
          onChange={onSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon sx={{ color: "text.secondary", fontSize: 20 }} />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() =>
                    onSearchChange({ target: { value: "" } })
                  }
                  sx={{ color: "text.secondary" }}
                >
                  <ClearRoundedIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "0.88rem",
            },
          }}
        />

        <FormControl fullWidth size="small">
          <InputLabel sx={{ fontSize: "0.88rem" }}>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={onCategoryChange}
            sx={{ fontSize: "0.88rem" }}
          >
            {categoryOptions.map((category) => (
              <MenuItem
                key={category}
                value={category}
                sx={{ fontSize: "0.88rem" }}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth size="small">
          <InputLabel sx={{ fontSize: "0.88rem" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SortRoundedIcon sx={{ fontSize: 16 }} />
              Sort By
            </Box>
          </InputLabel>
          <Select
            value={sortOption}
            label="Sort By"
            onChange={onSortChange}
            sx={{ fontSize: "0.88rem" }}
          >
            <MenuItem value="default" sx={{ fontSize: "0.88rem" }}>
              Default
            </MenuItem>
            <MenuItem value="rating_desc" sx={{ fontSize: "0.88rem" }}>
              ★ Highest Rated
            </MenuItem>
            <MenuItem value="name_asc" sx={{ fontSize: "0.88rem" }}>
              Name (A → Z)
            </MenuItem>
            <MenuItem value="name_desc" sx={{ fontSize: "0.88rem" }}>
              Name (Z → A)
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {hasActiveFilters && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {searchQuery.trim() && (
            <Chip
              label={`Search: "${searchQuery}"`}
              size="small"
              onDelete={() => onSearchChange({ target: { value: "" } })}
              sx={{ backgroundColor: "#eff6ff", color: "#1d4ed8", fontSize: "0.72rem" }}
            />
          )}
          {selectedCategory !== "All" && (
            <Chip
              label={`Category: ${selectedCategory}`}
              size="small"
              onDelete={() => onCategoryChange({ target: { value: "All" } })}
              sx={{ backgroundColor: "#f0fdf4", color: "#15803d", fontSize: "0.72rem" }}
            />
          )}
          {sortOption !== "default" && (
            <Chip
              label={`Sort: ${
                sortOption === "rating_desc"
                  ? "Highest Rated"
                  : sortOption === "name_asc"
                  ? "Name A–Z"
                  : "Name Z–A"
              }`}
              size="small"
              onDelete={() => onSortChange({ target: { value: "default" } })}
              sx={{ backgroundColor: "#fff7ed", color: "#c2410c", fontSize: "0.72rem" }}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default FilterBar;
