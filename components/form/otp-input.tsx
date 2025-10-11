import React from 'react';
import { Controller, FieldValues, Path, UseFormReturn, } from 'react-hook-form';
import { View } from 'react-native';
import { Label } from '../ui/label';
import { AppleOTPInput, AppleOTPInputProps } from '../ui/otp-input';
import { Text } from '../ui/text';


type FormInputProps<T extends FieldValues> = {
    form: UseFormReturn<T>,
    name: Path<T>
    label?: string,
    placeholder?: string,
    loading?: boolean
} & AppleOTPInputProps


export function FormAppleOTPInput<T extends FieldValues>({
    form,
    name,
    label,
    placeholder,
    loading,
    ...props
}: FormInputProps<T>) {
    return (
        <View>
            {label ? <Label>{label}</Label> : null}
            <Controller
                control={form.control}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                        <AppleOTPInput
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            {...props}
                            className={error?.message && "bg-[#F2E5E5]"}
                            editable={!loading}
                        />
                        {error?.message && (
                            <Text className='text-red-500 text-[16px] font-light mt-2 mx-4'>
                                {error.message.toString()}
                            </Text>
                        )}
                    </>
                )}
                name={name}
            />

        </View>
    )
}