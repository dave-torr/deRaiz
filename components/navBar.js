import Link from 'next/link'

const Navbar =()=> (
  <>
        <nav>
          <Link href="/" as="/" >
          <h3 className="NavLink"> Landing</h3>
          </Link>
          <Link href="/v2" as="/v2" >
          <h3 className="NavLink"> tipologia.1 </h3>
          </Link>
          <Link href="/v3" as="/v3" >
          <h3 className="NavLink"> tipologia.2</h3>
          </Link>
        </nav>
        
      <style jsx>{`
      nav{
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          position: fixed;
          justify-content: center;
          display:flex;
          top: 0px;
          width: 100%;
          background-color: white;
          z-index: 2;
          height: 40px;
        }
        .NavLink{
          padding-top: 6px;
          font-weight: 200;
          letter-spacing: 3px;
          margin: unset;
          margin: 0px 18px
        }

        .NavLink:hover{
          cursor: pointer;
        }

        h3{
          font-size: 1em
        }

        
        `}</style>


  </>
)

export default Navbar