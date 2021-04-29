import { useRouter } from 'next/router';
import Link from 'next/link';
// import useSWR from 'swr';
import axios from "axios";
import { useEffect, useState } from "react";

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function UserProfile () {

  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.debug(router);

  useEffect(() => {
    if (id > 0){
      const response = axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data[0]);
          setLoading(false);
        }
      }).catch((error) => {
        console.debug(error);
        setError(true);
      });
    }
  }, [id]);

  if (error) {
    return (
      <div>
        <h2>Error: Something happened</h2>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <h2>Please Wait</h2>
      </div>
    )
  }

  return (
    <div>
      <Header title={`Character: ${user.name}`} />

      <hr />

      <img src={user.img} height="200" />

      <h3>Occupation:</h3>
      <div>
        Birthday: {user.birthday}
      </div>
      <ul>
        {user.occupation.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>

      <p>
        <button className="backButton" onClick={() => {
          router.back();
        }}>Go Back</button>
      </p>

      <Footer />

    </div>
  );
}