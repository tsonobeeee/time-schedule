import {useState, useEffect} from "react"
import { firebaseStore } from "./firebase";

function App() {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState([]);

  useEffect(() => {
    const searchTime = async() => {
      // Firestoreのコレクションを指定してデータ取得。今回は全量を検索
      const res = await firebaseStore.collection('time').get();
      if (res.empty) return [];
      let timeList = [];
      // DocumentData型にはmapメソッドが定義されていないため、forEachのループでデータを加工
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
      <div>
        class{time && time[0] && time[0].class}{" "}{time && time[0] && time[0].hour}時{time && time[0] && time[0].minute}分
      </div>
      <div>
        class{time && time[1] && time[1].class}{" "}{time && time[1] && time[1].hour}時{time && time[1] && time[1].minute}分
      </div>
    </div>
  );
}

export default App;
