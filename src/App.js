import { useState, useEffect } from "react";

const App = () => {
  const [result, setResult] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  //api variables:
  const app_id = "09f998f8"
  const app_key = "cf6f5b4fc1a75f2126b3c1ffc2e402d2"
  const language = "en-gb"
  const word_id="example"
  const headers_list = { "app_id" : app_id, "app_key" : app_key };
  const url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word_id.toLowerCase();

  useEffect ( () => {
    fetch(url, { crossDomain : true, method: "POST", mode : "cors", headers : headers_list} )
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("Error: " + error.message));

    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     setIsLoaded(true);
    //     setResult(result);
    //     setIsError(false);
    //   },
    //   ( error ) => {
    //     setIsLoaded(true);
    //     setIsError(true);
    //     console.log(error.message);
    //   }
    // )
  }, []);
  
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
