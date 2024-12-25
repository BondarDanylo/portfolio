import { FC, JSX } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import styles from './Navigation.module.scss';

const Navigation: FC = ():JSX.Element => {

   
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                   <NavigationLink link=''>
                    <svg viewBox="0 0 28 28">
                        <path d="M16.3382 1.94393L25.9705 9.82424L26.0201 9.8788C26.1701 10.0437 26.3998 10.3064 26.5943 10.6198C26.7798 10.9189 27 11.3686 27 11.8956V24.9976C27 26.1013 26.1068 27 25 27H18.7601C17.9317 27 17.2601 26.3284 17.2601 25.5V20.7939C17.2601 18.9948 15.8058 17.5405 14.0168 17.5405C12.2279 17.5405 10.7735 18.9948 10.7735 20.7939V25.5C10.7735 26.3284 10.102 27 9.27354 27H3C1.89318 27 1 26.1013 1 24.9976V11.7425C1 11.0901 1.36299 10.564 1.56986 10.3028C1.69049 10.1505 1.80873 10.0264 1.89631 9.94036C1.9407 9.89677 1.97877 9.86147 2.0074 9.83565C2.02175 9.8227 2.03384 9.81204 2.0433 9.80382L2.05551 9.79329L2.06007 9.7894L2.06278 9.7871C2.06278 9.7871 2.06356 9.78646 2.7075 10.5515L2.06356 9.78646L2.07352 9.77807L11.6288 1.94617C12.9452 0.685478 15.0206 0.684487 16.3382 1.94393ZM3.35246 11.3159L3.3468 11.3209C3.33673 11.33 3.31953 11.3459 3.29759 11.3674C3.25251 11.4117 3.19388 11.4736 3.13764 11.5446C3.07966 11.6178 3.038 11.6834 3.01374 11.7344C3.00661 11.7494 3.00238 11.7602 3 11.767V24.9976L3.00006 24.9992L3.0007 25H8.77354V20.7939C8.77354 17.8948 11.1188 15.5405 14.0168 15.5405C16.9149 15.5405 19.2601 17.8948 19.2601 20.7939V25H24.9993L24.9999 24.9992L25 24.9976V11.8956C25 11.8989 25.0008 11.8992 25 11.8956C24.9966 11.8812 24.9788 11.8095 24.8948 11.6742C24.8108 11.5389 24.7005 11.4037 24.588 11.2772L15.004 3.43645L14.9714 3.40439C14.4228 2.86484 13.5451 2.86525 12.997 3.40534L12.9644 3.43744L3.35246 11.3159Z" fill="#000000"></path>
                    </svg>
                   </NavigationLink>
                   <NavigationLink link='portfolio'>
                        <svg viewBox="0 0 72 72">
                            <path d="M61.568,17H46.501v-6.785C46.501,6.556,43.849,4,39.866,4h-8.138C27.615,4,25.5,6.613,25.5,10.214V17H10.432
                                C6.604,17,3.5,20.104,3.5,23.932v37.136c0,3.828,3.104,6.932,6.932,6.933h51.136c3.828,0,6.932-3.104,6.932-6.933h0.001V23.932
                                C68.501,20.104,65.396,17,61.568,17z M29.5,10.215C29.5,8.063,31.41,8,31.727,8h7.136c1.263,0,3.637,0.384,3.637,2.214V17h-13
                                V10.215z M61.568,64H10.432C8.813,64,7.5,62.688,7.5,61.068V43h3.13c0.553,0,1-0.447,1-1s-0.447-1-1-1H7.5V23.932
                                C7.5,22.313,8.813,21,10.432,21h51.136c1.619,0,2.932,1.313,2.932,2.932h0.001V41H42.499v-0.93c0-2.248-1.822-4.069-4.069-4.069
                                h-4.86c-2.248,0-4.07,1.821-4.07,4.069V41H16.631c-0.553,0-1,0.447-1,1s0.447,1,1,1H29.5v1.93c0,2.248,1.822,4.07,4.07,4.07h4.86
                                c2.248,0,4.07-1.822,4.07-4.07h-0.001V43h22.002v18.068C64.501,62.688,63.188,64,61.568,64z M40.5,40.07L40.5,40.07l-0.001,4.859
                                c0,1.143-0.926,2.07-2.069,2.07h-4.86c-1.143,0-2.07-0.928-2.07-2.07V40.07c0-1.143,0.926-2.069,2.07-2.069h4.86
                                C39.573,38.001,40.5,38.926,40.5,40.07z"/>
                        </svg>
                   </NavigationLink>
                   <NavigationLink link='stack'>
                        <svg viewBox="0 0 475.522 475.522" >
                            <g>
                                <path d="M237.762,57.173c7.959,0,14.434-6.47,14.434-14.422V14.447C252.196,6.482,245.721,0,237.762,0
                                    c-7.96,0-14.435,6.482-14.435,14.447v28.304C223.327,50.703,229.802,57.173,237.762,57.173z"/>
                                <path d="M133.152,74.748c2.636,4.423,7.428,7.171,12.506,7.171c2.562,0,5.057-0.683,7.22-1.974c3.334-1.92,5.717-5.017,6.712-8.728
                                    c0.995-3.709,0.486-7.601-1.443-10.978l-14.171-24.518c-2.567-4.467-7.359-7.242-12.506-7.242c-2.529,0-5.031,0.673-7.24,1.95
                                    c-3.327,1.929-5.704,5.048-6.693,8.784c-0.987,3.73-0.469,7.615,1.45,10.926L133.152,74.748z"/>
                                <path d="M46.47,133.259l24.474,14.094c2.19,1.3,4.695,1.986,7.244,1.986c5.123,0,9.922-2.76,12.539-7.228
                                    c3.964-6.859,1.598-15.707-5.298-19.736l-24.522-14.146c-2.189-1.269-4.683-1.938-7.211-1.938c-5.174,0-9.979,2.783-12.525,7.237
                                    C37.22,120.346,39.575,129.184,46.47,133.259z"/>
                                <path d="M67.938,227.007c0-7.965-6.475-14.445-14.435-14.445H25.199c-7.959,0-14.435,6.481-14.435,14.445
                                    c0,7.967,6.475,14.448,14.435,14.448h28.305C61.463,241.455,67.938,234.974,67.938,227.007z"/>
                                <path d="M78.23,304.697c-2.522,0-5.019,0.667-7.237,1.938l-24.514,14.168c-3.356,1.923-5.754,5.03-6.754,8.748
                                    c-0.999,3.713-0.485,7.592,1.423,10.884c2.544,4.489,7.338,7.277,12.51,7.277c2.533,0,5.029-0.659,7.237-1.918l24.579-14.154
                                    c6.855-4.052,9.21-12.906,5.256-19.729C88.167,307.462,83.377,304.697,78.23,304.697z"/>
                                <path d="M429.06,320.813l-24.525-14.175c-2.19-1.27-4.683-1.94-7.208-1.94c-5.117,0-9.912,2.75-12.528,7.203
                                    c-3.959,6.833-1.604,15.688,5.299,19.768l24.551,14.138c2.189,1.247,4.668,1.906,7.167,1.906c5.103,0,9.897-2.736,12.549-7.207
                                    c1.92-3.352,2.429-7.239,1.434-10.948C434.799,325.835,432.4,322.727,429.06,320.813z"/>
                                <path d="M450.323,212.561H422.02c-7.96,0-14.436,6.481-14.436,14.445c0,7.967,6.476,14.448,14.436,14.448h28.304
                                    c7.96,0,14.435-6.481,14.435-14.448C464.758,219.042,458.283,212.561,450.323,212.561z"/>
                                <path d="M397.336,149.339c2.55,0,5.055-0.688,7.187-1.953l24.513-14.117c3.349-1.911,5.748-5.019,6.755-8.752
                                    c1.01-3.742,0.499-7.646-1.424-10.964c-2.562-4.48-7.358-7.263-12.517-7.263c-2.519,0-5.012,0.666-7.225,1.934l-24.576,14.178
                                    c-6.839,4.043-9.196,12.884-5.215,19.774C387.477,146.595,392.267,149.339,397.336,149.339z"/>
                                <path d="M322.619,79.88c2.189,1.3,4.694,1.987,7.246,1.987c5.099,0,9.891-2.729,12.543-7.185l14.119-24.529
                                    c1.935-3.338,2.447-7.234,1.443-10.971c-1.004-3.732-3.401-6.846-6.712-8.743c-2.193-1.282-4.69-1.96-7.221-1.96
                                    c-5.139,0-9.925,2.775-12.484,7.231l-14.175,24.524c-1.932,3.333-2.445,7.216-1.446,10.933
                                    C316.934,74.889,319.333,77.997,322.619,79.88z"/>
                                <path d="M237.762,85.692c-81.751,0-148.26,64.474-148.26,143.723c0,50.874,20.45,80.873,35.385,102.783
                                    c7.326,10.733,11.774,17.562,11.774,21.879c0,9.352,1.2,24.889,2.259,38.596c0.828,10.718,1.61,20.842,1.61,25.281
                                    c0,15.134,11.726,21.736,19.485,26.107c2.079,1.171,4.043,2.276,5.817,3.464c0.903,0.682,2.781,3.753,4.023,5.785
                                    c5.08,8.308,13.582,22.213,33.73,22.213h68.396c21.314,0,30.294-13.851,35.659-22.126c1.336-2.062,3.356-5.176,4.31-5.804
                                    c1.767-1.16,3.679-2.232,5.705-3.366c7.846-4.396,19.702-11.037,19.702-26.272c0-4.973,0.314-15.389,0.646-26.416
                                    c0.402-13.349,0.858-28.477,0.858-37.461c0-4.309,4.486-11.205,11.871-22.046l0.069-0.102
                                    c14.025-20.568,35.221-51.652,35.221-102.515C386.021,150.166,319.512,85.692,237.762,85.692z M332.624,319.536l-0.072,0.105
                                    c-8.767,12.869-15.691,23.034-15.691,34.436c0,8.652-0.451,23.605-0.848,36.798c-0.352,11.685-0.656,21.774-0.656,27.079
                                    c0,1.844-1.052,2.933-8.454,7.078c-2.165,1.213-4.618,2.587-7.035,4.176c-4.817,3.166-7.801,7.769-10.687,12.221
                                    c-5.152,7.947-8.257,12.094-17.199,12.094h-68.396c-7.107,0-9.882-3.383-14.961-11.689c-2.811-4.598-5.718-9.352-10.529-12.573
                                    c-2.503-1.676-5.044-3.107-7.286-4.369c-7.249-4.082-8.28-5.147-8.28-6.936c0-5.288-0.776-15.338-1.675-26.976
                                    c-1.028-13.31-2.194-28.397-2.194-36.901c0-11.421-6.545-21.01-15.6-34.276c-14.061-20.626-31.56-46.297-31.56-90.386
                                    c0-67.118,56.64-121.723,126.26-121.723c69.62,0,126.26,54.605,126.26,121.723C364.021,273.491,346.613,299.022,332.624,319.536z"/>
                                <path d="M276.35,231.018c-2.246-5.196-7.355-8.554-13.018-8.554c-0.228,0-51.087,0-51.142,0c-5.663,0-10.773,3.357-13.018,8.554
                                    l-27.324,63.186c-1.503,3.476-1.563,7.328-0.169,10.849c1.395,3.521,4.077,6.287,7.552,7.789c1.795,0.775,3.687,1.169,5.621,1.169
                                    c5.66,0,10.77-3.357,13.016-8.553l4.975-11.505v120.566c0,8.608,7.003,15.611,15.611,15.611s15.612-7.003,15.612-15.611v-82.717
                                    h6.622v82.717c0,8.608,7.003,15.611,15.611,15.611c8.608,0,15.612-7.003,15.612-15.611V292.178l5.742,13.279
                                    c2.247,5.195,7.356,8.553,13.016,8.553c1.935,0,3.826-0.394,5.621-1.169c3.476-1.502,6.158-4.268,7.552-7.789
                                    c1.395-3.52,1.335-7.373-0.168-10.849L276.35,231.018z"/>
                                <path d="M235.983,217.269c19.697,0,35.721-16.028,35.721-35.73c0-19.701-16.024-35.729-35.721-35.729
                                    c-19.701,0-35.729,16.028-35.729,35.729C200.254,201.24,216.282,217.269,235.983,217.269z"/>
                            </g>
                        </svg>
                   </NavigationLink>
                   <NavigationLink link='contact'>
                        <svg viewBox="0 -18 1060 1060">
                            <path d="M963.2 408c-13.6 0-24 11.2-24 24v432c0 27.2-21.6 48.8-48.8 48.8H159.2c-27.2 0-48.8-21.6-48.8-48.8V159.2c0-27.2 21.6-48.8 48.8-48.8h470.4c13.6 0 24-11.2 24-24 0-13.6-11.2-24-24-24H154.4C103.2 62.4 61.6 104 61.6 155.2v715.2c0 51.2 41.6 92.8 92.8 92.8h740.8c51.2 0 92.8-41.6 92.8-92.8V432c0-12.8-11.2-24-24.8-24z" fill="" />
                            <path d="M968 151.2l-44-44c-30.4-30.4-78.4-33.6-105.6-5.6L355.2 564.8 510.4 720l463.2-463.2c28-27.2 25.6-75.2-5.6-105.6z m-116.8 159.2l-344 344-86.4-85.6 345.6-345.6 84.8 87.2z m88-88l-51.2 51.2-85.6-86.4 50.4-50.4c10.4-10.4 28.8-9.6 40 2.4l44 44c12 10.4 12.8 28.8 2.4 39.2zM355.2 566.4l-48 174.4c-2.4 8 0 16 5.6 21.6 5.6 5.6 13.6 8 21.6 5.6l174.4-48-36-36L360 715.2l31.2-113.6-36-35.2z" fill="" />
                        </svg>
                   </NavigationLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation

