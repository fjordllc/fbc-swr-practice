import useSWR from "swr";
import "./App.css";

const fetcher = (...args) => fetch(...args);

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const { data, error, isValidating } = useSWR([url, headers], fetcher);

  return (
    <>
      {isValidating && <p>Loading...</p>}
      {data && <p>Status : OK</p>}
      {error && <p>Failed to load.</p>}
    </>
  );
}

export default App;
