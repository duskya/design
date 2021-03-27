import headoneimg from '../../image/headerone.jpg'
import './index.css'
function Header(){
    return(
        <>
        <div className='headone-img'>
            <img src={headoneimg} />
        </div>
        {/* <img src={require('../../image/headone.jpg')} alt='' /> */}
        
        <div>hahahah</div>
        </>
    )
}
export default Header