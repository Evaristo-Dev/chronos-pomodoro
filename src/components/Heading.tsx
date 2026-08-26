import styles from './Heading.module.css';
type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {

  return (
    <header className={styles.heading}>
      {props.children}
    </header>
  )
  
}