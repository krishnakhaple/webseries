import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

//@ts-ignore
const Ama=()=>
{
    return(<> <Card imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}/>
    </>
    )
}

const Amaz=()=>
(<>
  <Ama/>  
  </>
)

export default Amaz;