import React from 'react';

const Card =({pic,description,name,linkName,link})=>{
    return(
        <div>
            <div className="card">
                <img className="card-img-top" src={`${pic}`} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} class="btn btn-primary">{linkName}</a>
                </div>
            </div>
        </div>
    );
}

export default Card