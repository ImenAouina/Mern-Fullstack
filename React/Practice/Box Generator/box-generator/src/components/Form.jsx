import React,{ useState }  from 'react';


const Form = (props) => {
    //const {box, setBox} =props;
    const [colorBox, setColorBox]=useState("");
    const [heightBox, setHeightBox]=useState("");
    const [widthBox, setWidthBox]=useState("");
    
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(colorBox);
        console.log(heightBox)
        //console.log(box);
        props.addBox(colorBox,heightBox,widthBox );
        setColorBox("");
        setHeightBox("");
        setWidthBox("");
      
    }
    const divstyle={
      marginBottom:'10px',
      border:'1px solid black',
      backgroundColor:'lightgrey',
      width:'300px',
      height:'50px',
      display:'flex',
      alignItems:'center'
    }
    const stylediv={
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }
    
    
  return (
    <div style={stylediv}>
        <form onSubmit={handleSubmit}>
            <div style={divstyle}>
              <label>Color: </label>
              <input type="text" name="colorBox" value={colorBox} onChange={(e)=>setColorBox(e.target.value)}/>
            </div>
            <div style={divstyle}>
              <label>Height: </label>
              <input type="text" name="heightBox" value={heightBox} onChange={(e)=>setHeightBox(e.target.value)}/>
            </div>
            <div style={divstyle}>
              <label>Width: </label>
              <input type="text" name="widthBox" value={widthBox} onChange={(e)=>setWidthBox(e.target.value)}/>
            </div>
            <button>Add Box</button>
            
        </form>
      
    </div>
  )
}

export default Form
