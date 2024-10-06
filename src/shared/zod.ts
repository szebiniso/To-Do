import { z } from 'zod'

export const UserSchema = z.object({
    name: z.string().min(1, 'Name cannot be empty'),
    email: z.string().email('Invalid email format'),
    age: z.coerce.number().int().positive().max(120),
    role: z.enum(['admin', 'user']),
    status: z.enum(['active', 'inactive']),
})

export type TUser = z.infer<typeof UserSchema>
