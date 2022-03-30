import React, { ChangeEvent, useState, MouseEvent, useRef } from "react";

export default function BudgetManager() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [total, setTotal] = useState(0);
  chrome.storage.sync.get(["total"], (budget) => {
    setTotal(budget.total);
  })
  function fn() {
    chrome.storage.sync.get(["total"], function (budget) {
      let newTotal = 0;
      if (budget.total) {
        newTotal = parseInt(budget.total);
      }

      if (inputRef.current?.value) {
        newTotal += parseInt(inputRef.current.value);
      }
      chrome.storage.sync.set({ total: newTotal });
      setTotal(newTotal)
    });
  }
  return (
    <div>
      <h1>总数是{total}</h1>
      <input type="text" ref={inputRef} /> <button onClick={fn}>添加</button>
    </div>
  );
}
