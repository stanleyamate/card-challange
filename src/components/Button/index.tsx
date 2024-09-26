import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  fullWidth?: boolean
  onClick?: () => void
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary"
}>

const Button: FC<Props> = ({
  onClick,
  children,
  fullWidth,
  size = 'md',
  variant = 'primary',

}) => {

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-md",
    lg: "px-8 py-4 text-lg",
  }

  const variants: { [key: string]: string } = {
    primary: "bg-[#009129] hover:bg-[#085a20] text-white",
    secondary: "text-black bg-gray-50 hover:bg-gray-100 ",
  }
  const selectedVariant = Object.keys(variants)?.find(v => v === variant) as string

  return (
    <button className={`transition-colors capitalize rounded-lg py-3 lg:flex-1 font-bold ${fullWidth ? "w-full" : "w-fit"} ${variants[selectedVariant]} ${sizes[size]}`} onClick={onClick}>{children}</button>
  )
}

export default Button