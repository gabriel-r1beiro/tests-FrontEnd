import { useState } from "react"

export function App () {
  const [listAdd, setListAdd] = useState(["Gabriel", "Kiara", "Neia"])
  const hadleAddList = () => {
    setListAdd(set => [...set, 'Goku shshs'])
  }
  return (
    <div>
      <button onClick={hadleAddList}>Adicionar</button>
      <ul>
        {listAdd.map(list => {
          return (
            <li>{list}</li>
          )
        })}
      </ul>
    </div>
  )
}
