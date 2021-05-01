import { useRouter } from 'next/router';
import Link from 'next/link';
// import useSWR from 'swr';
import axios from "axios";
import { useEffect, useState } from "react";

import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/card';

import Loader from "react-loader-spinner";

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
      <div className="main centered">
        <h2>Please Wait while we load the data...</h2>

        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    )
  }

  return (
    <div>
      <Header title={`Character: ${user.name}`} />

      <hr />

      <Card
        {...user}
      />

      <p>
        <button className="backButton" onClick={() => {
          router.back();
        }}>Go Back</button>
      </p>

      <Footer />

    </div>
  );
}