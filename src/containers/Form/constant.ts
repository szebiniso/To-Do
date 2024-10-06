export const fields = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Name' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Email' },
    { name: 'age', type: 'number', label: 'Age', placeholder: 'Age' },
    {
        name: 'role',
        type: 'select',
        label: 'Role',
        placeholder: 'Role',
        options: ['admin', 'user'],
    },
    {
        name: 'status',
        type: 'select',
        label: 'Status',
        placeholder: 'Status',
        options: ['active', 'inactive'],
    },
]
