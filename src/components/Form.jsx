import { useState } from 'react';

export const Form = ({ onSubmit, nameButton }) => {
  const [text, setText] = useState('');

  const hendleChange = event => {
    setText(event.target.value);
  };

  const hendleSubmit = event => {
    event.preventDefault();
    if (!text.trim()) {
      alert('Add Todo');
      return;
    }

    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={hendleSubmit}>
      <input required value={text} type="text" onChange={hendleChange} />
      <button type="submit">{nameButton}</button>
    </form>
  );
};
