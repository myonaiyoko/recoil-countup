import React from "react"
import { useRecoilState } from "recoil"
import { counterState } from "../atoms/CounterAtom"

const CounterForm: React.FC = () => {
  const [count, setCount] = useRecoilState(counterState)

  function countUp(): void {
    var countUp = count + 1
    setCount(countUp)
  }

  function countReset(): void {
    setCount(0)
  }
  
  return (
    <div>
      <input type="text" value={ count } name="count" style={{ margin: 12 }} readOnly /><br />
      <input type="button" value="COUNT UP" onClick={() => countUp()} /><br />
      <input type="button" value="COUNT RESET" onClick={() => countReset() } /><br />
    </div>
  )
}
export default CounterForm