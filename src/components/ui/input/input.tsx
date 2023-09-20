import {ComponentPropsWithoutRef} from "react/index";
import {Typography} from "@/components/ui/typography";
import Search from "@/assets/search";
import s from "./input.module.scss"
import {useState} from "react";
import EyeOff from "@/assets/eyeOff";
import Eye from "@/assets/eye";
import Close from "@/assets/close";

type InputProps = {
    onValueChange?: (value: string) => void
    type?: string
    placeholder?: string
    error?: string
    title?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = ({type, placeholder, error, title, onValueChange, onChange}: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    let isPasswordButtonShow = false
    let isSearchButtonShow = false
    if (type === 'password') {
        isPasswordButtonShow = true
    }
    if (type === 'search') {
        isSearchButtonShow = true
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        onValueChange(e.target.value)
    }

    return (

        <div className={s.root}>
            <div>
                <Typography variant={'body2'} className={''}>{title}</Typography>
            </div>
            <div className={s.fieldContainer}>
                <input type={showPassword ? 'text' : type} placeholder={placeholder} onChange={onChangeHandler}
                       className={s.field}/>
                {isPasswordButtonShow &&
                    <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff/> : <Eye/>}</button>}
                {isSearchButtonShow &&
                    <div>
                        <button><Search/></button>
                        <button><Close/></button>
                    </div>
                }
            </div>

            <div>
                <Typography variant={'caption'} className={''}>{error}</Typography>
            </div>
        </div>

    )
}