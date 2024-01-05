import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styled from '@emotion/styled';

interface Model {
  paramValues: ParamValue[],
  colors: Color[],
}

interface Param {
  id: number,
  name: string,
  type: string,
}

interface ParamValue {
  paramId: number,
  value: string,
}

type Color = `#${string}`;

const randomHex = (): Color => {
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${n.slice(0, 6)}`;
};

const StyledUl = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;

  & li {
    list-style-type: none;
  }
  & label {
    display: inline-block;
    margin: 0 10px 0 0;
    width: 100px;
  }
  & input {
    width: 250px;
  }
`;

interface Props {
  params: Param[],
  model: Model,
}

const App: React.FC<Props> = ({ model, params }) => {
  const [values, setValues] = useState<Model>(model);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, paramId: number) => {
    const index = model.paramValues.findIndex((p) => p.paramId === paramId);

    if (index > -1) {
      setValues((state: Model) => {
        state.paramValues[index].value = event.target.value;
        state.colors = [randomHex(), randomHex()];
        return state;
      });
    }
  };

  const getModel = () => console.log(values);

  return (
    <>
      <StyledUl>
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
      </StyledUl>
      <button onClick={() => getModel()}>Get Model</button>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App 
      model={{
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
      }}
      params={[
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
      ]}
    />
  </React.StrictMode>,
);
