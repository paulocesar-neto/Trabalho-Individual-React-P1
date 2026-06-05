import { useState, useEffect } from "react";
import styles from './styles.module.css';


export const BarraNav = () => {
  const [instalar, setInstalar] = useState(false);

  return (
    <>
      <div className={styles.container}>


        <div className={styles.infos}>

          <a href=""><img className={styles.steamLogo} src="src\assets\bb4f_platform_logo_3.png" alt="steam" /></a>
          <a className={styles.loja} href="">LOJA</a>
          <a className={styles.linkInfo} href="">COMUNIDADE</a>
          <a className={styles.linkInfo} href="">SOBRE</a>
          <a className={styles.linkInfo} href="">SUPORTE</a>

          <div className={styles.buttonInstal}>
            <button

              type="button"
              className={styles.instalar}
              onClick={() => setInstalar(true)}
            ><img className={styles.iconInstall} src="src\assets\seta-instal.png" alt="" />
              Instale o Steam
            </button>
          </div>
          <div className={styles.iniciarSessão}>
          <a href="">iniciar sessão</a>
          <p>|</p>
          <a href="">idioma</a>
          </div>
        </div>
      </div>
      <div className={styles.container2}>

        <div className={styles.p}>
          <p>Explorar</p>
          <img className={styles.seta} src="src\assets\seta-para-baixo.png" alt="seta" />
          <p>Recomendações</p>
          <img className={styles.seta} src="src\assets\seta-para-baixo.png" alt="seta" />
          <p>Categorias</p>
          <img className={styles.seta} src="src\assets\seta-para-baixo.png" alt="seta" />
          <p>Formas de Jogar</p>
          <img className={styles.seta} src="src\assets\seta-para-baixo.png" alt="seta" />
          <p>Seções especiais</p>
          <img className={styles.seta} src="src\assets\seta-para-baixo.png" alt="seta" />
        </div>

        <div className={styles.buscaContainer}>
          <input className={styles.inputBuscar} type="search"
            placeholder="Buscar na loja" />

          <button type="button" className={styles.search}>
            <img src="src\assets\search-icon.png" alt="" />
          </button>
        </div>
      </div>

    </>

  )
}