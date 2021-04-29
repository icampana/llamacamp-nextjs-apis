import { useEffect, useState } from "react";
import axios from 'axios';

import Header from '../../components/header';
import Footer from '../../components/footer';

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
      <div>
        <h2>Please Wait</h2>
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
