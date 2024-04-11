import { useParams } from 'react-router-dom';
import courses from '../data/courses';

const SingleCourse = () => {
  const params = useParams();
  // console.log(params.slug);

  const course = courses.find((course) => course.slug === params.slug);
  console.log(course);

  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h3>{course.id}</h3>
    </>
  );
};

export default SingleCourse;
