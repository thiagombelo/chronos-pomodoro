import styles from './styles.module.css'

type ChildrenProps = {
    children: React.ReactNode;
}

export function Container({children}: ChildrenProps) {
    return (
        <div className={styles.container}>
                <div className={styles.content}>
                    <section>
                        {children}
                    </section>
                </div>
            </div>
    )
}