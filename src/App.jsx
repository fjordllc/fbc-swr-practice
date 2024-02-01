import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p className="status">Failed to load.</p>;
  if (isLoading) return <p className="status">Loading...</p>;

  return <>{data && <p className="status">Status : {data.description} </p>}</>;
}

export default App;
