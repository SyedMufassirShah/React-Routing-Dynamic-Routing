import React from "react";
import { useEffect, useState } from "react";

const Cards = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const dataRequest = await fetch(
        `https://jsonplaceholder.typicode.com/photos`
      );
      const serverRespnse = await dataRequest.json();
      setData(serverRespnse);
      console.log(serverRespnse);
    }
    getData();
  }, [state]);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Data Fetching Through API</h2>
      </header>
      <div className="display">
        {data.map((element, index) => {
          return (
            <div className="card" key={index}>
              <div className="cardTop">
                <img src={element.thumbnailUrl} alt="thumbnail" />
              </div>
              <div className="cardBottom">
                <h5>Id: {element.id}</h5>
                <h3>Title: {element.title}</h3>
                <h5>Album Id: {element.albumId}</h5>
                <a href={element.url}>Visit Link</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
