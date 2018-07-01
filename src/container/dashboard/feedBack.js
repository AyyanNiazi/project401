import  React from 'react'
import {feedBackHandler} from '../../store/action/feedbackAction'
import {connect} from 'react-redux'

class FeedBack extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            feedback: '',
            username: '',
          
        }

    }
        onFeedBackSubmit(e){
        e.preventDefault();
        this.props.feedBackSubmit(this.state)
        this.setState({
            feedback: '',
            username: '',
        
        })
}

    render(){
        return (
            <div>
                <form  onSubmit={this.onFeedBackSubmit.bind(this)} >
                    <label>
                        Name:
                    </label>
                    <input type="text"
                    value={this.state.username}
                    onChange={e  => this.setState({username: e.target.value})}
                    />
                    <br/>
                    <label>
                        FeedBack
                    </label>
                    <input type="textarea"
                    value={this.state.feedback}
                    onChange={e  => this.setState({feedback: e.target.value})}
                    />
                   
                   <button type="submit" className="btn btn-primary" > Submit  </button>

                   {this.state.error}
                </form>
            </div>
        )
    }
}

//redux

const mapStateToProps = (state) => {
        return {}
}

const mapDispatchToProps = (dispatch)  => {
    return {  
            feedBackSubmit : (feedBackDetails) =>
             dispatch ({
                 type: "FEEDBACK",
                 payload: feedBackDetails
             })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedBack);