
const Footer =()=>(
    <>
    <footer>
        <div className="footerContainer" > 
          <br></br>
          <br></br>
          D´Raiz
          <br></br>
           Huertos           
          <br></br>
          -
          <br></br>
          Quito Ecuador
          <br></br>
          {`{waira.nuna}`} 
          <br></br>
          2020 
          <br></br>
          &copy;  
        </div>
        <div className="decoDivCont" >
            <div className="decoDiv deco1" ></div>
            <div className="decoDiv deco2" ></div>
            <div className="decoDiv deco3" ></div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-family: 'Poiret One', cursive;
          font-weight: 600; 
          letter-spacing: 2px;
          font-size: 1.1em;
        }

        .decoDivCont{
          width: 100%;
          margin-top: 3px;
        }

        .decoDiv{
          margin-top: 1px;
          width: 100%;
          height: 2px;
        }
        .deco1{
                background-color: rgb(179, 132, 3);
        }
        .deco2{
                background-color: rgb(95, 95, 99);
        }
        .deco3{
                background-color: rgb(181, 21, 0);
        }

      `}</style>
    </>
); export default Footer;