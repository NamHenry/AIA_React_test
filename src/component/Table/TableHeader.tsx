import React from 'react'
type Props = {
  data: (string | JSX.Element)[]
}
export default function TableHeader(props: Props) {
  return (
    <thead>
      <tr>
        {props.data.map((d, i) => {
          return <th key={i}>{d}</th>
        })}
      </tr>
    </thead>
  )
}
