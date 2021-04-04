import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMentors } from './redux/actions/mentors';
import MentorList from './components/MentorList';

function App() {
  const dispatch = useDispatch();
  const mentors = useSelector(state => state.mentors.mentors);
  const loading = useSelector(state => state.mentors.loading);
  const error = useSelector(state => state.mentors.error);

  useEffect(() => {
    dispatch(getMentors());
  }, [dispatch]);
  return (
    <>


      {mentors.length > 0 && !loading && mentors.map((mentor) => (
        <MentorList mentor={mentor} key={mentor.id} />
      ))}

      {mentors.length === 0 && !loading && <p>No mentors</p>}

      {error && !loading && <p>{error}</p>}
    </>
  );
}

export default App;
