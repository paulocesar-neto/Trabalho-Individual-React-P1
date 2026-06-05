import { useState, useEffect } from 'react'
import fundo from './assets/top-10-igr-steam-1.jpg'
import styles from './App.module.css'
import { BarraNav } from './pages/BarraNav'

export default function App() {

  const [iniciar, setIniciar] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
   if(iniciar > 0){
     alert("Seu Email é: "+email+"\nSua Senha é: "+senha)
   }
  }, [iniciar])

  return (
    <>
      <BarraNav />
      <div className={styles.background}>

        <div className={styles.title}>
          <h1>Iniciar Sessão</h1>
        </div>

        <div className={styles.loginContainer}>

          <div className={styles.textContainer}>
            
            <div className={styles.labelAzul}>
            <p className={styles.label}>INICIAR SESSÃO COM NOME DE USUÁRIO</p>
            </div>
            <input className = {styles.textBox} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <div className={styles.labelCinza}>
            <p className={styles.label}>SENHA</p>
            </div>
            <input className = {styles.textBox}  type="password" value={senha} onChange={(s) => setSenha(s.target.value)} />
            
            

            <div className={styles.check}>
            <input className={styles.checkButton} type="checkbox" name="" id="lembre-me" />
            <p>Lembre me</p>
           </div>

            <button
              type="button"
              className={styles.button}
              onClick={() => setIniciar(iniciar + 1)}
            >
              Iniciar sessão
            </button>

            <a className={styles.link} href="">Não consigo iniciar a sessão</a>

          </div>

          <div className={styles.qrCode}>
            <p className={styles.titleQR}>OU COM CÓDIGO QR</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Qr-code-ver-10.png" alt="qrCode" />
            <p className={styles.txtQR}>Use o  
              <a  className={styles.link}href=""> aplicativo móvel do Steam </a> 
              <br /> para iniciar a sessão com um 
              <br /> código QR</p>
          </div>

        </div>
      </div>


    </>
  )
}


