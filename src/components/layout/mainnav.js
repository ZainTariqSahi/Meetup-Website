import {useContext} from 'react';
import FavoritesContext from '../../store/favourites-context';
import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';
function MainNav(){
    const favoriteCtx=useContext(FavoritesContext)
    return(
        <header className={classes.header}>
        <div className={classes.logo}> React Meetups</div>
            <ul>
               <li><Link to="/" > All Meetups</Link></li>
              <li> <Link to="/newmeetups" > Add a new meetup</Link></li>
               <li><Link to="/favourites" > My Favourites
               <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
               </Link></li>
            </ul>

        
        </header>
    )
}

export default MainNav;