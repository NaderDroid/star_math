import React from "react";
import './StarMatch'
import utils from './Utils'

class StarPad extends React.Component{
    render() {
        return(
            <div>
                {utils.range(1,this.props.count).map(id =>
                    <div key={id} className={'star'}/>
                )}
            </div>
        )
    }
}

export default StarPad