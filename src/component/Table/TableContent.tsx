import React from 'react'
type Props = {
  data: ((string | number | JSX.Element)[])[]
}
export default function TableContent(props: Props) {
  return (
    <tbody>
      {props.data.map((d, i) => {
        return <tr key={i}>
          {d.map((d, i) => {
            return <td key={i}>
              {d}
            </td>
          })}

        </tr>
      })}
    </tbody>
  )
}
