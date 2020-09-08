import React from 'react';
import Card from './Card'
import {OnlineTe} from '../containers/OnlineTe';

const OnlineT =()=>{
    return(
        <div className="OnlineT" id="OnlineT">
            <h1 className="text-white text-center">
                Online Teachers
            </h1>
            <div className="row">
                {
                    OnlineTe.map((user,i)=>{
                        return(
                        <div className="col-3 m-5">
                            <Card 
                            key = {i}
                            pic = {OnlineTe[i].pic}
                            description = {OnlineTe[i].description}
                            name = {OnlineTe[i].name}
                            link={OnlineTe[i].link}
                            linkName = {OnlineTe[i].linkName}
                            />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default OnlineT