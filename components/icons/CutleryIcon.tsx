interface CutleryIconProps {
    /** icon width and height in pixels */
    size?: number;
    /** fill color */
    color?: string;
}

/** CutleryIcon is a fork-and-knife icon following the evergreen-ui
 *  icon API (size and color props), for apps without a fitting
 *  built-in icon. */
const CutleryIcon = ({ size = 16, color = 'currentColor' }: CutleryIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill={color}
            d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"
        />
    </svg>
)

export default CutleryIcon
