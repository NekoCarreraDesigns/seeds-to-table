import React from "react";
import "./Main.css";

function Main() {
  return (
    <div>
      <img
        className='image-of-food'
        alt='table-of-food'
        src='https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'></img>
      <aside className='about-joe-seeds'>
        Joe Seeds is a classically trained chef, climber, snowboarder, and ready
        to cook your next dinner party. Born in Philadelphia he learned how to
        cook from watching Martin Yan, The Frugal gourmet, and Gordon Ramsay
      </aside>
    </div>
  );
}
export default Main;
