import { useState, useTransition, useDeferredValue } from "react";
import { useLike } from "./hooks/like";

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let state1 = useDeferredValue(name);

  let [like, addLike] = useLike();

  return (
    <div>
      <h4>{like}</h4>
      <button
        onClick={() => {
          addLike();
        }}
      >
        ❤
      </button>
      <br></br>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />

      {isPending
        ? "로딩중"
        : a.map(() => {
            return <div>{name}</div>;
          })}

      {a.map(() => {
        return <div>{state1}</div>;
      })}
    </div>
  );
}

export default App;
