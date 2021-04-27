import styles from './index.module.css';

export default function Section(props){
  return (
    <div className={styles.section} {...props}>
      { props.children }
    </div>
  )
}
