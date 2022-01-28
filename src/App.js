import { useState, useEffect } from "react";

const App = () => {
  const [result, setResult] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  //TODO: can't make api requests from client side, pass the info onto personal sever(python?) 
  //then call it from there
  //create a proxy server to call the api

  const app_id = "09f998f8"
  const app_key = "cf6f5b4fc1a75f2126b3c1ffc2e402d2"
  const language = "en-gb"
  const word_id="example"
  const headers_list = { "app_id" : app_id, "app_key" : app_key };
  const url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word_id.toLowerCase();

  return (
    <h1>hello</h1>
  );

  /*
  if (isError)
  {
    return (
      <>
        <p1>Error</p1>
      </>
    );
  }
  else if (!isLoaded)
  {
    return (
      <h1>Loading ... </h1>
    );
  }
  else
  {
    return (
      <ul>
        {result.map ( item => (
          <li key={item.id}>
            {item[0]}
          </li>
        ))}
      </ul>
    );
  }
  */
}

export default App;
