import {ComponentPropsWithoutRef} from "react/index";
import {Typography} from "@/components/ui/typography";
import Search from "@/assets/search";
import s from "./input.module.scss"
import {useState} from "react";
import EyeOff from "@/assets/eyeOff";
import Eye from "@/assets/eye";
import clsx from 'clsx';

type InputProps = {
    onValueChange?: (value: string) => void
    type?: string
    placeholder?: string
    errorMessage?: string
    label?: string
    disabled?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({type, placeholder, errorMessage, label, onValueChange, onChange, disabled}: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isPasswordButtonShow = type === 'password'
    const isSearchButtonShow = type === 'search'


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        onValueChange(e.target.value)
    }
    const classNames = {
        root: clsx(s.root),
        fieldContainer: clsx(s.fieldContainer),
        field: clsx(s.field, errorMessage && s.error, isSearchButtonShow ? s.fieldWithSearch : s.fieldWithOutSearch,disabled&&s.disabledLabel),
        label: clsx(s.label, disabled? s.disabledLabel : s.label),
        errorLabel: clsx(s.errorLabel)
    }


    return (
        <div className={classNames.root}>
            {!isSearchButtonShow &&
                <div>
                    <Typography variant={'body2'}
                                className={classNames.label}>{label}</Typography>
                </div>}
            <div className={classNames.fieldContainer}>
                <input type={showPassword ? 'text' : type} placeholder={errorMessage ? errorMessage : placeholder}
                       onChange={onChangeHandler}
                       className={classNames.field}
                       disabled={disabled}/>
                {isPasswordButtonShow &&
                    <button className={s.showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ?
                        <EyeOff/> : <Eye/>}</button>}
                {isSearchButtonShow &&
                    <div>
                        <button className={s.showSearch}><Search/></button>
                    </div>
                }
            </div>
            <div>
                <Typography variant={'caption'} className={classNames.errorLabel}>{errorMessage}</Typography>
            </div>

        </div>

    )
}