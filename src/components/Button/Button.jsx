export const Button = ({handleClick,text}) => {
  return (
    <button type='button' onClick={handleClick}>{text}</button>
  )
}
