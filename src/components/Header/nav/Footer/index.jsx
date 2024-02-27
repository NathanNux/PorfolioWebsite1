import styles from './style.module.scss';

export default function index() {
    return (
        <div className={styles.footer}>
            <a>LinkedIn</a>
            <a>Instagram</a>
            <a>Blog</a>
            <a>Twitter</a>
        </div>
    )
}