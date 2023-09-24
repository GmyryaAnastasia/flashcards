import {ComponentPropsWithoutRef} from "react/index";
import {Typography} from "@/components/ui/typography";
import Search from "@/assets/search";
import s from "./input.module.scss"
import {useState} from "react";
import EyeOff from "@/assets/eyeOff";
import Eye from "@/assets/eye";


type InputProps = {
    onValueChange?: (value: string) => void
    type?: string
    placeholder?: string
    errorMessage?: string
    title?: string
    disabled: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({type, placeholder, errorMessage, title, onValueChange, onChange, disabled}: InputProps) => {
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
            {!isSearchButtonShow &&
                <div>
                    <Typography variant={'body2'} className={s.label}>{title}</Typography>
                </div>}
            <div className={s.fieldContainer}>
                <input type={showPassword ? 'text' : type} placeholder={placeholder} onChange={onChangeHandler}
                       className={`${s.field} ${errorMessage && s.error}`} disabled={disabled}/>
                {isPasswordButtonShow &&
                    <button className={s.showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ?
                        <EyeOff/> : <Eye/>}</button>}
                {isSearchButtonShow &&
                    <div className={s.showSearchBox}>
                        <button className={s.showSearch}><Search/></button>
                    </div>
                }
            </div>
            <div>
                <Typography variant={'caption'} className={s.errorLabel}>{errorMessage}</Typography>
            </div>

        </div>

    )
}