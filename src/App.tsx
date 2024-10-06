import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import NiceModal from '@ebay/nice-modal-react'

import List from './containers/List/List.tsx'
import FilterSort from './containers/FilterSort/FilterSort.tsx'
import { IUser } from './shared/types.ts'
import mockUsers from './shared/mockData.ts'
import './App.css'

export const MyListContext = createContext<
    [IUser[], Dispatch<SetStateAction<IUser[]>>]
>([[], () => {}])

function App() {
    const [data, setData] = useState<IUser[]>([])
    const localData = localStorage.getItem('data')

    useEffect(() => {
        !localData && localStorage.setItem('data', JSON.stringify(mockUsers))
    }, [])

    useEffect(() => {
        const data = localData ? JSON.parse(localData) : []
        setData(data)
    }, [localData])

    return (
        <MyListContext.Provider value={[data, setData]}>
            <NiceModal.Provider>
                <FilterSort />
                <List />
            </NiceModal.Provider>
        </MyListContext.Provider>
    )
}

export default App
