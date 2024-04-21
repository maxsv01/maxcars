import React from 'react';
import { twMerge } from 'tailwind-merge';
import { VariantProps, tv } from 'tailwind-variants';

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface TypographyProps extends typographyVariantsType {
  tag?: TextTag;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
  children: React.ReactNode;
}

export type typographyVariantsType = VariantProps<typeof textVariants>;

const textVariants = tv({
  variants: {
    type: {
      h1: 'text-[24px] leading-[38px] font-bold md:text-[30px] xl:tracking-[-0.64px] xl:text-[32px] xl:leading-10',
      h2: 'text-[24px] leading-[30px] font-bold tracking-[-0.48px]',
      h3: 'text-[20px] font-bold leading-6 tracking-[-0.4px]',
      h4: 'text-[18px] font-bold leading-6 tracking-[-0.36px]',
      l: 'text-[16px] leading-6 xl:leading-5 xl:tracking-[-0.32px]',
      m: 'text-[14px] leading-[18px] tracking-[-0.28px]',
      caption: 'text-[13px] leading-4 font-bold',
      link: 'text-[14px] underline cursor-pointer font-medium leading-[18px]',
    },
  },
  defaultVariants: {
    type: 'm',
  },
});

const Typography = ({ children, className, onClick, tag = 'p', type = 'm' }: TypographyProps) => {
  const CustomTag = tag;

  const classNameVariants = textVariants({ type });

  return (
    <CustomTag className={twMerge(classNameVariants, className)} onClick={onClick}>
      {children}
    </CustomTag>
  );
};

export default Typography;
