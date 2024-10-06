import { useContext } from 'react'
import NiceModal from '@ebay/nice-modal-react'

import { MyListContext } from '../../App.tsx'
import { IUser } from '../../shared/types.ts'
import styles from './List.module.scss'
import Form from '../Form/Form.tsx'

const List = () => {
    const [data] = useContext(MyListContext)

    return (
        <ul className={styles.list}>
            {data.map((user: IUser) => (
                <li className={styles.list__item} key={user.id}>
                    <div
                        onClick={() => NiceModal.show(Form, { user })}
                        className={styles.list__item__pen}
                    >
                        &#9998;
                    </div>
                    <p className={styles.list__item__name}>{user.name}</p>
                    <p>{user.age}</p>
                    <p>{user.role}</p>
                    <p>{user.status}</p>
                    <p>{user.email}</p>
                </li>
            ))}
        </ul>
    )
}

export default List
