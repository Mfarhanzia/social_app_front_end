import React from 'react';
import './style.scss';

export default function radioBtn(props){

    return(
        <>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <ButtonGroup>
                    <Button color="primary" onClick="">Active</Button>
                    <Button color="primary" onClick="">Radio</Button>
                    <Button color="primary" onClick="">Radio</Button>
                </ButtonGroup>
            </div>
        </>
    )
}