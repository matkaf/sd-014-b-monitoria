import React, { useContext, useEffect, useState }from 'react';
import MyContext from '../context/MyContext';

function Home () {
  const { users } = useContext(MyContext)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    users.length && setLoading(true)
  }, [users]);

  if (!loading) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <div>
      {users[0].first_name}
    </div>
  )
}

export default Home;
