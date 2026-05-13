# 🎓 Course corner – Course Directory

Welcome! This is a clean, modern course catalog built for the **Frontlines EduTech (FLM)** technical assessment. The goal was to create an interface that feels fast, looks professional, and helps students find the right courses effortlessly.

---

## 🚀 Live Demo
**https://course-corner-13wvi5ng6-narritrails-projects.vercel.app**  

> **Note:** The app is fully responsive. Try resizing your browser or opening the link on your mobile to see the layout adapt!

---

## ✨ Key Features
I focused on making the user experience as smooth as possible. Here is what I’ve built:

*   **Smart Search:** Find courses instantly by searching for the course title or the instructor’s name.
*   **Dynamic Filtering:** Narrow down the list by category using a clean dropdown menu.
*   **Sorting Options:** Arrange courses by "Highest Rated" to find top content, or alphabetically (A-Z/Z-A).
*   **Pagination:** To keep the UI tidy, I implemented pagination (9 courses per page) so the user isn't overwhelmed.
*   **Visual Polish:** 
    *   **Skeleton Loaders:** Prevents a "blank screen" feel by showing loading blocks.
    *   **Active Filter Chips:** Shows users exactly what filters are applied; you can click to remove them.
    *   **Empty States:** If no results are found, a helpful alert suggests resetting the filters.

---

## 🗂 Project Structure
I kept the folder structure organized and scalable, similar to how I handle professional React Native projects:

```text
src/
├── components/      # Reusable UI (Navbar, CourseCard, FilterBar)
├── data/            # dummyCourses.json (Our mock database)
├── hooks/           # useCourseFilter.js (The "brain" of the app)
├── theme/           # theme.js (Custom MUI colors and styling)
├── pages/           # Home.jsx (Main landing view)
└── App.jsx          # App entry and Theme provider