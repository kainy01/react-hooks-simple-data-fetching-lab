// create your App component here
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  console.log(data);
  return (
    <div>
      <img src={data} alt="A Random Dog" />
    </div>
  );
};

export default App;
