// import React from 'react'
type Props = {
  data: (string | JSX.Element)[]
}
export default function TableHeader(props: Props) {
  return (
    <thead data-testid='table-head'>
      <tr>
        {props.data.map((d, i) => {
          return <th key={i}>{d}</th>
        })}
      </tr>
    </thead>
  )
}
