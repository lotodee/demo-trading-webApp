
import "./OrderBook.css"

import Image from '../../atoms/Image/Image'
import DropDownWIthValue from '../../molecules/DropdownWIthValue/DropDownWIthValue'
import OrderIcons from '../../molecules/OrderIcons/OrderIcons'

import Table from '../../molecules/Table/Table'
import TableBody from '../../molecules/Table/TableBody/TableBody'
import arrow from "../../../assets/images/arrowupgreen.svg"
import BlankPanel from "../../atoms/BlankPanel/BlankPanel"
import TextButton from "../../atoms/TextButton/TextButton"
const OrderBook = () => {
  return (
    <div className="orderbook">
        {/* <OrderOptionsPanel/> */}
        <BlankPanel>
        <TextButton text="Order Book" className="orderbook__options-item orderbook__options-item--active"/>
    <TextButton text="Recent Trades" className="orderbook__options-item"/>
        </BlankPanel>
   
    <div className="orderbook__top">
        <OrderIcons/>
       
        <DropDownWIthValue text={10}/>
     
    </div>

    {/* <!-- top order table --> */}
    <div className="orderbook-table">
        <Table />
       
        
    </div>

    {/* <!-- readings --> */}
    <div className="readings">
        <p className="readings__text readings__text--active">36,641.20</p>

       <Image src={arrow} className="readings__icon"/>
        <p className="readings__text">36,641.20</p>
    </div>
    {/* <!-- readings --> */}


    {/* <!-- bottom order table --> */}
    <div className="bottom-orderbook-table">
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
       <TableBody price="36920.12" amount="0.758965" total="28,020.9" />
    </div>
    
    {/* <!-- bottom order table --> */}
</div>
  )
}

export default OrderBook