interface HoagieMascotProps {
    /** rendered width in pixels */
    width?: number;
}

/* untransformed pixel sizes of the two SVG assets */
const PILL_WIDTH = 83
const PILL_HEIGHT = 210
const ARM_WIDTH = 103
/* where the arm's transparent end tucks behind the body */
const ARM_LEFT = 30
const ARM_TOP = 140

const BASE_WIDTH = ARM_LEFT + ARM_WIDTH
const BASE_HEIGHT = PILL_HEIGHT

/** HoagieMascot is the hoagie that peeks over the stats panel,
 *  composed from the hoagie-pill body and hoagie-arm assets. */
const HoagieMascot = ({ width = 140 }: HoagieMascotProps) => {
    const scale = width / BASE_WIDTH
    return (
        <div
            role="img"
            aria-label="Hoagie mascot"
            style={{
                position: 'relative',
                width,
                height: BASE_HEIGHT * scale,
            }}
        >
            <img
                src="/hoagie-pill.svg"
                alt=""
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: PILL_WIDTH * scale,
                }}
            />
            <img
                src="/hoagie-arm.svg"
                alt=""
                style={{
                    position: 'absolute',
                    left: ARM_LEFT * scale,
                    top: ARM_TOP * scale,
                    width: ARM_WIDTH * scale,
                }}
            />
        </div>
    )
}

export default HoagieMascot
