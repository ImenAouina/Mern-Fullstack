import React from 'react'
import {Tabs,Tab,Button} from 'react-bootstrap'

const Display = (props) => {
    const { tabList, remove }=props;
    
return (
    <div>
        <Button variant='success'> <a style={{textDecoration:'None'}} href='/add'>Add</a></Button>
               
            <Tabs 
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className='="mb-3'>
                    {
                        tabList.map((tab,index) => 
                            <Tab eventKey={index} title={tab.title} > {tab.content}
                                <Button onClick={() => remove(index)} variant='danger'>Delete</Button>

                            </Tab>
                        )
                    }

            </Tabs>    
    </div>
)
}

export default Display
