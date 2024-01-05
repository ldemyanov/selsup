import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { type Model, type Param } from './App'

const model: Model = {
  paramValues: [
    {
      paramId: 1,
      value: "M"
    },
    {
      paramId: 2,
      value: "180 см"
    },
  ],
  colors: ["#2251e5", "#e6223e"],
}

const params: Param[] = [
  {
    id: 1,
    name: "Размер",
    type: 'string',
  },
  {
    id: 2,
    name: "Рост",
    type: 'string',
  }
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App model={model} params={params}/>
  </React.StrictMode>,
)
