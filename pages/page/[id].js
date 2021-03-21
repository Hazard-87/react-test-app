import styles from "../../styles/app.module.scss";
import Link from "next/link";

const Page = ({page}) => {
    const newDate = page.docDate.split('-').reverse().join('.')

    return (
        <div className={styles.wrapper}>
            <table>
                <tr>
                    <th className={styles.th}>Наименование документа</th>
                    <th className={styles.th}>Описание документа</th>
                    <th className={styles.th}>Дата документа</th>
                </tr>
                <tr className={styles.row}>
                    <td className={styles.td}>{page.displayName}</td>
                    <td className={styles.td}>{page.description ? page.description : 'no data'}</td>
                    <td className={styles.td}>{newDate}</td>
                </tr>
            </table>
            <Link href='/'><a>Back</a></Link>
        </div>
    );
};

export default Page;

Page.getInitialProps = async ({query}) => {
    const res = await fetch( `http://localhost:4200/document/${query.id}`)
    const page = await res.json()

    return {
        page
    }
}