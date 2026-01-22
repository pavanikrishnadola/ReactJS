import React ,{ useState,useEffect} from 'react';
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
function CustomCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () =>setCount(count + 1);
  useDocumentTitle(`You Clicked ${count} times`);
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
}
export default CustomCounter;
