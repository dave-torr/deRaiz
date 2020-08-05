
export function SocialComp(){
    return(
        <>
        <div className="SocialBar1"> 
            <a href="https://www.instagram.com/draizhuertos/" target="_blank" rel="noopener noreferrer">
                <img className="SocialLink" src="./assets/externals/instaLogoBlk.png" />
                    </a>
            <a href="https://www.facebook.com/DRaizHuertos/" target="_blank" rel="noopener noreferrer">
                <img className="SocialLink" src="./assets/externals/fbLogoBlk.svg" />
                    </a>
            <a href="https://wa.me/593998752496" target="_blank" rel="noopener noreferrer">
                <img className="SocialLink" src="./assets/externals/wAppLogoBlk.png" />
                    </a> 
        </div>

<style jsx>{`

    .SocialBar1{
        display: flex;
        flex-direction: row;

    }
    .SocialLink{
        width: 35px;
        margin: 10px;
    }


    }`}</style>
        </>
    )
} 