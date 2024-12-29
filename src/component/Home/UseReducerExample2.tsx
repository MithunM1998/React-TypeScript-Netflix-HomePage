import React,{useReducer} from 'react';

type clResult={
    result:number;
    num1:number;
    num2:number;
}

type Action =
  | { type: 'UPDATE_FIELD'; field: keyof clResult; value: number }
  | { type: 'RESET_FORM' }
  | { type:'ADDITION'}
  | {type:'SUBTRACTION'}
  |{type:'MULTIPLICATION'}

  const initalState:clResult={result:0,num1:0,num2: 0};

  const calReducer=(state:clResult,action:Action):clResult=>{
    switch(action.type){
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
            case 'ADDITION':
                return { ...state, result: state.num1 + state.num2 };
              case 'SUBTRACTION':
                return { ...state, result: state.num1 - state.num2 };
              case 'MULTIPLICATION':
                return { ...state, result: state.num1 * state.num2 };
              case 'RESET_FORM':
                return { ...initalState };
              default:
                return state;
        }
    }

    export const UseReducerCalculation=()=>{
        const[state,dispatch]=useReducer(calReducer,initalState);

        return(
            <div>
                 <form>
      <input
        type="number"
        value={state.num1}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'num1', value: parseFloat(e.target.value) })
        }
        placeholder="num1"
      />
      <input
        type="number"
        value={state.num2}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'num2', value: parseFloat(e.target.value) })
        }
        placeholder="num2"
      />
      <button type="button" onClick={()=>dispatch({type:'ADDITION'})}>
        ADD
      </button>
      <button type="button" onClick={()=>dispatch({type:'SUBTRACTION'})}>
        sub
      </button>
      <button type="button" onClick={()=>dispatch({type:'MULTIPLICATION'})}>
        mul
      </button>
      <button type="button" onClick={() => dispatch({ type: 'RESET_FORM' })}>
        Reset
      </button>
    </form>
    <h1>result:{state.result}</h1>
            </div>
        )
    }
  


