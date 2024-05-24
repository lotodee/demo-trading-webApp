
import BuyandSell from '../../organisms/BuyandSell/BuyandSell'
import Chart from '../../organisms/Chart/Chart'
import DisplayPanel from '../../organisms/DisplayPanel/DisplayPanel'
import OrderBook from '../../organisms/OrderBook/OrderBook'
import Orders from '../../organisms/Orders/Orders'
import MainTemplate from '../../templates/MainTemplate/MainTemplate'
import './Homepage.css'
const Homepage = () => {
  return (
    <div>
     <MainTemplate>
      <DisplayPanel/>
      <main className='main'>
      <div className="main__left">
      <section className="main__section main__section--top">
        <Chart/>
       <OrderBook/>
      </section>
      <section className="main__section main__section--bottom">
<Orders/>
      </section>
      </div>
      <aside className="main__right">
      <BuyandSell/>
      </aside>
      </main>
      </MainTemplate>

    </div>
  )
}

export default Homepage
