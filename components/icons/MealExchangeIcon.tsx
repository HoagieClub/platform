interface MealExchangeIconProps {
    /** icon width and height in pixels */
    size?: number;
}

/** MealExchangeIcon is the Meal Exchange shield icon exported from Figma as a
 *  flattened black raster; it's inverted to white via CSS filter since, like
 *  other app icons, it's always shown on a solid colored block. */
const MealExchangeIcon = ({ size = 16 }: MealExchangeIconProps) => (
    <img
        src="/icons/MealExchangeIcon.svg"
        width={size}
        height={size}
        alt=""
        style={{ filter: 'brightness(0) invert(1)' }}
    />
)

export default MealExchangeIcon
