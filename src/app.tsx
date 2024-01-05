import InputList from "./components/input-list";

export interface Model {
  paramValues: ParamValue[],
  colors: Color[],
}

export interface Param {
  id: number,
  name: string,
  type: string,
}

type Color = `#${string}`;

interface ParamValue {
  paramId: number,
  value: string,
}

interface Props {
  params: Param[],
  model: Model,
}

const App: React.FC<Props> = ({ model, params }) => {
  return (
    <InputList>
      {params.map((param: Param) => (
        <li key={`input key ${param.id}`}>
          <label
            htmlFor={`Input ${param.id}`}
          >
            {param.name}
          </label>
          <input
            id={`Input ${param.id}`}
            type={param.type}
            placeholder={`to input please ${param.name}`}
            value={model.paramValues.find((p) => p.paramId === param.id)?.value}
          />
        </li>
      ))}
    </InputList>
  )
}

export default App
