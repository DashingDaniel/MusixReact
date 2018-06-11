import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import { fetchLyrics } from '../actions/index';

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            authorName: '',
            songName: ''
        };

        this.onAuthorNameChange = this.onAuthorNameChange.bind(this);
        this.onSongNameChange = this.onSongNameChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onAuthorNameChange(event){
        
        this.setState({authorName: event.target.value});
    }
    onSongNameChange(event){
        this.setState({songName: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchLyrics(this.state.authorName,this.state.songName);
    }
    render(){
        return(
            <div className="container">
            <br/>
            <h1>MusixMatch API</h1>
            <h3>Search Lyrics For your songs</h3>
            <br/><br/>
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="author" className="col-lg-2 control-label">Author Name</label>
                    <input type="text" name="author" value={this.state.authorName} onChange={this.onAuthorNameChange} className="form-control" id="author" placeholder="Author Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="songName" className="col-lg-2 control-label">Song Name</label>
                    <input type="text" name="songName" value={this.state.songName} onChange={this.onSongNameChange} className="form-control" id="songName" placeholder="Song Name"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchLyrics},dispatch);
}

export default connect(null,mapDispatchToProps)(Search);