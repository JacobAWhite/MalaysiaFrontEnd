import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import course1Image from './images/course1.jpg';
import course2Image from './images/course2.jpg';
import course3Image from './images/course3.jpg';
import se4gdLogo from './images/se4gd.png';

const courses = {
  1: {
    title: "Sustainable Software",
    lecturer: "Jari Porras",
    description: "This course will look at the various aspects of software engineering from a sustinable perspective. It covers topics such as eco-friendly coding practices, energy-efficient algorithms, and the lifecycle impact of software systems. Students will learn how to design and implement software solutions that minimize environmental impact while maintaining high performance and usability.",
    semester: "Spring 2024",
    image: course1Image,
    assignments: [
      { name: "Assignment 1 - Eco-Friendly Coding Practices", due: "2024-06-01", description: "Analyze a given piece of software code and refactor it to be more energy-efficient. Document the changes made and the impact on energy consumption using profiling tools. Objective: Understand the importance of eco-friendly coding and practice optimizing software for energy efficiency." },
      { name: "Assignment 2 - Lifecycle Impact Analysis", due: "2024-06-15", description: "Conduct a lifecycle analysis of a software application, identifying key stages that contribute to its environmental footprint. Propose improvements to reduce its overall impact. Objective: Learn to evaluate and mitigate the environmental impact of software throughout its lifecycle." },
      { name: "Assignment 3 - Sustainable Software Project", due: "2024-06-30", description: "Design and develop a small software application with sustainability as a core focus. Present the project, highlighting sustainable practices used in development. Objective: Apply sustainable software development principles in a practical project." },
    ],
    content: "This course will explore sustainable software development principles, including eco-friendly coding practices, energy-efficient algorithms, and the lifecycle impact of software systems. Gain hands-on experience with tools and methodologies that promote sustainability in software engineering.",
    assessments: "Assessments include project work, quizzes, and a final exam. Projects will involve designing and implementing sustainable software solutions, and quizzes will test your understanding of the core principles.",
    grades: "Grades will be based on project performance (40%), quizzes (30%), and the final exam (30%). Active participation and engagement in discussions can provide extra credit.",
    zoom: "Bi-weekly (Monday and Wednesday at 3am) in person lectures will be held in TotallyARealRoom1126. These sessions will facilitate real-time problem-solving and feedback.",
    tools: "Use tools such as requirements management software, collaboration platforms, and prototyping tools to document and analyze requirements effectively.",
    support: "Support is provided through office hours, an online help desk, and peer review sessions. The instructor and teaching assistants are, however, not available to assist with any course-related queries (good luck).",
  },
  2: {
    title: "Requirements Engineering",
    lecturer: "Shola Oyedeji",
    description: "This course focuses on the processes involved in gathering, analyzing, and documenting software requirements. It covers techniques for eliciting requirements from stakeholders, managing requirements throughout the software development lifecycle, and ensuring that requirements are met through validation and verification. Students will gain practical experience in creating clear, concise, and testable requirements.",
    semester: "Fall 2024",
    image: course2Image,
    assignments: [
      { name: "Assignment 1 - Stakeholder Requirements Elicitation", due: "2024-07-01", description: "Conduct interviews and surveys with stakeholders to gather requirements for a hypothetical software project. Document the requirements using appropriate techniques. Objective: Develop skills in eliciting and documenting stakeholder requirements effectively." },
      { name: "Assignment 2 - Requirements Specification Document", due: "2024-07-15", description: "Create a detailed requirements specification document for a given project scenario, including functional and non-functional requirements, use cases, and diagrams. Objective: Learn to organize and present requirements in a clear and structured manner." },
      { name: "Assignment 3 - Requirements Validation and Verification", due: "2024-07-30", description: "Perform validation and verification activities on a set of provided requirements. Identify any issues and suggest improvements. Objective: Understand the importance of validating and verifying requirements to ensure they are accurate and feasible." },
    ],
    content: "In this course, you will learn about the processes involved in requirements gathering, analysis, documentation, and management. The course covers techniques for eliciting requirements from stakeholders and ensuring they are met through validation and verification.",
    assessments: "Assessments include individual assignments, group projects, and a final exam. Assignments will focus on real-world case studies, and projects will involve developing comprehensive requirements documents.",
    grades: "Grades will be determined by individual assignments (30%), group projects (40%), and the final exam (30%). Participation in class discussions can contribute to your overall grade.",
    zoom: "This course is online. Zoom links for Course 2: Online lectures will be held every Tuesday and Thursday at 2:00 PM. Links and details will be available on the course platform.",
    tools: "Course tools for Course 2: Students will use tools such as Jupyter Notebooks, RStudio, and Tableau. Access and setup instructions will be provided in the first week of the course.",
    support: "Student support for Course 2: Office hours will be held on Mondays and Wednesdays from 3:00 PM to 5:00 PM. Students can schedule meetings with the teaching assistants for additional help.",
  },
  3: {
    title: "Materials Engineering",
    lecturer: "Susanna Koponen",
    description: "This course provides an in-depth look at the properties, processing, and applications of engineering materials. Topics include the structure and behavior of materials, material selection for engineering applications, and advancements in material science. Students will learn about the environmental impact of material choices and explore sustainable materials and technologies.",
    semester: "Summer 2024",
    image: course3Image,
    assignments: [
      { name: "Assignment 1 - Material Properties Analysis", due: "2024-08-01", description: "Select a material and conduct an in-depth analysis of its properties, including mechanical, thermal, and electrical characteristics. Present your findings in a report. Objective: Gain a thorough understanding of the properties of engineering materials." },
      { name: "Assignment 2 - Sustainable Material Selection", due: "2024-08-15", description: "For a given engineering application, evaluate and recommend a sustainable material. Justify your selection based on environmental impact, cost, and performance. Objective: Learn to make informed decisions about material selection with a focus on sustainability." },
      { name: "Assignment 3 - Experimental Lab Report", due: "2024-08-30", description: "Conduct an experiment in the lab to test the properties of a material. Write a detailed lab report including methodology, results, and analysis. Objective: Develop practical skills in experimental techniques and data analysis related to materials engineering." },
    ],
    content: "This course will dive into the properties, processing, and applications of various engineering materials. The course covers material selection, structure-property relationships, and sustainable materials and technologies.",
    assessments: "Assessments include lab reports, mid-term exams, and a final project. Lab reports will document experiments, while the final project involves a comprehensive study on a material of your choice.",
    grades: "Grades will be based on lab reports (40%), mid-term exams (30%), and the final project (30%). Extra credit is available for exceptional research and innovation in the final project.",
    zoom: "This course will meet once a week, but we will not tell you where. A puzzle will instead be sent to your email 3 hours before class, and you will have to solve it to reveal the room number.",
    tools: "Engage with tools such as material analysis software, simulation tools, and laboratory equipment for practical experiments and data analysis.",
    support: "Support is available through laboratory assistants, office hours (contact professor), and study groups. The instructor and teaching staff are dedicated to ensuring a thorough understanding of the course material.",
  },
};

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

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
            <Route path="/" element={<HomePage onBackToHome={handleBackToHome} />} />
            <Route path="/all-courses" element={<AllCoursesPage />} />
            <Route path="/course/:id" element={<CoursePage onCourseSelect={handleCourseSelect} />} />
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

function Header({ selectedCourse, setSelectedCourse }) {
  const navigate = useNavigate();

  const handleStudentSupportClick = () => {
    if (selectedCourse) {
      navigate(`/course/${selectedCourse.title}`);
    }
  };

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
          <Link to="/content">Assignment</Link>
          <Link to="/assessments">Assessment</Link>
          <Link to="/grades">Grades</Link>
          <Link to="/zoom">Lecture Info</Link>
          <Link to="/course-tools">Course Tools</Link>
          <Link to="#" onClick={handleStudentSupportClick}>Student Support</Link>
        </nav>
      )}
    </div>
  );
}



function HomePage({ onBackToHome }) {
  const navigate = useNavigate();

  const handleSelectCourse = (id) => {
    onBackToHome();
    navigate(`/course/${id}`);
  };

  return (
    <>
      <h1>Course Selection</h1>
      <div className="course-grid">
        {Object.entries(courses).map(([id, course]) => (
          <div key={id} className="course-card" onClick={() => handleSelectCourse(id)}>
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

function AllCoursesPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>All Courses</h1>
      <div className="course-grid">
        {Object.entries(courses).map(([id, course]) => (
          <div key={id} className="course-card" onClick={() => navigate(`/course/${id}`)}>
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

function CoursePage({ onCourseSelect }) {
  const { id } = useParams();
  const course = courses[id];
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (course) {
      onCourseSelect(course);
    }
  }, [course, onCourseSelect]);

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
        {course.assignments.map((assignment, index) => (
          <div key={index} className="assignment-tab">
            <div onClick={() => toggleExpand(index)} className="assignment-title">
              <h2>{assignment.name} <span className="indicator">{expanded[index] ? '▼' : '▶'}</span></h2>
            </div>
            {expanded[index] && (
              <div className="assignment-details">
                <p>Due: {assignment.due}</p>
                <p>Description: {assignment.description}</p>
                <AssignmentForm assignmentName={assignment.name} />
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/" onClick={() => onCourseSelect(null)} className="back-button">Back to Courses</Link>
    </div>
  );
}

function AssignmentForm({ assignmentName }) {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [studentID, setStudentID] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log(`Submitted for ${assignmentName}`);
    console.log('File:', file);
    console.log('Description:', description);
    console.log('Student ID:', studentID);
  };

  return (
    <form onSubmit={handleSubmit} className="assignment-form">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Optional description"
      />
      <input
        type="text"
        value={studentID}
        onChange={(e) => setStudentID(e.target.value)}
        placeholder="Student ID"
        required
      />
      <button type="submit">Submit Assignment</button>
    </form>
  );
}

function ContentPage({ selectedCourse }) {
  if (!selectedCourse) {
    return <h2>Please select a course first.</h2>;
  }

  return (
    <div className="content-page">
      <h1>Content for {selectedCourse.title}</h1>
      <p>{selectedCourse.content}</p>
    </div>
  );
}

function AssessmentsPage({ selectedCourse }) {
  if (!selectedCourse) {
    return <h2>Please select a course first.</h2>;
  }

  return (
    <div className="assessments-page">
      <h1>Assessments for {selectedCourse.title}</h1>
      <p>{selectedCourse.assessments}</p>
    </div>
  );
}

function GradesPage({ selectedCourse }) {
  if (!selectedCourse) {
    return <h2>Please select a course first.</h2>;
  }

  return (
    <div className="grades-page">
      <h1>Grades for {selectedCourse.title}</h1>
      <p>{selectedCourse.grades}</p>
    </div>
  );
}

function ZoomPage({ selectedCourse }) {
  if (!selectedCourse) {
    return <h2>Please select a course first.</h2>;
  }

  return (
    <div className="zoom-page">
      <h1>Lecture information {selectedCourse.title}</h1>
      <p>{selectedCourse.zoom}</p>
    </div>
  );
}

function CourseToolsPage({ selectedCourse }) {
  if (!selectedCourse) {
    return <h2>Please select a course first.</h2>;
  }

  return (
    <div className="course-tools-page">
      <h1>Course Tools for {selectedCourse.title}</h1>
      <p>{selectedCourse.tools}</p>
    </div>
  );
}

function StudentSupportPage({ selectedCourse }) {
  if (!selectedCourse) {
    return <h2>Please select a course first.</h2>;
  }

  return (
    <div className="student-support-page">
      <h1>Student Support for {selectedCourse.title}</h1>
      <p>{selectedCourse.support}</p>
    </div>
  );
}

export default App;
