import React from 'react';
import './Card.scss';
import {connect} from 'react-redux';
import {loadCardDetail} from './cardAction';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {data:[]};
    }
    

    componentDidMount() {
        this.props.loadCardDetail({
                name: "Hiya",
                method: 'get',
                url: 'https://rickandmortyapi.com/api/character/',
                param:'gg'
                
            }
        );
    }

    render() {
        const {data, msg} =  this.props.cardReducer;
        return(
            <div className="card-container">
                {!data &&  <div className="error-msg">{msg}</div>}
                {data && data.results && data.results.map(item=>(
                    <div key={item.id   } className="one-card">
                        <div className="img-container">
                            <img src={item.image} alt={item.name}/>    
                        </div>
                        <div className="name-id-container">
                            <div>{item.name}</div>
                            <div>
                                <span>{item.id}</span>
                                <span>{item.created}</span>
                            </div>
                        </div>
                        <div className="card-details">
                            <div><span>Status:</span><span>{item.status}</span></div>
                            <div><span>Species:</span><span>{item.species}</span></div>
                            <div><span>Gender:</span><span>{item.gender}</span></div>
                            <div><span>Origin:</span><span>{item.origin.name}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> (
    {
        loadCardDetail: (param)=>dispatch(loadCardDetail(param))
    }
)

const mapStateToProps = (state)=> {
    const { cardReducer } = state;
    return {
        cardReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);