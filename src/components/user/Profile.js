import React, {useState, useEffect} from 'react'
import {getProfile, play} from '../../store/actions/userActions';
import cherry from './../../assets/icons8-cherry-100.png';
import apple from './../../assets/icons8-apple-96.png';
import lemon from './../../assets/icons8-lemon-96.png';
import banana from './../../assets/icons8-banana-200.png';
import { connect } from 'react-redux';

 const Profile = ({rdc:{user, error, result, reel}, getProfile, play}) => {  // destructing the state properties and the action creators
   useEffect(() => { 
      
           getProfile();    // calling the action creator method which is responsible of getting the user's profile data when the page is loaded
       
   }, [])
   
   

    return (
        <div className="container mt-5">
            
            {user.name?<div>welcome {user.name}, your email is {user.email} <br/>
            <button className="btn btn-success" onClick={()=>play()}>play a game</button>

      {reel[0] && <div>  {/* showing the slot machine data when the user click on the game button and the reel array returned from the server */}
     <p>your coins are {user.coins} and the result is {result} and your reel is {reel.map(x=><p>{x}</p>)}</p>
     <div className="d-flex justify-content-around "> 
      <img src={reel[0] == 'cherry'?cherry:reel[0] === 'apple'?apple:reel[0] === 'banana'?banana:lemon} alt="" />
      <img src={reel[1] == 'cherry'?cherry:reel[1] === 'apple'?apple:reel[1] === 'banana'?banana:lemon} alt=""/>
      <img src={reel[2] == 'cherry'?cherry:reel[2] === 'apple'?apple:reel[2] === 'banana'?banana:lemon} alt=""/>
    </div>
    </div>}
    
            </div>:<div><p className="text-center alert alert-danger"> please sign up or sign in</p></div>} 

  
        </div>
    )
};
const mapStateToProps = state => {
    return {
      rdc: state.authReducer
    };
  };
export default connect(mapStateToProps, {getProfile, play})(Profile);