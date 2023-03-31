// // ---------<to do list>---------

// import { useState } from "react";

// function App() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event) => setToDo(event.target.value);
//   const [toDos, settoDos] = useState([]);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     settoDos((currentTodo) => [toDo, ...currentTodo]);
//     setToDo("");
//   }
//   console.log(toDos.map((inputData, index) => <li key={index}> {inputData}</li>));
//   return <div>
//     <h1>My To Dos ({toDos.length})</h1>
//     <form onSubmit={onSubmit}>
//       <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do list....." />
//       <button> Add to do</button>
//     </form>
//     <hr />
//     <ul>
//       {toDos.map((inputData,index) => <li key={index}> {inputData}</li>)}
//     </ul>
//   </div>
// }
// export default App;
// // --------------------------------------------------------


//---------------------------------------------------------
// coin tracker //
// import { useEffect, useState } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [myMoney, setmyMoney] = useState(0);
//   const onChange = (event) => setmyMoney(event.target.value);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
//   }, []);
//   return (
//     <div>

//       <h1> The Coin!!! ({coins.length}) </h1>
//       {loading ? <strong>loading...</strong> : null}
//       <ul>
//         {coins.map((coin) => <li> {coin.name} ( {coin.symbol}) : {coin.quotes.USD.price} usd </li>)};
//       </ul>

// <h1> The Coin!!! {loading ? "" : `(${coins.length})`} </h1>
//       <input onChange={onChange} type="number" placeholder="your money to exchange" />
//       {loading ? <strong>loading...</strong> : <select>
//         {coins.map((coin) => <option> {coin.name} ( {coin.symbol}) : {myMoney / coin.quotes.USD.price} </option>)}
//       </select>}
//     </div>)
// }

// export default App;

// Movie App

import { useState, useEffect } from 'react';
import Movie from './components/Movie';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);

  const getMovie = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const json = await response.json();
    setMovie(json.data.movies);
    setLoading(false);
    // console.log(json.data.movies);
  }
  useEffect(() => {
    getMovie();
  }, []);
  // useEffect(() => {
  //   fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230228")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovie(json.boxOfficeResult.dailyBoxOfficeList);
  //       setLoading(false);
  //     });
  // }, []);
  console.log(movies);
  return <div>
    <h1>My Movie list ({movies.length})</h1>
    {loading ? (<h1> Loading....</h1>) : (

      <div>
        {movies.map((movie) =>
          <Movie
            key={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres} />
        )}
      </div>
    )}

  </div>;
}

export default App;





