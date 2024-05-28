import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage({ onBackToHome, courses }) {
    const navigate = useNavigate();

    const handleSelectCourse = (id) => {
        onBackToHome();
        navigate(`/course/${id}`);
    };

    return (
        <>
            <h1>Course Selection</h1>
            <div className="course-grid">
                {courses.map((course) => (
                    <div key={course.id} className="course-card" onClick={() => handleSelectCourse(course.id)}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-info">
                            <h2>{course.title}</h2>
                            <p>{course.semester}</p>
                            <p>Lecturer: {course.lecturer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/all-courses" className="view-all-courses">View All Courses</Link>
        </>
    );
}

export default HomePage;
