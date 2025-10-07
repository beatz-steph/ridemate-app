import { cn } from '@/lib/utils';
import { Platform, TextInput, type TextInputProps } from 'react-native';

function Input({
  className,
  placeholderClassName,
  ...props
}: TextInputProps & React.RefAttributes<TextInput>) {
  return (
    <TextInput
      className={cn(
        'border-[#F2F2F2] focus:border-ring bg-[#F2F2F2] text-foreground flex h-[70px] w-full min-w-0 flex-row items-center rounded-[30px] border py-1 text-base leading-5 sm:h-9 px-5 text-[20px] placeholder:text-[#919191]',
        props.editable === false &&
        cn(
          'opacity-50',
          Platform.select({ web: 'disabled:pointer-events-none disabled:cursor-not-allowed' })
        ),
        Platform.select({
          web: cn(
            'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground outline-none transition-[color,box-shadow] md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
          ),
          native: 'placeholder:text-muted-foreground/50',
        }),
        className
      )}
      {...props}
    />
  );
}

export { Input };
