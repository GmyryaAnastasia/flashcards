import s from './cards.module.scss'
import {ComponentPropsWithoutRef} from "react/index";

export type CardProps = {} & ComponentPropsWithoutRef<div>

export const Card = forwardRef<HTMLDivElement, CardProps>(({className, ...restProps}, ref) => {
    const classNames = clsx(s.root, className)
    return <div ref={ref} className={classNames}{...restProps}></div>
})