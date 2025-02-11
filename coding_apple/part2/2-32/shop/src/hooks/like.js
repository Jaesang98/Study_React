import { useState } from "react";

export function useLike() {
  let [like, setLike] = useState(0);
  function addLike() {
    setLike((a) => {
      return a + 1;
    });
  }

  return [like, addLike];
}
