import { FC } from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

type Props = {
    text: string
    onClick?: () => void
    color?: 'primary' | 'secondary'
    type?: 'submit' | 'reset' | 'button'
}

export const Button: FC<Props> = ({
    text,
    color,
    onClick,
    type = 'button',
}) => {
    return (
        <button
            className={cn(styles.button, styles[`button_${color}`])}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
