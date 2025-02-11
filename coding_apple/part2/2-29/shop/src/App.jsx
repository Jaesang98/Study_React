import { useState, useTransition, useDeferredValue } from "react";

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let state1 = useDeferredValue(name);

  return (
    <div>
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
