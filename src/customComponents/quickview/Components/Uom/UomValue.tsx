export interface UomValueProps {
  uomValue?: string | number
}

export const UomValue: React.FC<UomValueProps> = ({
  uomValue,
}): JSX.Element | null => {
  if (uomValue) {
    return (
      <span className="has-text-weight-semibold is-size-small on-hover--hide-display">
        {uomValue}
      </span>
    )
  }
  return null
}
