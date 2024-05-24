/* eslint-disable react/prop-types */

import Text from "../../atoms/Text/Text"
import "./LabelandValue.css"
const LabelandValue = ({labelText,valueText,labelClassName,valueClassName}) => {
  return (
    <div className="values-panel__top-label">
        <Text text={labelText} className={`values-panel__text ${labelClassName}`}/>
        <Text text={valueText} className={`values-panel__value ${valueClassName}`}/>
                   

</div>
  )
}

export default LabelandValue
