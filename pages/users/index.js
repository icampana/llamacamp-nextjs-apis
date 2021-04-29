import { useEffect, useState } from "react";
import axios from 'axios';

import Header from '../../components/header';
import Footer from '../../components/footer';

import Loader from "react-loader-spinner";

export default function Users() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const response = axios.get(`https://www.breakingbadapi.com/api/characters`)
    .then((response) => {
      if (response.status === 200) {
        setUserList(response.data);
        setLoading(false);
      }
    }).catch((error) => {
      console.debug(error);
      setError(true);
    });
  }, []);

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
      <Header title="Users List" />

      <ul>
        {userList.map((user) => {
          return (
            <li>
                <a href={`/users/details?id=${user.char_id}`}>{user.name}</a>
            </li>
          )
        })}
      </ul>

      <Footer />
    </div>
  );
}
