import React, { useReducer } from 'react';

type FormState = {
  name: string;
  email: string;
};

type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string }
  | { type: 'RESET_FORM' };

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return { name: '', email: '' };
    default:
      return state;
  }
};

export const MyForm = () => {
  const [formState, dispatch] = useReducer(formReducer, { name: '', email: '' });

  const handleSubmit = () => {
    if (!formState.name || !formState.email) {
      alert('Something is not filled');
    } else {
      alert('Success');
    }
  };

  return (
    <form>
      <input
        type="text"
        value={formState.name}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })
        }
        placeholder="Name"
      />
      <input
        type="email"
        value={formState.email}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'email', value: e.target.value })
        }
        placeholder="Email"
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <button type="button" onClick={() => dispatch({ type: 'RESET_FORM' })}>
        Reset
      </button>
    </form>
  );
};
