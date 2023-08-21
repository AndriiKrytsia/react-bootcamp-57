

export const Statistics = ({total, options}) => {
  return (
    <>
      <ul>
        {options.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </>
  );
}


