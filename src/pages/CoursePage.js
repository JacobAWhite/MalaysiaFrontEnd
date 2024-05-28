import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AssignmentForm from '../components/AssignmentForm';

function CoursePage({ courses, onCourseSelect }) {
    const { id } = useParams();
    const course = courses.find(course => course.id === id);
    const [assignments, setAssignments] = useState([]);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get(`https://hack-malay.ew.r.appspot.com/assignments/course/${id}`);
                setAssignments(response.data);
            } catch (error) {
                console.error("Error fetching assignments:", error);
            }
        };

        fetchAssignments();

        if (course) {
            onCourseSelect(course);
        }
    }, [id, course, onCourseSelect]);

    if (!course) {
        return <h2>Course not found</h2>;
    }

    const toggleExpand = (index) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [index]: !prevExpanded[index],
        }));
    };

    return (
        <div className="course-page">
            <h1>{course.title}</h1>
            <h3>Lecturer: {course.lecturer}</h3>
            <p>{course.description}</p>
            <div className="assignment-tabs">
                {assignments.map((assignment, index) => (
                    <div key={assignment.id} className="assignment-tab">
                        <div onClick={() => toggleExpand(index)} className="assignment-title">
                            <h2>{assignment.name} <span className="indicator">{expanded[index] ? '▼' : '▶'}</span></h2>
                        </div>
                        {expanded[index] && (
                            <div>
                                <div className="due-date">
                                    <p>Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                                </div>
                                <div className="assignment-details">
                                    <p>Description: {assignment.description}</p>
                                    <AssignmentForm assignmentName={assignment.name} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link to="/" onClick={() => onCourseSelect(null)} className="back-button">Back to Courses</Link>
        </div>
    );
}

export default CoursePage;
