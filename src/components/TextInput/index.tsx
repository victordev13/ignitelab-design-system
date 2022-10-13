import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded focus-within:ring-2'>
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ ...props }: TextInputInputProps) {
  return (
    <input
      {...props}
      className='bg-transparent flex-1 w-100 h-100 outline-none text-gray-100 text-xs placeholder:text-gray-400'
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';
TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';

// composition pattern
export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
