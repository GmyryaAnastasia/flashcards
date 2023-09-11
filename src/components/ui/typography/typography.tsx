import s from './typography.module.scss'
import {ComponentPropsWithoutRef, ElementType} from "react/index";



export type TextProps<T extends ElementType = 'p'>={
    as?:T
    variant?:
        |'large'
        |'h1'
        |'h2'
        |'h3'
        |'body1'
        |'subtitle1'
        |'body2'
        |'subtitle2'
        | 'caption'
        |'overline'
        |'link1'
        |'link2'
    className:string
} & ComponentPropsWithoutRef<T>

export const Typoghraphy=<T extends ElementType = 'p'>(
    {as, className, variant = 'body1', ...restProps}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
)=>{
    const classNames = clsx(s.text, s[variant], className)
    const Component = as || 'p'
    return (
        <Component className={classNames} {...restProps}  />
    )
}