import React, { Component } from 'react'
import { connect } from 'react-redux';

class LyricsList extends Component{
    render(){
        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading text-center">Lyrics</div>
                    <div className="panel-body">{this.props.lyrics.lyrics_body}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ lyrics }){
    return { lyrics };
}

export default connect(mapStateToProps)(LyricsList);