const Navbar =()=> (
  <>
  <nav>
    <a style={{color: "black" }} href="./assets/pdfs/draizCatalog.pdf" download>
    <p style={{fontWeight: "600", margin: "unset", marginTop: "6px" }}> 
    ¡Descarga nuestro catálogo en P F D aqui!
    </p>
    </a>
  </nav>
    
    <br></br>
    <br></br>
  <style jsx>{`
  nav{
      font-family: 'Poiret One', cursive;
      position: fixed;
      justify-content: center;
      display:flex;
      top: 0px;
      width: 100%;
      z-index: 2;
      height: 30px;
      background-color: rgb(153, 153, 102);
      box-shadow: 3px 3px 10px rgba(114, 112, 112, 0.986);
    }


    h3{
      font-size: 1em
    }

    
    `}</style>


  </>
)

export default Navbar