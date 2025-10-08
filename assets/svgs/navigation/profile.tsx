import * as React from "react"
import Svg, { Circle, Ellipse, Path, SvgProps } from "react-native-svg"


export const ProfileSvg = (props: SvgProps) => (
    <Svg
        //@ts-ignore
        xmlns="http://www.w3.org/2000/svg"
        width={31}
        height={30}
        fill="none"
        {...props}
    >
        <Circle cx={15.5} cy={7.5} r={5} stroke="#000" strokeWidth={1.5} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M19.25 25.769a14.389 14.389 0 0 1-3.75.481c-4.832 0-8.75-2.239-8.75-5s3.918-5 8.75-5 8.75 2.239 8.75 5c0 .432-.096.85-.276 1.25"
        />
    </Svg>
)

export const ProfileSvgActive = (props: SvgProps) => (
    <Svg
        //@ts-ignore
        xmlns="http://www.w3.org/2000/svg"
        width={31}
        height={30}
        fill="none"
        {...props}
    >
        <Circle cx={15.5} cy={7.5} r={5} fill="#7A0000" />
        <Ellipse cx={15.5} cy={21.25} fill="#7A0000" rx={8.75} ry={5} />
    </Svg>
)
