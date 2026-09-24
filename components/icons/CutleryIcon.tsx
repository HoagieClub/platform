interface CutleryIconProps {
    /** icon width and height in pixels */
    size?: number;
}

/** CutleryIcon is the Hoagie Meal fork-and-spoon icon exported from Figma
 *  as a flattened raster (not vector paths), so unlike evergreen-ui icons
 *  it can't be recolored via a color prop — it's baked in white already. */
const CutleryIcon = ({ size = 16 }: CutleryIconProps) => (
    <img src="/icons/CutleryIcon.svg" width={size} height={size} alt="" />
)

export default CutleryIcon
