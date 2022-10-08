import React from 'react'

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if(props.max > 0){
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar-inner'>
        <div className='char-bar-filled' style={{'height': barFillHeight}} ></div>
      </div>
    </div>
  )
}

export default ChartBar