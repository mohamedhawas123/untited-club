
import './businessCard.css'
import Qr from '../../images/qr.png'

const BusinessCard = () => {
    console.log(Qr)
    return (
        <>
        <div className='bussins-circle' ></div>
        <div className="bussins-container" >
            <div className='bussiness-title'> 
            <p>محمد محمد</p>
            </div>
            
            <div className='job'> 
            <p> Business Administrator</p>
            </div>

            <div className='imagee'> 
            <img src={Qr}  className='imagee-img' alt="img"  />
            </div>

            <div className='email'> 
            <span>asdasd@gmail.com</span> <p>:Email</p> 
            </div>

            <div className='phone'> 
            <span>05999552</span> <p>:Phone</p> 
            </div>

            <div className='university'> 
            <span>Alexandria</span><p>:University</p> 
            </div>


        </div>
        </>
    )
}

export default BusinessCard