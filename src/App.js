import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AllCoursesPage from './pages/AllCoursesPage';
import CoursePage from './pages/CoursePage';
import ContentPage from './pages/ContentPage';
import AssessmentsPage from './pages/AssessmentsPage';
import GradesPage from './pages/GradesPage';
import ZoomPage from './pages/ZoomPage';
import CourseToolsPage from './pages/CourseToolsPage';
import StudentSupportPage from './pages/StudentSupportPage';

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://hack-malay.ew.r.appspot.com/courses');
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToHome = () => {
    setSelectedCourse(null);
  };

  return (
      <Router>
        <div className="App">
          <Header selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
          <main className="App-content">
            <Routes>
              <Route path="/" element={<HomePage onBackToHome={handleBackToHome} courses={courses} />} />
              <Route path="/all-courses" element={<AllCoursesPage courses={courses} />} />
              <Route path="/course/:id" element={<CoursePage courses={courses} onCourseSelect={handleCourseSelect} />} />
              <Route path="/content" element={<ContentPage selectedCourse={selectedCourse} />} />
              <Route path="/assessments" element={<AssessmentsPage selectedCourse={selectedCourse} />} />
              <Route path="/grades" element={<GradesPage selectedCourse={selectedCourse} />} />
              <Route path="/zoom" element={<ZoomPage selectedCourse={selectedCourse} />} />
              <Route path="/course-tools" element={<CourseToolsPage selectedCourse={selectedCourse} />} />
              <Route path="/student-support" element={<StudentSupportPage selectedCourse={selectedCourse} />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
