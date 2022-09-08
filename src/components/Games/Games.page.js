import { useEffect,memo,useRef } from "react";
import './games.css';

const GamesPage = () => {
  const mainRef = useRef(null);

    useEffect(() => {
      mainRef.current.style.animationPlayState = 'running'
    },[]);

  return (
    <>
    <div className="main-game-page" ref={mainRef} >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus provident eius neque eveniet libero, magnam, enim reiciendis molestias soluta asperiores quas tenetur vel nesciunt minima odit, dolores consequatur animi?
    </div>
    </>
  )
}

export default memo(GamesPage)