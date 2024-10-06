import { Control, Controller, Path } from 'react-hook-form'
import { FC } from 'react'
import cn from 'classnames'

import { TUser } from '../shared/zod.ts'
import styles from './styles.module.scss'

type inputFieldProps = {
    label?: string
    control: Control<TUser>
    name: Path<TUser>
    options: string[]
}

const Select: FC<inputFieldProps> = ({ control, name, label, options }) => {
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
                    <select
                        id={name}
                        className={cn(
                            styles.inputContainer__input,
                            fieldState.error &&
                                styles.inputContainer__input_error
                        )}
                        {...field}
                    >
                        {options.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>
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

export default Select
