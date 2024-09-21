import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App(){
    const formatUserName =(userName)=>`@${userName}`
    return(
        <section className='App'>
        <TwitterFollowCard  formatUserName={formatUserName} userName="guise" name="Guisela Silva"/>
        <TwitterFollowCard  formatUserName={formatUserName} name="Galleta Cortés"/>
        <TwitterFollowCard  formatUserName={formatUserName} userName="Jotha" name="Jonathan Cortés"/>
        </section>
     
    )
}