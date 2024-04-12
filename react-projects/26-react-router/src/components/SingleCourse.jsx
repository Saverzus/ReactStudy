import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import NotFound from './NotFound';

const SingleCourse = () => {
  const params = useParams();

  const course = courses.find((course) => course.slug === params.slug);

  const navigate = useNavigate();

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course]);

  // Simply show NotFound component
  // if (!course) {
  //   return <NotFound />;
  // }
  console.log(course);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        {' '}
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
