import { useState } from "react"
import { Button } from "./components/ui/button"
import { Item, ItemContent } from "./components/ui/item"

function App() {
  const [inputDisplay, setInputDisplay] = useState("")
  const [outputDisplay, setOutputDisplay] = useState("")
  const [outputError, setOutputError] = useState("")

  const calculateInput = () => {
    if (inputDisplay.includes("/0")) {
      setOutputError("/0 is not allowed")
      return
    }


    try {
      const output = eval(inputDisplay)
      setOutputDisplay(output)
      console.log({ output })
    } catch (error) {
      setOutputError("Fix the Input")
      console.error(error)
    }
  }

  const handleClick = (value: string) => {
    setOutputError("")

    if (value === "C") {
      setInputDisplay("")
      setOutputDisplay("0")
      return
    }

    if (value === "+/-") {
      setInputDisplay((prev) => {
        if (!prev) return prev

        const parts = prev.split(/([+\-*/])/)
        const lastNum = parts[parts.length - 1]

        if (lastNum.startsWith("-")) {
          parts[parts.length - 1] = lastNum.slice(1)
        } else {
          parts[parts.length - 1] = "(-" + lastNum + ")"
        }

        return parts.join("")
      })
      return
    }

    if (value === "X") {
      console.log("Press X")
      setInputDisplay((prev) => prev.slice(0, -1))
      return
    }

    if (value === "=") {
      calculateInput()
      return
    }

    setInputDisplay((prev) => prev + value)
  }


  const buttons = ["C", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "X", "="]
  return (
    <>
      <h1 className="font-bold">Build a Calculator</h1>

      <div className="max-w-[400px] p-4 w-full mx-auto">
        {outputError && <Item>
          <ItemContent>{outputError}</ItemContent>
        </Item>}


        <div className="text-end">
          <span>{inputDisplay}</span>
        </div>

        <div className="text-end font-semibold text-5xl">
          <span>{outputDisplay || "0"}</span>
        </div>

        <div className="grid grid-cols-4">
          {buttons.map((item) => (
            <Button onClick={() => handleClick(item)}>{item}</Button>
          ))}
        </div>
      </div>



    </>
  )
}

export default App
