import { useState, useMemo } from "react";


const useCourseFilter = (allCourses, pageSize = 9) => {
  const [searchQuery, setSearchQuery]     = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption]       = useState("default");
  const [currentPage, setCurrentPage]     = useState(1);

  const categoryOptions = useMemo(() => {
    const uniqueCategories = [...new Set(allCourses.map((c) => c.category))];
    return ["All", ...uniqueCategories.sort()];
  }, [allCourses]);

  const filteredCourses = useMemo(() => {
    let results = [...allCourses];

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      results = results.filter(
        (course) =>
          course.name.toLowerCase().includes(lowerQuery) ||
          course.instructor.toLowerCase().includes(lowerQuery)
      );
    }

    if (selectedCategory !== "All") {
      results = results.filter(
        (course) => course.category === selectedCategory
      );
    }

    if (sortOption === "rating_desc") {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "name_asc") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name_desc") {
      results.sort((a, b) => b.name.localeCompare(a.name));
    }

    return results;
  }, [allCourses, searchQuery, selectedCategory, sortOption]);

  const totalPages  = Math.ceil(filteredCourses.length / pageSize);
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredCourses.slice(startIndex, startIndex + pageSize);
  }, [filteredCourses, currentPage, pageSize]);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); 
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (_, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortOption("default");
    setCurrentPage(1);
  };

  return {
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
  };
};

export default useCourseFilter;
