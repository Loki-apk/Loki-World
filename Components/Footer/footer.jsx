import'./footer.css'

function Footer(){
    return(
        <>
          <div className="footer">
            <p>&copy; {new Date().getFullYear()} DTM Machines All rights reserved</p>
            <ul>    
                <li>Terms of services</li>
                <li>Privacy policy</li>
            </ul>
          </div>
        </>
    )
}

export default Footer