import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomNumber } from "./utils/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

const TOTAL_LOCATIONS = 126;

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(TOTAL_LOCATIONS)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="px-4 bg-black text-white font-mono overflow-x-hidden">
      <Location location={location} setLocation={setLocation} />
      <ResidentList residents={location?.residents ?? []} />
    </main>
  );
}

export default App;
