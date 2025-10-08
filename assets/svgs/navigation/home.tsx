import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const HomeSvg = (props: SvgProps) => (
    <Svg
        // @ts-ignore
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        stroke={"#000"}
        {...props}
    >
        <Path
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M27.5 15.255v1.901c0 4.876 0 7.314-1.465 8.83C24.572 27.5 22.214 27.5 17.5 27.5h-5c-4.714 0-7.071 0-8.536-1.515C2.5 24.47 2.5 22.032 2.5 17.156v-1.901c0-2.86 0-4.29.649-5.477.649-1.185 1.835-1.921 4.206-3.393l2.5-1.551C12.362 3.278 13.615 2.5 15 2.5c1.385 0 2.638.778 5.145 2.334l2.5 1.551c2.371 1.472 3.557 2.208 4.206 3.393M18.75 22.5h-7.5"
        />
    </Svg>
)



export const HomeSvgActive = (props: SvgProps) => (
    <Svg
        //@ts-ignore
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Path
            fill="#7A0000"
            fillRule="evenodd"
            d="M3.149 9.778C2.5 10.964 2.5 12.394 2.5 15.255v1.901c0 4.876 0 7.314 1.464 8.83C5.43 27.5 7.786 27.5 12.5 27.5h5c4.714 0 7.071 0 8.535-1.515C27.5 24.47 27.5 22.032 27.5 17.156v-1.901c0-2.86 0-4.29-.649-5.477-.649-1.185-1.835-1.921-4.206-3.393l-2.5-1.551C17.638 3.278 16.385 2.5 15 2.5c-1.385 0-2.638.778-5.145 2.334l-2.5 1.551C4.984 7.857 3.798 8.593 3.149 9.778Zm8.101 11.784a.937.937 0 1 0 0 1.875h7.5a.937.937 0 1 0 0-1.875h-7.5Z"
            clipRule="evenodd"
        />
    </Svg>
)