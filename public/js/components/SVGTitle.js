import React from 'react';


export default class SVGTitle extends React.Component{
    constructor(props) {
        super(props);
        this.path = [
            "M3545 6849 c-803 -83 -1510 -524 -1929 -1202 -209 -338 -329 -698 -366 -1102 -11 -121 -14 -639 -4 -757 l7 -75 181 -57 c99 -32 370 -116 601 -187 231 -72 439 -136 463 -144 l42 -14 -2 462 -3 461 -180 46 c-99 26 -193 50 -209 54 l-29 7 6 107 c11 200 64 395 162 587 82 164 166 277 309 420 240 240 545 399 882 461 136 25 432 25 559 1 345 -67 625 -215 870 -461 283 -283 430 -598 465 -995 5 -63 11 -115 12 -116 5 -5 856 -258 911 -271 l27 -6 0 190 c0 466 -76 811 -265 1197 -114 233 -266 446 -459 643 -387 396 -872 645 -1424 733 -148 23 -486 33 -627 18z",
            "M3030 3622 l0 -498 298 -88 c385 -115 1292 -382 1635 -481 147 -43 267 -81 267 -85 0 -3 -23 -46 -51 -95 -248 -436 -664 -713 -1178 -786 -136 -19 -422 -6 -554 25 -468 110 -859 412 -1070 826 -69 135 -93 197 -126 323 l-27 102 -100 33 c-78 26 -394 123 -848 259 -18 5 -19 0 -13 -143 10 -239 64 -502 153 -740 277 -747 906 -1332 1667 -1553 114 -33 258 -64 392 -83 116 -17 511 -16 630 0 489 69 902 245 1275 542 452 361 775 894 889 1468 29 144 51 338 51 444 l0 53 -478 143 c-576 172 -946 283 -1312 392 -151 45 -356 106 -455 135 -236 70 -792 235 -924 274 -58 17 -108 31 -113 31 -4 0 -8 -224 -8 -498z"
        ];
    }
    render(){
        return(
                <div style={{ position: 'relative', height: 200, width: 200, margin: '40px auto' }}>
                    <svg viewBox="0 0 750.000000 750.000000" width="200" height="200">
                    <g transform="translate(0.000000,750.000000) scale(0.100000,-0.100000)" strokeWidth="60" strokeMiterlimit="10">
                        <path style={styles.path} d={this.path[0]} stroke="rgb(73,193,239)" fill="rgb(73,193,239)"/>
                        <path style={styles.path} d={this.path[1]} stroke="rgb(0,207,83)" fill="rgb(0,207,83)"/>
                    </g>
                    </svg>
                </div>
        );
    }
}

const styles={
    path: {
        strokeDasharray: 24000,
        strokeDashoffset: 24000,
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",     
        animationName: "dash,fillfadein",
        animationDuration: "2s,0.7s",
        animationDelay: "0s,1.3s",
        fillOpacity:0
    },
    upper:{

    },
    lower:{

    }
}
