import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then(setUser);
  }, []);

  if (!user) return <p>Loading...</p>;

  return <h3>Hello {user.name}</h3>;
}

export default User;
