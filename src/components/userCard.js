import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



  
  class UserCard extends React.Component {
      constructor(){
          super();
          
        }
        

render(){
    console.log('user props', this.props.user)
    return (<div>
         
       
       <Card className={'card'}>
      <CardActionArea>
        <img className={'media'} src={this.props.user.avatar_url} alt='avatar photo'></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {this.props.user.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <ul>
          <li>Bio: {this.props.user.bio}</li>
          <li>Email: {this.props.user.bio}</li>
          <li>Repos: {this.props.user.repos_url}</li>
          <li>Location: {this.props.user.location}</li>
           </ul>  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

          </div>)
            } }
export default UserCard;