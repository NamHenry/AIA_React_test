type Props = {
  data: ((string | number | JSX.Element)[])[]
}
export default function TableContent(props: Props) {
  return (
    <tbody data-testid='table-body'>
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
