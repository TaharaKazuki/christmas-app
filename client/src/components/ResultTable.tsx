import type { FC } from 'react'

type Props = {
  attempts: number
  earnPoint: number
  flag: boolean
}

const ResultTable: FC<Props> = ({ attempts, earnPoint, flag }) => {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>名前</td>
            <td>回答数</td>
            <td>獲得得点</td>
            <td>最終結果</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Sample太郎</td>
            <td>{attempts}</td>
            <td>{earnPoint}</td>
            <td>{flag ? '合格' : '不合格'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
