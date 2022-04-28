import React, { FC } from 'react'
import TableHeader from './TableHeader'
import './index.scss'
import TableContent from './TableContent'
type Props = {
  headerTitles: (string | JSX.Element)[],
  bodyData: ((string | number | JSX.Element)[])[]
  customFooter: FC,
}
export default function Table(props: Props) {
  return (
    <table className='Table' >

      <TableHeader data={props.headerTitles}></TableHeader>
      {props.bodyData.length > 0 ?
        <TableContent data={props.bodyData}></TableContent>
        : <tbody>
          <tr><td className='noProductText' colSpan={props.headerTitles.length}>
            No products in cart
          </td></tr>
        </tbody>
      }

      {<props.customFooter></props.customFooter>}
    </table>

  )
}
