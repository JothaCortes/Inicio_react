
import { useState } from "react"
// añadir hooks para dar mas funcionalidad a los componentes

export function TwitterFollowCard ({ formatUserName, userName='Desconocido', name }){
    // console.log(isFollowing)
    const [isFollowing,setIsFollowing] = useState(false)
    
     const imageSrc = `https://unavatar.io/${userName}`
     const text= isFollowing ? 'Siguiendo':'Seguir'
     const buttonClassName = isFollowing?'tw-followCard-button is-following':'tw-followCard-button'

     const handleClick = () =>{
        setIsFollowing(!isFollowing)
     }

    return(
          <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt="avatarJotha" 
            src={imageSrc} />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
                </button>
        </aside>
       </article>
    )
} 