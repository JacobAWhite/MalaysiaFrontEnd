import React from 'react';
import { Link } from 'react-router-dom';
import se4gdLogo from '../images/se4gd.png';

function Header({ selectedCourse, setSelectedCourse }) {
    return (
        <div className={`Header ${selectedCourse ? 'header-course' : 'header-home'}`}>
            <div className="header-top">
                <img src={se4gdLogo} alt="SE4GD Logo" className="logo" />
                <h1 className="title">SE4GD</h1>
                <div className="user-info">
                    <span className="username">Student Name</span>
                    <span className="user-initials">SN</span>
                </div>
            </div>
            {selectedCourse && (
                <nav className="navbar">
                    <Link to="/" onClick={() => setSelectedCourse(null)}>Course Home</Link>
                    <Link to="/content">Content</Link>
                    <Link to={`/course/${selectedCourse.id}`}>Assignment</Link>
                    <Link to="/assessments">Assessment</Link>
                    <Link to="/grades">Grades</Link>
                    <Link to="/zoom">Lecture Info</Link>
                    <Link to="/course-tools">Course Tools</Link>
                    <Link to="/student-support">Student Support</Link>
                </nav>
            )}
        </div>
    );
}

export default Header;
