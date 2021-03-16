import React from 'react';
import './styles.css';

function Home() {
  return (
    <div className="container-body">
      {/* <img src={imgBDG} alt="" className="img-bdg"/> */}

      <div className="img-bdg">
        <p className="title-body-bdg">Venha para a BDG</p>
        <p className="description-bdg">Aqui temos os melhores campeonatos e ADMs</p>
        <a type="button" href="/" className="btn btn-default btn-bdg-inscr">INSCREVA-SE</a>
      </div>

      <div className="adms-bdg row">
        
        <div className="adm-container col-md-4">
          <div className="imagem-adm ched"> </div>

          <p className="adm-name">Chedinha #BDG</p>
          <p className="adm-description">Responsavel pelo audio e visual do grupo e tambem nossa main Cypher</p>

          <div className="container-icons-adm">              
            <a href="/" className="icon-adm"><i className="fab fa-instagram"></i></a>
            <a href="/" className="icon-adm"><i className="fab fa-twitch"></i></a>
          </div>
        </div>
        
        <div className="adm-container col-md-4">
          <div className="imagem-adm gota"> </div>

          <p className="adm-name">Gotinha #BDG</p>
          <p className="adm-description">Responsavel pelo audio e visual do grupo e tambem nossa main Cypher</p>

          <div className="container-icons-adm">              
            <a href="/" className="icon-adm"><i className="fab fa-instagram"></i></a>
            <a href="/" className="icon-adm"><i className="fab fa-twitch"></i></a>
          </div>
        </div>
        
        <div className="adm-container col-md-4">
          <div className="imagem-adm camila"> </div>

          <p className="adm-name">iPoderosa #BDG</p>
          <p className="adm-description">Responsavel pelo audio e visual do grupo e tambem nossa main Cypher</p>

          <div className="container-icons-adm">              
            <a href="/" className="icon-adm"><i className="fab fa-instagram"></i></a>
            <a href="/" className="icon-adm"><i className="fab fa-twitch"></i></a>
          </div>
        </div>

      </div>

      <div className="campeonatos-bdg">
        <h1 className="title-section">Campeonatos</h1>

        <div className="content-section container">

        </div>
      </div>
    </div>
  );
}

export default Home;
