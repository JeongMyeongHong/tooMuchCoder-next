import React, {useEffect, useRef, useState} from "react";
import styles from "@/styles/Sidebar.module.css";

export function Sidebar({ width=280, children }){
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();
  
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(width); 
      await setOpen(false);
    }
  }

  useEffect(()=> {
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })


  return (
    <div className={styles.container}>
      <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
          <button onMouseEnter={() => toggleMenu()}
          className={styles.button} >
            {<img src="https://e7.pngegg.com/pngimages/744/300/png-clipart-bart-simpson-marge-simpson-homer-simpson-the-simpsons-season-11-bart-simpson-face-text.png"
             alr="contact open button" className={styles.openBtn}/>
            }
          </button>
        
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
