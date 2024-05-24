/* eslint-disable react/prop-types */

import Text from '../../atoms/Text/Text'
import Image from '../../atoms/Image/Image'

const LabeledIcon = ({labelText,LabelIcon}) => {
  return (
    <div className="buy-sell__input-label buy-sell__input-label--limit">
        <Text text={labelText} className="buy-sell__label-text"/>
        <Image src={LabelIcon} className="buy-sell__label-icon"/>
                  
                </div>
  )
}

export default LabeledIcon
