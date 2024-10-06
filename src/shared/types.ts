export interface IUser {
    id: number
    name: string
    email: string
    age: number
    role: 'admin' | 'user'
    status: 'active' | 'inactive'
}
