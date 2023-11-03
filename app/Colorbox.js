import Button from './Button';

const Colorbox=({setData, setBoxColor})=>{
    const onClickHandler = (color) =>{
        setBoxColor(color)
        setData(pre => (console.log(pre[color])||{...pre, [color]:pre[color]+1}))
    }
  return (
    <div className='ButtonContainer'>
        <div>
            <Button buttonColor={'red'} buttonName={"Red"} onClickHandler={onClickHandler}/>
            <Button buttonColor={'blue'} buttonName={"Blue"} onClickHandler={onClickHandler}/> 
        </div>
        <div>
            <Button buttonColor={'green'} buttonName={"Green"} onClickHandler={onClickHandler}/>
            <Button buttonColor={'pink'} buttonName={"Pink"} onClickHandler={onClickHandler}/> 
        </div>
    </div>
  )
}

export default Colorbox;

