import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Rating,
  Skeleton,
  Tooltip,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const CATEGORY_COLORS = {
  "Web Development":   { bg: "#eff6ff", color: "#1d4ed8" },
  "Data Science":      { bg: "#f0fdf4", color: "#15803d" },
  "Design":            { bg: "#fdf4ff", color: "#7e22ce" },
  "Mobile Development":{ bg: "#fff7ed", color: "#c2410c" },
  "Cloud & DevOps":    { bg: "#f0f9ff", color: "#0369a1" },
  "Cybersecurity":     { bg: "#fef2f2", color: "#b91c1c" },
};

const getCategoryStyle = (category) =>
  CATEGORY_COLORS[category] || { bg: "#f5f6fa", color: "#1a2744" };

export const CourseCardSkeleton = () => (
  <Card elevation={0} sx={{ height: "100%" }}>
    <Skeleton variant="rectangular" height={180} sx={{ borderRadius: "16px 16px 0 0" }} />
    <CardContent>
      <Skeleton variant="rounded" width={80} height={22} sx={{ mb: 1.5 }} />
      <Skeleton variant="text" sx={{ fontSize: "1.1rem" }} />
      <Skeleton variant="text" width="60%" sx={{ mb: 1 }} />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="70%" sx={{ mb: 2 }} />
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Skeleton variant="rounded" width={90} height={20} />
        <Skeleton variant="rounded" width={70} height={20} />
      </Box>
    </CardContent>
  </Card>
);

const CourseCard = ({ course }) => {
  const [imgError, setImgError] = useState(false);
  const categoryStyle = getCategoryStyle(course.category);

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="180"
          image={
            imgError
              ? `https://placehold.co/400x220/1a2744/f59e0b?text=${encodeURIComponent(course.category)}`
              : course.image
          }
          alt={course.name}
          onError={() => setImgError(true)}
          sx={{
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.04)" },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(26,39,68,0.85)",
            backdropFilter: "blur(6px)",
            borderRadius: 2,
            px: 1,
            py: 0.4,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography sx={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.8rem" }}>
            ★ {course.rating.toFixed(1)}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5, pb: 1 }}>
        <Chip
          label={course.category}
          size="small"
          sx={{
            mb: 1.5,
            backgroundColor: categoryStyle.bg,
            color: categoryStyle.color,
            fontWeight: 700,
            fontSize: "0.68rem",
            border: `1px solid ${categoryStyle.color}22`,
          }}
        />

        <Tooltip title={course.name} placement="top" arrow>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontFamily: '"Sora", sans-serif',
              fontWeight: 700,
              fontSize: "0.98rem",
              lineHeight: 1.35,
              mb: 1,
              color: "text.primary",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              cursor: "default",
            }}
          >
            {course.name}
          </Typography>
        </Tooltip>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "0.82rem",
            lineHeight: 1.6,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {course.description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <Rating
            value={course.rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": { color: "#f59e0b" },
              "& .MuiRating-iconEmpty": { color: "#e4e7f0" },
            }}
          />
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            {course.rating.toFixed(1)}
          </Typography>
        </Box>
      </CardContent>

      <CardActions
        sx={{
          px: 2.5,
          pb: 2,
          pt: 0,
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid",
          borderColor: "divider",
          mt: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
          <PersonRoundedIcon sx={{ fontSize: 15, color: "text.secondary" }} />
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              fontSize: "0.75rem",
              maxWidth: 120,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {course.instructor}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
          <AccessTimeRoundedIcon sx={{ fontSize: 15, color: "text.secondary" }} />
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 500, fontSize: "0.75rem" }}
          >
            {course.duration}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
