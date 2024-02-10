// ion/Checkbox: Generated with Ion on 2/10/2024, 1:19:33 PM
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from '@phosphor-icons/react';
import Label from './Label';

import clsx from 'clsx';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
		label?: string;
		description?: string;
		helper?: string;
	}
>(({ className, label, description, required, helper, ...props }, ref) => {
	const id = React.useId();
	return (
		<span className="flex items-center gap-2">
			<CheckboxPrimitive.Root
				id={id}
				ref={ref}
				className={clsx(
					'peer h-5 w-5 shrink-0 overflow-hidden rounded border bg-transparent transition-colors hover:border-sub-foreground',
					'focus-visible:primary-focus',
					'data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground',
					'disabled:pointer-events-none disabled:bg-soft disabled:text-soft-foreground disabled:data-[state=checked]:bg-soft disabled:data-[state=indeterminate]:bg-soft disabled:data-[state=checked]:text-soft-foreground disabled:data-[state=indeterminate]:text-soft-foreground',
					'group',
					className
				)}
				{...props}
			>
				<CheckboxPrimitive.Indicator
					className={clsx('flex items-center justify-center text-current')}
				>
					<Check
						size={15}
						className={'z-10 hidden transition-none group-data-[state=checked]:block'}
					/>
					<DividerHorizontalIcon className={'hidden group-data-[state=indeterminate]:block'} />
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>
			{label && (
				<Label
					htmlFor={id}
					required={required}
					disabled={props.disabled}
					description={description}
					helper={helper}
				>
					{label}
				</Label>
			)}
		</span>
	);
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
