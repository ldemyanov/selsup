import { useState } from "react";
import StyledList from "./components/styled-list";

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

const randomHex = (): Color => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${n.slice(0, 6)}`;
};

const App: React.FC<Props> = ({ model, params }) => {

  const [values, setValues] = useState<Model>(model);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, paramId: number) => {
    const index = model.paramValues.findIndex((p) => p.paramId === paramId);

    if (index > -1) {
      setValues((state) => {
        state.paramValues[index].value = event.target.value;
        state.colors = [randomHex(), randomHex()]
        return state;
      })
    }
  }

  const getModel = () => console.log(values);

  return (
    <>
      <StyledList>
        {params.map((param: Param) => (
          <li key={param.id}>
            <label
              htmlFor={`Input ${param.id}`}
            >
              {param.name}
            </label>
            <input
              id={`Input ${param.id}`}
              type={param.type}
              name={param.name}
              placeholder={`to input please ${param.name}`}
              defaultValue={model.paramValues.find((p) => p.paramId === param.id)?.value}
              onChange={(event) => handleChange(event, param.id)}
            />
          </li>
        ))}
      </StyledList>
      <button onClick={() => getModel()}>Get Model</button>
    </>
  )
}

export default App
