import { DOMAttributes } from 'react'

import { Button } from '../../components/Bulma/Elements/Button/Button'
import { getIconComponent } from '../../utils/iconGenerator'
export interface QuickviewButtonProps {
  dataTarget: string
  dataShow: string
  className?: string
  label?: string
  icon?: string
}

const handleClick = (dataTarget: string) => {
  const quickview = document.querySelector(`#${dataTarget}`)
  if (quickview?.classList.contains('is-active')) {
    return quickview?.classList.remove('is-active')
  }
  return quickview?.classList.add('is-active')
}
export const QuickviewButton: React.FC<QuickviewButtonProps> &
  DOMAttributes<HTMLButtonElement> = ({
  dataTarget,
  dataShow,
  className,
  label,
  icon,
}): JSX.Element => {
  return (
    <Button
      className={className}
      label={label}
      icon={icon ? getIconComponent(icon) : undefined}
      data-target={dataTarget}
      data-show={dataShow}
      onClick={() => {
        handleClick(dataTarget)
      }}
    />
  )
}
