import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App(){
    return(
        <section className='App'>
        <TwitterFollowCard isFollowing={true} userName="Jotha" name="Jonathan Cortés"/>
        <TwitterFollowCard isFollowing={true} userName="Guise" name="Guisela Silva"/>
        <TwitterFollowCard isFollowing={true} userName="Galleta" name="Galleta Cortés"/>
        </section>
     
    )
}