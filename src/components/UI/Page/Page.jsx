import Section from "../Section/Section.jsx";
import styles from './Page.module.scss'

const Page = ({children, title}) => {
        return <Section>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </Section>
    }
;
export default Page;
