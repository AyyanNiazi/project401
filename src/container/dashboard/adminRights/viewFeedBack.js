import  React from 'react'
import {connect} from 'react-redux'

class ViewFeedBack extends React.Component{


    render(){
        return (
            <div>
                <h2> Feed Back </h2>
                Total Number Of FeedBack: {this.props.allFeedBack}

                <ul>
                      {this.props.allFeedBack.map((feedback, index) => { 
                console.log( "feedback");
                      return (
                      
                  <li key = {index}> {feedback.userName} </li>
              )
          })}
                 

                </ul>
            
            </div>
        )
    }
}


function mapStateToProps (state)  {

    return  {
        allFeedBack: state.feedback
    }
      
};

function mapDispatchToProps (dispatch)  {

    return  {
    }
      
};



export default connect(mapStateToProps, mapDispatchToProps) (ViewFeedBack);
