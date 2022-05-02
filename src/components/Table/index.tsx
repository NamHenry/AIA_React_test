import { FC } from 'react'
import TableHeader from './head/TableHeader'
import './index.scss'
import TableContent from './body/TableContent'
type Props = {
  headerTitles: (string | JSX.Element)[],
  bodyData: ((string | number | JSX.Element)[])[]
  customFooter: FC,
}
export default function Table(props: Props) {
  return (
    <table className='table-wrapper' >
      <TableHeader data={props.headerTitles} />
      {
        props.bodyData.length > 0
          ?
          <TableContent data={props.bodyData} />
          :
          <tbody>
            <tr>
              <td className='no-product-text' colSpan={props.headerTitles.length}>
                No products in cart
              </td>
            </tr>
          </tbody>
      }
      {<props.customFooter />}
    </table>
  )
}
