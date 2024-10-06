import { Control, Controller, Path } from 'react-hook-form'
import { FC } from 'react'
import cn from 'classnames'

import { TUser } from '../shared/zod.ts'
import styles from './styles.module.scss'

type inputFieldProps = {
    label?: string
    control: Control<TUser>
    name: Path<TUser>
    placeholder: string
    type: string
}

const Input: FC<inputFieldProps> = ({
    control,
    name,
    placeholder,
    type,
    label,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <div className={styles.inputContainer}>
                    <label
                        className={styles.inputContainer__label}
                        htmlFor={name}
                    >
                        {label}
                    </label>
                    <input
                        id={name}
                        className={cn(
                            styles.inputContainer__input,
                            fieldState.error &&
                                styles.inputContainer__input_error
                        )}
                        placeholder={placeholder}
                        type={type}
                        {...field}
                    />
                    {fieldState.error && (
                        <div className={styles.inputContainer__error}>
                            {fieldState.error.message}
                        </div>
                    )}
                </div>
            )}
        />
    )
}

export default Input
