
import useReloadOnMount from '../../../../useReloadOnMount'
import "./Exchange.css"
import MainTemplate from '../../templates/MainTemplate/MainTemplate'
const Exchange = () => {
 useReloadOnMount()
  return (
    <MainTemplate>
    <div className='Exchange'>Exchange</div>
    </MainTemplate>

  )
}

export default Exchange