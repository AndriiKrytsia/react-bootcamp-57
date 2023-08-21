

export const PointsOptions = ({options, onLeavePoint}) => {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={option}>
          <button onClick={() => onLeavePoint(option, index + 1)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}


