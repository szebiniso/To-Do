import { IUser } from './types.ts'

export const initialValues = {
    name: '',
    email: '',
    age: 0,
    role: 'admin' as 'admin' | 'user',
    status: 'active' as 'active' | 'inactive',
}

export const mockUsers: IUser[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 28,
        role: 'admin',
        status: 'active',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        age: 34,
        role: 'user',
        status: 'inactive',
    },
    {
        id: 3,
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        age: 22,
        role: 'user',
        status: 'inactive',
    },
    {
        id: 4,
        name: 'Alice Williams',
        email: 'alice.williams@example.com',
        age: 29,
        role: 'admin',
        status: 'active',
    },
    {
        id: 5,
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        age: 41,
        role: 'admin',
        status: 'inactive',
    },
    {
        id: 6,
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        age: 27,
        role: 'admin',
        status: 'active',
    },
    {
        id: 7,
        name: 'William Garcia',
        email: 'william.garcia@example.com',
        age: 37,
        role: 'user',
        status: 'inactive',
    },
    {
        id: 8,
        name: 'Sophia Martinez',
        email: 'sophia.martinez@example.com',
        age: 31,
        role: 'admin',
        status: 'active',
    },
    {
        id: 9,
        name: 'David Wilson',
        email: 'david.wilson@example.com',
        age: 45,
        role: 'user',
        status: 'inactive',
    },
    {
        id: 10,
        name: 'Emma Anderson',
        email: 'emma.anderson@example.com',
        age: 30,
        role: 'admin',
        status: 'active',
    },
]

export default mockUsers
