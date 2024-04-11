import courses from '../data/courses';

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => {
          return (
            <>
              <h2>{course.title}</h2>
              <p>{course.slug}</p>
              <span>{course.id}</span>
            </>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};

export default Courses;
