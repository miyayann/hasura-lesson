import { FC,FormEvent,useState} from "react"
import {useReactiveVar} from "@apollo/client"
import { todoVar } from "../cacsh"

export const LocalStateA: FC = () => {
  const [input ,setInput] = useState('')
  const todos = useReactiveVar(todoVar)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todoVar([...todoVar(), {title: input}])
    setInput('')
  }
  return (
    <div>
      <p>makeVar</p>
      {todos?.map((task, index) => {
        return (
          <p>{task.title}</p>
        )
      })}
      <form onSubmit={handleSubmit}></form>
    </div>
  )
}
