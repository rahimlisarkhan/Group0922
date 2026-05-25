import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { sum } from './utils/sum/sum';
import { Button } from './Button';

function App() {
  const [count, setCount] = useState(0);

  const result = sum(count * 4, 10, 20);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React :{result}</h1>
      <div className="card flex gap-3 flex-wrap justify-center">
        <Button onClick={() => setCount((count) => count + 1)}>
          Primary — count {count}
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button disabled>Disabled</Button>
        <p className="text-amber-400 text-2xl lg:text-6xl">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="text-5xl border-2 border-amber-500 border-t-orange-600 p-5 flex flex-col lg:flex-row">
        <span className="bg-amber-300 p-2">1</span>
        <span className="bg-red-300 p-2">2</span>
      </div>
      <p className="text-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
