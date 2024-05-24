
import useReloadOnMount from '../../../../useReloadOnMount'
import MainTemplate from '../../templates/MainTemplate/MainTemplate'
import "./Wallet.css"
const Wallet = () => {
  useReloadOnMount()
  return (
    <MainTemplate>
 <div className='wallet'>Wallet</div>
    </MainTemplate>
   
  )
}

export default Wallet