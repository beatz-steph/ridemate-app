import React from 'react';
import { Controller, FieldValues, Path, UseFormReturn, } from 'react-hook-form';
import { TextInput, View, type TextInputProps } from 'react-native';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Text } from '../ui/text';


type FormInputProps<T extends FieldValues> = {
    form: UseFormReturn<T>,
    name: Path<T>
    label?: string,
    placeholder?: string,
    loading?: boolean
} & TextInputProps & React.RefAttributes<TextInput>


export function FormInput<T extends FieldValues>({
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
                        <Input
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
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