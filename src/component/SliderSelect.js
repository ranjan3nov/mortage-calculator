import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({ data, setData }) => {
  console.log(data)
  const max_limit = 10000
  const min_limit = 1000
  return (
    <>
      <SliderComponent min={min_limit} max={max_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={500}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value * 0.2,
          loanAmount: value * 0.8,
          homeValue: value
        })}
        label="Home Value"
        unit="Rs" amount={data.homeValue} />

      <SliderComponent
        label="Down Payment"
        min={0} max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: (data.homeValue - value),
          downPayment: value
        })}
        unit="Rs"
        amount={data.downPayment}
      />

      <SliderComponent
        label="Loan Amount"
        min={0} max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        unit="Rs" amount={data.loanAmount}
        onChange={(e, value) => setData({
          ...data,
          downPayment: (data.homeValue - value),
          loanAmount: value
        })}
      />

      <SliderComponent
        min={2} max={18}
        label="Intrest Rate"
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={1}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
        unit="%" amount={data.interestRate}
      />
    </>
  )
}

export default SliderSelect
