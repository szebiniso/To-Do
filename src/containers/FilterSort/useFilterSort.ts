import { useContext, useState } from 'react'
import { MyListContext } from '../../App.tsx'
import { IUser } from '../../shared/types.ts'

const useFilterSort = () => {
    const [, setData] = useContext(MyListContext)
    const users = JSON.parse(localStorage.getItem('data') || '[]')

    const [nameSortABC, setNameSortABC] = useState<boolean>(false)
    const [statusSortABC, setStatusSortABC] = useState<boolean>(false)

    const sortUsers = (abc: boolean, sortBy: 'name' | 'status') => {
        sortBy === 'name'
            ? setNameSortABC(!nameSortABC)
            : setStatusSortABC(!statusSortABC)
        const sortedData = [...users].sort((a, b) => {
            if (abc) {
                return a[sortBy].localeCompare(b[sortBy])
            } else {
                return b[sortBy].localeCompare(a[sortBy])
            }
        })

        setData(sortedData)
    }

    const filterUsers = (value: string) => {
        const filteredData = users.filter((user: IUser) =>
            user.name.toLowerCase().startsWith(value.toLowerCase())
        )
        setData(filteredData)
    }

    return { sortUsers, filterUsers, nameSortABC, statusSortABC }
}

export default useFilterSort
