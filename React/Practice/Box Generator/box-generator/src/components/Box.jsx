import React from 'react'


const Box = (props) => {
    const {boxes} =props;
    console.log(props);
  return (
    <div> 
    {boxes.map((item,index) => 
        <div key={index} 
            style={{
              display:"inline-block",
              backgroundColor: item.color_box,
              margin:"10px",
              width:item.width_box+"px",
              height:item.height_box+"px",
            }}>
        </div> 
    )}
    </div>
  );
}

export default Box;
