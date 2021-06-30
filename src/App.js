import { useState, useEffect } from "react"
import { firebaseStore } from "./firebase";

function App() {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState([]);

  useEffect(() => {
    const searchTime = async() => {
      const res = await firebaseStore.collection('time').get();
      if (res.empty) return [];

      let timeList = [];
      res.forEach(doc => {
        timeList.push(doc.data());
      })

      setTime(timeList);
    }

    searchTime();
    setLoading(false);
  }, []);


  return (
    <div style={{ textAlign:"center", verticalAlign:"middle" }}>
      {!loading && time.map((item) => (
        <div key={item.class}>
          class{item.class}{" "}{item.hour}時{item.minute}分
        </div>
      ))}
    </div>
  );
}

export default App;
