import './App.css'

function App() {
  const apple: string = 'apple';

  const generateArray = (length: number) => [...Array.from(Array(length).keys())];

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis repellendus nesciunt recusandae exercitationem accusamus animi atque dolorum voluptas, voluptatum ipsam et reprehenderit. Laudantium.

      <p>{apple}</p>

      {generateArray(12)}
    </div>
  )
}

export default App
