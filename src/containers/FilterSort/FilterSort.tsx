import useFilterSort from './useFilterSort.ts'
import NiceModal from '@ebay/nice-modal-react'

import Form from '../Form/Form.tsx'
import styles from './FilterSort.module.scss'
import Button from '../../components/Button.tsx'

const FilterSort = () => {
    const { sortUsers, filterUsers, statusSortABC, nameSortABC } =
        useFilterSort()

    return (
        <div className={styles.container}>
            <div className={styles.container__filters}>
                <Button
                    text="Sort by name"
                    color="primary"
                    onClick={() => sortUsers(nameSortABC, 'name')}
                />
                <Button
                    text="Sort by status"
                    color="primary"
                    onClick={() => sortUsers(statusSortABC, 'status')}
                />
                <input
                    className={styles.container__filters__input}
                    type="text"
                    onChange={(e) => filterUsers(e.target.value)}
                    placeholder="Type to filter by name..."
                />
            </div>
            <Button
                text="Create new user"
                onClick={() => NiceModal.show(Form)}
            />
        </div>
    )
}

export default FilterSort
