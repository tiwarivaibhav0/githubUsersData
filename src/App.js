import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [DatailsLoaded, setDatailsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setDatailsLoaded(true);
      });
  });

  return (
    <div className="App">
      <h1>Github Users Data </h1>{" "}
      {items.map((item) => (
        <div className="users">
          {" "}
          <ol key={item.id}>
            <h2> userName: {item.login}</h2>
            <span>
              Node_ID: "{item.node_id}"
              <br />
              Profile:{" "}
              <a href={item.html_url} target="blank">
                {item.html_url}
              </a>
              <br />
              <br />
              <span>
                Url:
                <a href={item.url} target="blank">
                  {item.url}
                </a>
              </span>
              <p>Type: {item.type}</p>
            </span>
          </ol>
        </div>
      ))}
    </div>
  );
}

export default App;
