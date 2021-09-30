import classes from './layout.module.css';
import MainNav from './mainnav';
function Layout(props){
return(
    <div>
<MainNav/>

<main className={classes.main}>
    {props.children}
</main>
</div>
)
}
export default Layout;