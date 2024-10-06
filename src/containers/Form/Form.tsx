import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import Modal from 'react-modal'
import { Path, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useContext, useEffect } from 'react'

import Input from '../../components/Input.tsx'
import { TUser, UserSchema } from '../../shared/zod.ts'
import styles from './Form.module.scss'
import mockUsers, { initialValues } from '../../shared/mockData.ts'
import mockData from '../../shared/mockData.ts'
import { MyListContext } from '../../App.tsx'
import { fields } from './constant.ts'
import Button from '../../components/Button.tsx'
import Select from '../../components/Select.tsx'
import { IUser } from '../../shared/types.ts'

type Props = {
    user?: IUser
}

const Form: FC<Props & NiceModalHocProps> = NiceModal.create(({ user }) => {
    const modal = useModal()
    const [data, setData] = useContext(MyListContext)

    const { control, handleSubmit, reset } = useForm<TUser>({
        resolver: zodResolver(UserSchema),
    })

    const handleCreateUser = (values: TUser) => {
        if (user) {
            data.splice(user.id - 1, 1, {
                id: user.id,
                ...values,
            })
            mockUsers.splice(user.id - 1, 1, {
                id: user.id,
                ...values,
            })
            setData([...data])
            localStorage.setItem('data', JSON.stringify(data))
        } else {
            const newUser = { id: mockData.length + 1, ...values }
            mockUsers.push(newUser)
            setData([...data, newUser])
            localStorage.setItem('data', JSON.stringify(mockData))
        }

        modal.hide()
    }

    useEffect(() => {
        reset(user)
        return () => reset(initialValues)
    }, [user])

    return (
        <Modal
            isOpen={modal.visible}
            onRequestClose={() => modal.hide()}
            contentLabel="Example Modal"
        >
            <h2 className={styles.title}>
                {user ? 'Edit' : 'Create a new'} user
            </h2>
            <form
                className={styles.form}
                onSubmit={handleSubmit(handleCreateUser)}
            >
                {fields.map((field) =>
                    field.type === 'select' ? (
                        <Select
                            options={field.options!}
                            label={field.label}
                            key={field.name}
                            control={control}
                            name={field.name as Path<TUser>}
                        />
                    ) : (
                        <Input
                            label={field.label}
                            key={field.name}
                            control={control}
                            name={field.name as Path<TUser>}
                            type={field.type}
                            placeholder={field.placeholder}
                        />
                    )
                )}
                <Button text="Send" type="submit" />
                <Button
                    color="primary"
                    text="Close"
                    onClick={() => modal.hide()}
                />
            </form>
        </Modal>
    )
})

export default Form
