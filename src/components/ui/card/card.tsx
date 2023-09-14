import s from "./card.module.scss"
import {ComponentPropsWithoutRef, forwardRef} from 'react'


export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({className, ...restProps}, ref) => {
    return <div ref={ref} className={`${s.root} ${className}`} {...restProps}></div>
})