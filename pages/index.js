import styles from '../styles/app.module.scss'
import Link from "next/link";


export default function Home({document}) {

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <tr >
          <th className={styles.th}>Дата документа</th>
          <th className={styles.th}>Наименование документа</th>
        </tr>
        {document.map(doc => {
          const newDate = doc.docDate.split('-').reverse().join('.')
          return <tr className={styles.tr} key={doc.id}>
            <td className={styles.td}>{newDate}</td>
            <td className={styles.td}><Link href={`/page/[id]`} as={`/page/${doc.id}`}><a>{doc.displayName}</a></Link></td>
          </tr>
        } )}
      </table>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch( 'http://localhost:4200/document')
  const document = await res.json()
  return {
    document
  }
}
