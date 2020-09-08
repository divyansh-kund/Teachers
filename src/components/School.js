import React from 'react';
import Card from './Card'
import {SchoolT} from '../containers/SchoolT';

const School =()=>{
    return(
        <div className=" SchoolT" id ="SchoolT">
            <h1 className="text-white text-center">
                School Teachers
            </h1>
            <div className="row ">
                {
                    SchoolT.map((user,i)=>{
                        return(
                        <div className="col-3 m-5">
                            <Card
                            key = {i}
                            pic = {SchoolT[i].pic}
                            description = {SchoolT[i].description}
                            name = {SchoolT[i].name}
                            link={SchoolT[i].link}
                            linkName = {SchoolT[i].linkName}
                            />
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default School