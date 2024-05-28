import React from 'react';
import { useNavigate } from 'react-router-dom';

function AllCoursesPage({ courses }) {
    const navigate = useNavigate();

    return (
        <>
            <h1>All Courses</h1>
            <div className="course-grid">
                {courses.map((course) => (
                    <div key={course.id} className="course-card" onClick={() => navigate(`/course/${course.id}`)}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-info">
                            <h2>{course.title}</h2>
                            <p>{course.semester}</p>
                            <p>Lecturer: {course.lecturer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate(-1)} className="back-button">Back</button>
        </>
    );
}

export default AllCoursesPage;
