import  React from 'react'
import { auth, database} from '../../../component/config/firebase'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import * as matui from 'material-ui'
import './feedback.css'
const style = {
    container: {
      position: 'relative',
    },
    refresh: {
      display: 'inline-block',
      position: 'relative',
    },
    title: {
        cursor: 'pointer',
      },
  };

 
class ViewFeedBack extends React.Component{
constructor(props){
    super(props)
    this.state={
        feedback: '',
        // key: []
    }
}
handleToggle = () => this.setState({open: !this.state.open});
handleClick(){
  auth.signOut().then(()=> { }).catch(err => {
    console.log("error raised from sign out ", err )
  }); this.props.history.push('/');
}

componentDidMount(){
    auth.onAuthStateChanged(() => {
        if(auth.currentUser){
            const userRef = database.ref("feedback").child('userFeedBack/');
            userRef.on('value', snap=>{
                var val = snap.val();
                var keys = Object.keys(val)
                var i;
                let allUsers = [];
                let feedback  = '';
                let name = '';
                
                feedback="admin123@gmail.com"
                for(i=0; i<keys.length; i++){
                    var userK = keys[i]
                    if(val[userK]){
                        allUsers.push({
                            username:val[userK].username,
                            feedback:val[userK].feedback
                        })
                    }
                }

                this.setState({
                    feedback:allUsers
                })

            })
        }
    })
}

    render(){
        return (
            <div>
                <div>
                <matui.AppBar
                 title={<span 
                    style={style.title}  > Users FeedBack</span>}
                //  onTitleClick={onhandleClick}
                 onClick={this.handleToggle} 
                 iconElementRight={<matui.FlatButton label="Log out" onClick={(event) => this.handleClick(event)}/>}
               />  
                </div>
              <div>
                {this.state.feedback === '' ? 
                  <RefreshIndicator
                  size={60}
                  left={420}
                  top={320}
                  loadingColor="#FF9800"
                  status="loading"
                  style={style.refresh}
                    />
                 :
                    this.state.feedback.map( (item, index ) => ( 
                    <div  key={index } >
                         <matui.Paper 
                           className="paper" zDepth={5} rounded={false} >
                            <p> USERNAME : <h2> {item.username} </h2> </p>
                            <p > FEEDBACK : <h2>{item.feedback}</h2>  </p>
                            <hr/>
                         </matui.Paper>
                    </div>
                ))}
              </div>
            </div>
        )
    }
}

export  default ViewFeedBack