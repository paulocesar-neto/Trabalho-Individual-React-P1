import { useState,useEffect } from "react";
import styles from './styles.module.css';


export const BarraNav = () => {
   const [instalar,setInstalar] = useState(false);
   

   useEffect (() => {
      
   },[])
   

    return (
        <>
       <div className={styles.container}>
           
          <button
          type="button"
          className="instalar"
          onClick={() => setInstalar(true)}
        >
          Instale o Steam
        </button>

    </div>
    <div className={styles.container2}>

      <div className={styles.p}>
        <p>Explorar</p>
        <p>Recomendações</p>
        <p>Categorias</p>
        <p>Formas de Jogar</p>
        <p>Seções especiais</p>
        </div>  

        <div className={styles.buscaContainer}>
          <input className={styles.inputBuscar} type="busca" 
          placeholder="Buscar na loja"/>
        </div>
    </div>
    </>
     
    )
}