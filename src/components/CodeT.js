import React from 'react';
import Card from './Card'
import {CodeTe} from '../containers/CodeTe';

const CodeT =()=>{
    return(
        <div className="CodeT " id ="CodeT">
            <h1 className="text-white text-center">
                Coding Teachers
            </h1>
            <div className= "row">
                {
                    CodeTe.map((user,i)=>{
                        return(
                        <div className="col-3 m-5">
                            <Card 
                            key = {i}
                            pic = {CodeTe[i].pic}
                            description = {CodeTe[i].description}
                            name = {CodeTe[i].name}
                            link={CodeTe[i].link}
                            linkName = {CodeTe[i].linkName}
                            />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default CodeT