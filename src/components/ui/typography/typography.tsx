import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType> = {
    as?: T
    variant?:
        | 'large'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'body1'
        | 'body2'
        | 'subtitle1'
        | 'subtitle2'
        | 'caption'
        | 'overline'
        | 'link1'
        | 'link2'
    children?: ReactNode
    className?: string
} & ComponentPropsWithoutRef<T>

export function Typography<T extends ElementType = 'p'>({
                                                            as,
                                                            className,
                                                            variant = 'body1',
                                                            ...otherProps
                                                        }: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
    const Component = as || 'p'

    const classNames = {
        root: clsx(s[variant], className),
    }

    return <Component className={classNames.root} {...otherProps} />
}
