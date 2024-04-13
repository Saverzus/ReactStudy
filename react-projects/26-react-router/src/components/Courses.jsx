import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useState } from 'react';
import courses from '../data/courses';

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  sortedCourses.sort((a, b) => a[key] - b[key]);
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState();
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
