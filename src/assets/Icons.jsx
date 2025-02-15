export const Icons = {
    Logo: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={46}
            fill='none'
            {...props}>
            <path fill='#353637' d='m20 12 10 7.878V46H20V12Z' />
            <path fill='#597193' d='m10 18 10 6.125V46H10V18Z' />
            <path fill='#AAC7F0' d='m0 0 10 7.667V46H0V0Z' />
        </svg>
    ),
    Card: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={16}
            fill='none'
            {...props}>
            <path
                fill='#4C6487'
                d='M2.17 11.75a1.068 1.068 0 0 1 1.068-1.069c.187.001.372.052.534.146a1.067 1.067 0 0 1 .523 1.079 1.079 1.079 0 0 1-.534.781 1.054 1.054 0 0 1-1.287-.177 1.068 1.068 0 0 1-.304-.76Zm13.772-7.238h-4.147a3.551 3.551 0 0 1-6.507 0H1.146A1.148 1.148 0 0 0 0 5.657V6.69h17.087V5.657a1.146 1.146 0 0 0-1.144-1.145ZM4.831 11.988c0 .051-.018.105-.03.156v.029a1.805 1.805 0 0 1-.08.222 1.53 1.53 0 0 1-.067.134l-.019.037a1.856 1.856 0 0 1-.101.151l-.027.032c-.018.024-.034.047-.054.068.046.003.092.003.137 0a1.075 1.075 0 0 0 0-2.15 1.16 1.16 0 0 0-.137 0c.018.02.034.041.05.062l.032.04a1.6 1.6 0 0 1 .098.147c0 .014.016.029.023.043.024.043.045.085.064.128 0 .016.014.03.02.046.024.058.044.118.06.178v.032c.013.051.023.103.03.155a.54.54 0 0 1 0 .052c.017.125.017.252 0 .377.002.02.002.04 0 .06ZM0 8.358h17.087V7.224H0V8.36Zm0 .535h17.087v5.329a1.144 1.144 0 0 1-1.145 1.148H1.146A1.146 1.146 0 0 1 0 14.222v-5.33Zm8.038 2.185c0 .148.12.267.267.267h6.88a.267.267 0 0 0 0-.534h-6.88a.267.267 0 0 0-.267.267Zm0 1.342c0 .148.12.267.267.267h6.88a.267.267 0 1 0 0-.534h-6.88a.267.267 0 0 0-.267.267Zm-6.407-.67a1.602 1.602 0 0 0 1.601 1.601c.236.004.47-.045.684-.144.21.1.438.15.67.151a1.609 1.609 0 1 0 0-3.218c-.233.001-.462.053-.672.152a1.602 1.602 0 0 0-2.278 1.458h-.005Zm9.928-8.662a3.015 3.015 0 1 1-6.028-.146 3.015 3.015 0 0 1 6.028.146Zm-1.616-.795a.266.266 0 0 0-.378 0L8.188 3.667l-.664-.664a.267.267 0 1 0-.378.379l.853.85a.263.263 0 0 0 .377 0l1.567-1.565a.269.269 0 0 0 0-.378v.004Z'
            />
        </svg>
    ),
    videoPaused: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={64}
            height={64}
            fill='none'
            {...props}>
            <g filter='url(#a)'>
                <path
                    fill='#597193'
                    d='M32 8c-11 0-20 9-20 20s9 20 20 20 20-9 20-20S43 8 32 8Zm7.833 21.667-11.166 6c-1.334.666-2.834-.167-2.834-1.667V22c0-1.5 1.667-2.5 2.834-1.667l11.166 6c1.5.667 1.5 2.667 0 3.334Z'
                />
            </g>
            <defs>
                <filter
                    id='a'
                    width={64}
                    height={64}
                    x={0}
                    y={0}
                    colorInterpolationFilters='sRGB'
                    filterUnits='userSpaceOnUse'>
                    <feFlood floodOpacity={0} result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        result='hardAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={6} />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix values='0 0 0 0 0.0833333 0 0 0 0 0.0833333 0 0 0 0 0.0833333 0 0 0 0.15 0' />
                    <feBlend
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_20_162'
                    />
                    <feBlend
                        in='SourceGraphic'
                        in2='effect1_dropShadow_20_162'
                        result='shape'
                    />
                </filter>
            </defs>
        </svg>
    ),
    headerLine: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={170}
            height={38}
            fill='none'
            {...props}>
            <path
                stroke='#445670'
                strokeLinecap='round'
                strokeWidth={2}
                d='M1 36.702c11.625 1.479 15-2.67 16.364-10.016 8.181-14.022 30-15.357 38.181-8.68 13.637 17.36 19.773 20.7 28.637 2.003C97.906 1.028 101.899.614 108.727 9.993c9.359 6.138 11.518 8.278 12.955 16.026 2.045 4.006 6.627 2.69 8.182-3.339C146-2 154-4 169 9.993'
            />
        </svg>
    ),
    calendar: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={23}
            height={22}
            fill='none'
            {...props}>
            <path
                fill='#4E4E4E'
                d='M21.017 1.9H18.63V0h-.84v1.9h-2.173V0h-.84v1.9H7.26V0h-.84v1.9H4.248V0h-.84v1.9h-2.38a1.02 1.02 0 0 0-.95.634A1.034 1.034 0 0 0 0 2.928v17.584a1.034 1.034 0 0 0 .635.955c.125.052.259.079.394.078h19.988a1.026 1.026 0 0 0 1.03-1.033V2.928a1.033 1.033 0 0 0-.637-.95 1.021 1.021 0 0 0-.393-.078Zm.203 18.612a.206.206 0 0 1-.203.203H1.03a.204.204 0 0 1-.202-.203V6.765H21.22v13.747Zm0-14.596H.827V2.928a.201.201 0 0 1 .202-.198h2.379v1.554h.84V2.73h2.173v1.554h.84V2.73h7.514v1.554h.841V2.73h2.172v1.554h.841V2.73h2.388a.201.201 0 0 1 .202.198v2.988Z'
            />
            <path
                fill='#4E4E4E'
                d='M18.64 10.204h-3.003v.845h3.003v-.845ZM12.778 10.166H9.775v.846h3.003v-.846ZM5.368 8.998a1.59 1.59 0 0 1 1.472.987 1.607 1.607 0 0 1-.345 1.744 1.59 1.59 0 0 1-2.72-1.131c0-.425.168-.831.467-1.131.298-.3.703-.469 1.126-.47Zm0-.784a2.368 2.368 0 0 0-2.194 1.471 2.394 2.394 0 0 0 .515 2.598 2.372 2.372 0 0 0 2.588.517 2.39 2.39 0 0 0 .77-3.888 2.37 2.37 0 0 0-1.68-.699Z'
            />
            <path
                fill='#4E4E4E'
                d='M6.004 10.168H4.752v.846h1.252v-.846ZM18.64 12.97h-3.003v.846h3.003v-.845ZM12.778 12.934H9.775v.845h3.003v-.845ZM18.64 15.738h-3.003v.845h3.003v-.845ZM12.778 15.7H9.775v.845h3.003V15.7ZM6.854 15.743H3.85v.845h3.003v-.845Z'
            />
        </svg>
    ),
    fourTopArrows: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={75}
            height={74}
            fill='none'
            {...props}>
            <path
                fill='#fff'
                d='M36.96 55.69 18.73 73.92V55.69H0l18.73-18.73h18.23v18.73Z'
            />
            <path
                fill='#fff'
                d='M37.21 18.73 18.98 36.96V18.73H.25L18.98 0h18.23v18.73Zm36.96 36.96L55.938 73.92V55.69h-18.73l18.73-18.73h18.23v18.73Z'
            />
            <path
                fill='#fff'
                d='M74.17 18.73 55.938 36.96V18.73h-18.73L55.94 0h18.23v18.73Z'
            />
        </svg>
    ),
    bigVideo: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={130}
            height={130}
            fill='none'
            {...props}>
            <circle cx={65} cy={65} r={65} fill='#F6FCFA' fillOpacity={0.42} />
            <path
                fill='#F6FCFA'
                d='M65 20.682c-24.375 0-44.318 19.943-44.318 44.318 0 24.375 19.943 44.318 44.318 44.318 24.375 0 44.318-19.943 44.318-44.318 0-24.375-19.943-44.318-44.318-44.318Zm17.358 48.011L57.614 81.99c-2.955 1.477-6.279-.37-6.279-3.694v-26.59c0-3.324 3.694-5.54 6.279-3.694l24.744 13.296c3.324 1.477 3.324 5.909 0 7.386Z'
            />
        </svg>
    ),
    big: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={12}
            height={12}
            fill='none'
            {...props}>
            <path
                fill='#000'
                d='M10.313 0H.937A.939.939 0 0 0 0 .938v10.124c0 .518.42.938.938.938h9.374c.518 0 .938-.42.938-.938V.938A.939.939 0 0 0 10.312 0Zm.562 11.063c0 .31-.252.562-.563.562H.938a.563.563 0 0 1-.563-.563V.938c0-.31.252-.563.563-.563h9.374c.31 0 .563.252.563.563v10.124Z'
            />
            <path
                fill='#000'
                d='M10.01 1.14a.187.187 0 0 0-.072-.015H8.063a.187.187 0 1 0 0 .375h1.422l-2.68 2.68a.187.187 0 1 0 .265.265l2.68-2.68v1.422a.187.187 0 1 0 .375 0V1.312a.19.19 0 0 0-.116-.173ZM4.18 7.555l-2.68 2.68V8.813a.187.187 0 1 0-.375 0v1.874a.19.19 0 0 0 .116.174.19.19 0 0 0 .071.014h1.875a.187.187 0 1 0 0-.375H1.766l2.68-2.68a.187.187 0 1 0-.265-.265Z'
            />
        </svg>
    ),
    bed: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={12}
            fill='none'
            {...props}>
            <path
                fill='#000'
                d='M15.383 2.6h-7.8a.215.215 0 0 0-.216.217V6.5H1.733V.217A.215.215 0 0 0 1.517 0h-1.3A.215.215 0 0 0 0 .217v11.266c0 .121.095.216.217.216h1.3a.215.215 0 0 0 .216-.216V9.1h14.3v2.383c0 .121.095.217.216.217h1.3a.214.214 0 0 0 .217-.217v-6.5A2.387 2.387 0 0 0 15.383 2.6ZM7.367 8.666h-5.85a.215.215 0 0 0-.217.217v2.383H.434V.433H1.3v6.283c0 .122.095.217.217.217h5.85v1.733Zm9.966 2.6h-.867V8.883a.215.215 0 0 0-.216-.216H7.8V3.032h7.583c1.075 0 1.95.876 1.95 1.95v6.283Z'
            />
            <path
                fill='#000'
                d='M2.6 3.683c0 1.075.875 1.95 1.95 1.95 1.074 0 1.95-.875 1.95-1.95 0-1.074-.876-1.95-1.95-1.95-1.075 0-1.95.876-1.95 1.95Zm3.467 0c0 .837-.68 1.517-1.517 1.517-.836 0-1.517-.68-1.517-1.517 0-.836.68-1.516 1.517-1.516.836 0 1.517.68 1.517 1.516Z'
            />
        </svg>
    ),
    bath: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={12}
            fill='none'
            {...props}>
            <path
                fill='#000'
                d='M16.173 4.039H2.198V1.348a.932.932 0 0 1 1.807-.316l.068.188-.391.14a.574.574 0 0 0-.348.74l.22.61a.209.209 0 0 0 .266.125l1.87-.674a.209.209 0 0 0 .125-.267l-.22-.609a.574.574 0 0 0-.74-.347l-.39.14-.068-.187a1.35 1.35 0 0 0-2.616.457v2.691h-.237a1.228 1.228 0 0 0-.913 2.044l-.002.011c0 .062.028.116.07.154v.831a3.15 3.15 0 0 0 2.373 3.06l-.31.727a.71.71 0 0 0 .377.94.715.715 0 0 0 .94-.377l.476-1.117c.01-.023.015-.047.023-.071h8.562c.007.024.012.048.023.072l.475 1.116a.715.715 0 0 0 1.325-.013.71.71 0 0 0-.008-.55l-.31-.726a3.15 3.15 0 0 0 2.372-3.061v-.925l.024-.022v-.001a1.227 1.227 0 0 0-.868-2.092ZM4.997 1.329a.158.158 0 0 1 .123.006c.04.018.069.05.084.092l.149.413-1.478.533-.15-.414a.16.16 0 0 1 .097-.206l.588-.212.587-.212Zm9.971 3.127V7.43h-2.244V4.456h2.244ZM.971 4.692a.805.805 0 0 1 .573-.236h10.764v1.43H1.027A.806.806 0 0 1 .97 4.692Zm2.724 6.575a.3.3 0 0 1-.276.183.298.298 0 0 1-.117-.027.295.295 0 0 1-.157-.393l.346-.811c.014.001.028 0 .041.002.111.012.222.02.332.02h.268l-.437 1.026Zm10.88-.006a.294.294 0 0 1-.16.162.298.298 0 0 1-.117.027.3.3 0 0 1-.277-.183l-.436-1.026h.267c.11 0 .222-.008.333-.02.013-.001.027 0 .04-.002l.347.812a.296.296 0 0 1 .004.23Zm2.17-5.423a.874.874 0 0 1-.104.088.208.208 0 0 0-.04.299v.854a2.735 2.735 0 0 1-2.748 2.746H3.864c-.154 0-.31-.014-.466-.041a2.735 2.735 0 0 1-2.282-2.705v-.776h11.192v1.336c0 .116.093.209.208.209h2.66a.208.208 0 0 0 .209-.209V4.455h.788a.81.81 0 0 1 .572 1.383Z'
            />
        </svg>
    ),
    checkContent: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={75}
            height={74}
            fill='none'
            {...props}>
            <path
                fill='#fff'
                d='M36.96 55.69 18.73 73.92V55.69H0l18.73-18.73h18.23v18.73Z'
            />
            <path
                fill='#fff'
                d='M37.21 18.73 18.98 36.96V18.73H.25L18.98 0h18.23v18.73ZM74.17 55.69 55.938 73.92V55.69h-18.73l18.73-18.73h18.23v18.73Z'
            />
            <path
                fill='#fff'
                d='M74.17 18.73 55.938 36.96V18.73h-18.73L55.94 0h18.23v18.73Z'
            />
        </svg>
    ),
    Jeep: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={54}
            height={53}
            fill='none'
            {...props}>
            <path
                fill='#596B86'
                d='M53.165 50.895h-7.628a5.221 5.221 0 0 0 2.405-4.396 5.23 5.23 0 1 0-10.462 0c0 1.847.953 3.467 2.396 4.396h-22.9a5.221 5.221 0 0 0 2.405-4.396 5.23 5.23 0 1 0-10.462 0c0 1.847.953 3.467 2.397 4.396H1.123a.837.837 0 0 0-.835.835c0 .455.371.835.835.835h52.042c.464 0 .835-.38.835-.835a.837.837 0 0 0-.835-.835Zm-10.463-6.506a2.11 2.11 0 1 1-2.109 2.11 2.105 2.105 0 0 1 2.11-2.11Zm-28.56 0a2.11 2.11 0 1 1-.002 4.22 2.11 2.11 0 0 1 .002-4.22ZM2.464 15.145l7.113.084a2.202 2.202 0 0 0 2.236-2.185 2.208 2.208 0 0 0-2.186-2.236h-.033c.008-.042.008-.067.008-.11a2.962 2.962 0 0 0-2.92-2.986 2.947 2.947 0 0 0-2.978 2.784 2.454 2.454 0 0 0-1.19-.32C1.148 10.15.017 11.256 0 12.63a2.488 2.488 0 0 0 2.464 2.514ZM41.75 2.565c.464 0 .835-.38.835-.835V.835A.832.832 0 0 0 41.75 0a.837.837 0 0 0-.835.835v.886a.833.833 0 0 0 .835.844ZM38.45 2.835c.152.27.44.422.726.422A.83.83 0 0 0 39.902 2l-.448-.777A.83.83 0 0 0 38.307.92a.83.83 0 0 0-.304 1.148l.447.768ZM36.105 4.581l.767.44c.136.075.279.109.422.109a.836.836 0 0 0 .726-.422.847.847 0 0 0-.304-1.147l-.768-.448a.84.84 0 0 0-1.147.304.85.85 0 0 0 .303 1.164ZM35.708 7.712h.886c.464 0 .835-.38.835-.835a.832.832 0 0 0-.835-.835h-.886a.837.837 0 0 0-.835.835c0 .455.37.835.835.835ZM43.9 3.139c.136.075.28.11.423.11a.836.836 0 0 0 .725-.423l.447-.768a.847.847 0 0 0-.303-1.147.84.84 0 0 0-1.148.304l-.447.768a.84.84 0 0 0 .304 1.156ZM42.433 8.184a2.502 2.502 0 0 0-1.249-.32 2.609 2.609 0 0 0-2.607 2.607 2.614 2.614 0 0 0 2.607 2.607h7.459a2.319 2.319 0 0 0 2.32-2.32 2.324 2.324 0 0 0-2.32-2.32h-.034c.009-.042.009-.076.009-.118a3.099 3.099 0 0 0-3.097-3.097 3.098 3.098 0 0 0-3.088 2.961ZM38.425 6.868c0 .11.017.21.026.32a4.26 4.26 0 0 1 2.725-1.004h.068a4.752 4.752 0 0 1 2.202-2.16 3.231 3.231 0 0 0-1.696-.481 3.331 3.331 0 0 0-3.325 3.325ZM3.072 35.808c0-.666.11-1.316.329-1.923l1.46-4.202a2.545 2.545 0 0 0-1.325-.372 2.582 2.582 0 0 0-2.582 2.582v7.333c0 1.265.92 2.32 2.126 2.53v-5.948h-.008Z'
            />
            <path
                fill='#596B86'
                d='M7.747 26.469 4.979 34.45a4.173 4.173 0 0 0-.227 1.359v6.176h4.176a6.881 6.881 0 0 1 5.223-2.396 6.91 6.91 0 0 1 5.223 2.396h18.115a6.881 6.881 0 0 1 5.223-2.396c2.084 0 3.957.936 5.222 2.396h2.903v-2.514a4.678 4.678 0 0 0-4.345-4.666l-6.193-.439-4.928-8.606a4.16 4.16 0 0 0-3.594-2.084H11.662a4.155 4.155 0 0 0-3.915 2.793Zm14.824 1.156c0-.532.43-.97.97-.97h8.219c.421 0 .81.227 1.02.59l3.603 6.294a.967.967 0 0 1-.843 1.451H23.542a.97.97 0 0 1-.97-.97v-6.395Zm-2.607 0v6.404a.97.97 0 0 1-.97.97H9.3a.964.964 0 0 1-.911-1.283l2.168-6.269c.16-.472.608-.784 1.105-.784h7.333c.54-.009.97.422.97.962ZM49.613 46.5c0 .54-.068 1.062-.186 1.569h2.042c.565 0 1.03-.456 1.03-1.03v-2.345c0-.566-.456-1.03-1.03-1.03h-2.472c.388.87.616 1.822.616 2.835ZM4.093 43.664c-.565 0-1.03.456-1.03 1.03v2.345c0 .565.456 1.03 1.03 1.03h3.324a6.787 6.787 0 0 1 .43-4.404H4.094ZM20.444 43.664c.388.87.616 1.823.616 2.835 0 .54-.067 1.063-.185 1.57h15.111a6.787 6.787 0 0 1 .43-4.404H20.444Z'
            />
        </svg>
    ),
    carParking: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={56}
            height={48}
            fill='none'
            {...props}>
            <path
                fill='#596B86'
                d='M48.645 6.682c0-.88-.703-1.583-1.583-1.583h-1.7v3.224h1.7c.88-.059 1.583-.762 1.583-1.641Z'
            />
            <path
                fill='#596B86'
                d='M40.38 17.465h4.748v8.616l3.106.586v-9.202h4.748c1.348 0 2.403-1.113 2.403-2.403V2.403C55.385 1.055 54.27 0 52.982 0h-12.6c-1.349 0-2.404 1.114-2.404 2.403v12.6c-.058 1.349 1.055 2.462 2.403 2.462ZM43.43 3.106h3.633a3.527 3.527 0 0 1 3.517 3.517 3.527 3.527 0 0 1-3.517 3.517h-1.7v4.102H43.43V3.106ZM52.395 30.36l-11.487-2.11c-.117 0-.234-.118-.293-.177-1.113-1.347-8.205-8.79-12.835-8.79H11.546c-3.81 0-7.268 3.574-9.436 6.563C.703 27.722 0 30.008 0 32.352v6.798a3.927 3.927 0 0 0 3.927 3.927h.879C5.509 45.89 8.029 48 11.076 48c3.049 0 5.569-2.11 6.272-4.923h21.158C39.209 45.89 41.729 48 44.776 48c3.049 0 5.568-2.11 6.272-4.923h.117c1.934 0 3.634-1.465 3.869-3.4l.644-4.922c.175-2.11-1.231-4.044-3.282-4.396ZM10.96 44.893a3.402 3.402 0 0 1-3.4-3.4c0-1.875 1.524-3.399 3.4-3.399 1.875 0 3.399 1.524 3.399 3.4.059 1.875-1.465 3.399-3.4 3.399Zm7.677-15.707H8.44c-.527 0-.879-.527-.586-.996 1.524-2.697 5.334-5.334 7.209-5.334h2.579c.351 0 .644.235.703.587l.996 4.922c.06.41-.293.82-.703.82v.001Zm16.41 0H23.795a.696.696 0 0 1-.703-.586l-.997-4.923c-.058-.41.235-.82.704-.82h4.98c1.7 0 5.217 2.695 7.737 5.098.469.469.176 1.231-.468 1.231Zm9.612 15.707a3.402 3.402 0 0 1-3.4-3.4c0-1.875 1.525-3.399 3.4-3.399 1.876 0 3.4 1.524 3.4 3.4 0 1.875-1.525 3.399-3.4 3.399Z'
            />
        </svg>
    ),
    waiter: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={55}
            height={51}
            fill='none'
            {...props}>
            <path
                fill='#596B86'
                fillRule='evenodd'
                d='M14.153 11.062c2.666 0 4.84-2.484 4.84-5.531 0-3.047-2.174-5.531-4.84-5.531-2.665 0-4.84 2.485-4.84 5.531s2.175 5.531 4.84 5.531ZM8.722 14.423c.993-2.084 3.466-2.958 5.525-1.952a4.143 4.143 0 0 1 1.815 1.73c.894 1.354 2.366 2.994 4.18 4.337 1.451 1.074 3.096 1.934 4.785 2.248 1.123.208 1.867 1.299 1.66 2.436a2.07 2.07 0 0 1-2.406 1.681c-2.368-.44-4.584-1.577-6.486-2.986a22.118 22.118 0 0 1-2.135-1.804c-.111.61-.223 1.306-.331 2.044-.413 2.812-.672 5.91-.672 7.329 0 1.938 1.685 4.762 3.062 8.297 1.243 3.192 2.125 6.868 2.185 10.625.02 1.348-1.042 2.457-2.373 2.478-1.33.021-2.427-1.054-2.448-2.402-.05-3.099-.803-6.195-1.863-8.922a29.098 29.098 0 0 0-1.893-3.966c-.358 2.307-.99 4.784-1.94 7.07-1.267 3.047-3.11 5.801-5.64 7.507a2.396 2.396 0 0 1-3.346-.69 2.464 2.464 0 0 1 .68-3.387c1.656-1.117 2.933-3.087 3.862-5.326 1.873-4.505 1.417-6.01 1.417-11.285 0-1.704.298-5.323.77-8.543.383-2.616.92-5.113 1.591-6.52v.001ZM28.94 24.613h23.508v-4.148c0-.38.311-.691.692-.691.38 0 .691.31.691.69v4.15c.38 0 .692.31.692.691 0 .38-.311.691-.692.691v6.915c.38 0 .692.31.692.691 0 .38-.311.692-.692.692v6.914c.38 0 .692.311.692.691 0 .38-.311.692-.692.692v4.15c0 .379-.311.69-.691.69a.694.694 0 0 1-.692-.69v-4.15H28.94v4.149c0 .38-.312.691-.692.691a.694.694 0 0 1-.691-.691v-4.15a.693.693 0 0 1-.691-.69v-.001c0-.38.31-.691.69-.691v-6.915a.694.694 0 0 1-.69-.692c0-.38.31-.691.69-.691v-6.914a.693.693 0 0 1-.69-.692c0-.38.31-.691.69-.691v-4.149c0-.38.312-.691.692-.691.38 0 .692.31.692.691v4.15Zm23.507 1.383H28.94v6.914h23.508l-.001-6.914Zm0 8.297H28.94v6.914h23.508l-.001-6.914ZM28.249 50.886c.761 0 1.382-.62 1.382-1.382 0-.761-.62-1.382-1.382-1.382-.762 0-1.383.62-1.383 1.382 0 .762.62 1.382 1.383 1.382ZM53.139 50.886c.762 0 1.383-.62 1.383-1.382 0-.761-.62-1.382-1.383-1.382-.762 0-1.382.62-1.382 1.382 0 .762.62 1.382 1.382 1.382Z'
                clipRule='evenodd'
            />
            <path
                fill='#596B86'
                fillRule='evenodd'
                d='M38.512 17.032a6.913 6.913 0 0 1 6.33 6.89H31.014a6.915 6.915 0 0 1 6.33-6.89.691.691 0 1 1 1.168 0ZM48.99 10.785c0 1.908 1.383 2.329 1.383 4.148v8.297c0 .38-.312.692-.692.692h-3.457a.694.694 0 0 1-.692-.692v-3.11h3.458v-3.458h-3.458v-1.729c0-1.82 1.383-2.24 1.383-4.148V8.71h2.075v2.074ZM46.917 5.405h2.074v2.766h-2.074V5.405Z'
                clipRule='evenodd'
            />
        </svg>
    ),
    inBeach: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={50}
            height={50}
            fill='none'
            {...props}>
            <path
                fill='#596B86'
                fillRule='evenodd'
                d='m6.435 24.527 9.77 9.652c.367.362.865.566 1.383.566h30.458c.518 0 1.015.203 1.382.565.366.362.572.853.572 1.365v5.79c0 .473-.176.93-.494 1.283-.318.353-.756.579-1.232.635l-.228.013H44.26l1.818 2.53.008.01a1.916 1.916 0 0 1-.49 2.694l-.038.028a1.975 1.975 0 0 1-1.45.313 1.958 1.958 0 0 1-1.254-.784l-3.436-4.785-.004-.004H10.908l-.004.003-3.436 4.786a1.958 1.958 0 0 1-1.254.784 1.975 1.975 0 0 1-1.45-.313l-.04-.028a1.914 1.914 0 0 1-.482-2.702l1.817-2.532H3.1a1.959 1.959 0 0 1-1.693-.965 1.91 1.91 0 0 1 0-1.93 1.959 1.959 0 0 1 1.693-.966l3.908-3.86-6.435-6.357a1.917 1.917 0 0 1 0-2.729l3.1-3.061a1.966 1.966 0 0 1 1.381-.565c.518 0 1.015.203 1.382.564Zm2.527 14.078-1.955 1.93h3.733a1.93 1.93 0 0 0-.397-.565l-1.381-1.365Zm21.496-19.302v13.511H26.55V19.303H12.87c-.829 0-1.657-.695-1.89-1.492a17.279 17.279 0 0 1 4.93-10.636 17.678 17.678 0 0 1 10.64-5.139V1.93c0-.69.372-1.327.977-1.671a1.976 1.976 0 0 1 1.954 0c.605.344.977.981.977 1.671v.106a17.68 17.68 0 0 1 10.638 5.138 17.283 17.283 0 0 1 4.931 10.633c-.23.8-1.06 1.495-1.89 1.495H30.459Z'
                clipRule='evenodd'
            />
        </svg>
    ),
    noWiFi: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={59}
            height={50}
            fill='none'
            {...props}>
            <path
                fill='#596B86'
                d='M32.337 46.793a3.207 3.207 0 1 1-6.414 0 3.207 3.207 0 0 1 6.414 0ZM42.646 30.877a21.371 21.371 0 0 0-27.03 0 2.928 2.928 0 1 0 3.72 4.522 15.517 15.517 0 0 1 19.59 0 2.928 2.928 0 1 0 3.72-4.522Z'
            />
            <path
                fill='#596B86'
                d='M55.236 24.57c.647-7.09-5.365-13.745-12.482-13.828C38.85-2.736 21.34-3.81 15.98 9.103 7.592 11.1 2.754 16.999 4.05 23.947.657 25.596-.382 29.22.12 32.014a6.621 6.621 0 0 0 6.614 5.617h7.439a.697.697 0 0 0 .432-1.222 4.338 4.338 0 0 1 .14-6.595 22.744 22.744 0 0 1 28.772 0c2.054 1.595 2.146 4.957.123 6.61a.692.692 0 0 0 .449 1.207h7.349c3.837.18 6.764-3.316 6.814-7.088-.08-2.67-1.146-4.773-3.015-5.973Zm-44.605.558a.687.687 0 0 1-.93.279 5.894 5.894 0 0 0-4.619-.417.687.687 0 0 0 .426-.838 5.829 5.829 0 0 1-.132-.67 7.45 7.45 0 0 1 4.975.716c.334.18.459.596.28.93Zm14.518-13.873a.687.687 0 0 1-.935.266 11.513 11.513 0 0 0-7.56-1.169.687.687 0 0 0 .468-.416c.152-.376.312-.747.49-1.104a12.912 12.912 0 0 1 7.272 1.489c.33.184.45.603.265.934Zm7.793 5.7a.687.687 0 1 1-1.117-.797 12.707 12.707 0 0 1 9.492-5.389c.092.275.175.55.252.834a.71.71 0 0 0 .665.509 11.329 11.329 0 0 0-9.292 4.842Zm18.18 7.733a.687.687 0 1 1 0-1.374 7.223 7.223 0 0 1 2.772.545c-.005.335-.028.673-.065 1.008a.688.688 0 0 0 .321.66 5.806 5.806 0 0 0-3.028-.839Z'
            />
            <path
                fill='#596B86'
                d='M36.122 37.172a12.447 12.447 0 0 0-13.983 0 2.933 2.933 0 0 0 3.367 4.802 6.565 6.565 0 0 1 7.248 0 2.933 2.933 0 0 0 3.368-4.802Z'
            />
        </svg>
    ),
    breakfast: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={70}
            height={49}
            fill='none'
            {...props}>
            <path
                fill='#596B86'
                d='M69.996 11.504v-1.63c0-.235-.022-.454-.029-.685.002-.045.026-.084.026-.13V2.538c0-1.347-1.1-2.446-2.446-2.446h-1.63c-2.24 0-4.075 4.403-4.075 9.782v14.758a4.078 4.078 0 0 1 3.181 3.18h.08v18.75a2.45 2.45 0 0 0 2.443 2.445h.006c1.345 0 2.448-1.1 2.448-2.445V11.504h-.004ZM10.591 0a.817.817 0 0 0-.814.815V12.23a.813.813 0 1 1-1.63 0V.815A.817.817 0 0 0 7.333 0a.817.817 0 0 0-.815.815V12.23a.815.815 0 0 1-1.63 0V.815a.815.815 0 0 0-1.63 0V12.23a.816.816 0 0 1-.813.814.812.812 0 0 1-.815-.814V.815a.815.815 0 0 0-1.63 0v15.142c0 1.563 1.37 2.89 3.26 3.392V46.47c0 1.345 1.1 2.445 2.447 2.445 1.344 0 2.446-1.1 2.446-2.445L8.15 19.35c1.89-.502 3.261-1.83 3.261-3.392V.815A.823.823 0 0 0 10.591 0ZM35 9.336c-6.445 0-11.668 5.225-11.668 11.67H46.67C46.668 14.56 41.445 9.336 35 9.336Zm0 2.1c4.556 0 8.377 3.198 9.337 7.468H25.664c.96-4.27 4.78-7.468 9.336-7.468ZM33.948 0h2.098v7.002h-2.098V0ZM16.932 8.426l6.064 3.5-1.05 1.819-6.064-3.5 1.05-1.819ZM25.57 1.872l3.5 6.063-1.819 1.05-3.5-6.064 1.82-1.05ZM53.104 8.423l1.05 1.818-6.06 3.504-1.051-1.818 6.06-3.504ZM44.464 1.872l1.818 1.051-3.504 6.06-1.819-1.05 3.505-6.061ZM51.723 25.673l-6.609.002h-26.44v9.915c0 5.453 4.465 9.916 9.916 9.916h11.569c4.288 0 7.925-2.777 9.3-6.61h2.265c3.65 0 6.611-2.96 6.611-6.613 0-3.65-2.962-6.61-6.61-6.61h-.002Zm0 8.762h-1.652v-4.298h1.652a2.148 2.148 0 1 1 0 4.298Z'
            />
        </svg>
    ),
    grayTopArrows: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={27}
            height={27}
            fill='none'
            {...props}>
            <path
                fill='#A0B0C6'
                d='M27 13.682 13.682 27V13.682H0L13.682 0H27v13.682Z'
            />
        </svg>
    ),
    worldWithPlane: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={19}
            height={21}
            fill='none'
            {...props}>
            <path
                fill='#DA8907'
                d='m17.75 15.172-.538-.328a9.312 9.312 0 0 0 1.698-5.389C18.91 4.242 14.668 0 9.455 0c-.948 0-1.877.139-2.76.411A9.398 9.398 0 0 0 0 9.455c0 1.517.35 2.966 1.037 4.305a9.413 9.413 0 0 0 10.777 4.842l-.002.018v1.944a.436.436 0 0 0 .706.342l1.517-1.199 1.517 1.199a.436.436 0 0 0 .706-.342V18.62a.436.436 0 0 0-.198-.365l-.827-.538.065-1.175 2.103.613a.433.433 0 0 0 .558-.418v-1.192a.434.434 0 0 0-.209-.373Zm.288-5.716a8.452 8.452 0 0 1-1.572 4.934l-.956-.582a.281.281 0 0 1-.084-.154c.02-.3.156-2.948-1.28-3.32a.43.43 0 0 0-.219 0c-.561.146-.88.639-1.063 1.2l-1.046-.297-.31-.092c-1.062-.315-2.067-.611-2.33-1.63-.093-.365-.041-.77.136-1.057a.878.878 0 0 1 .58-.412 1.13 1.13 0 0 1 .242-.025c2.18 0 3.204-.464 3.902-3.34.15-.622.471-1.22.937-1.79a8.564 8.564 0 0 1 3.063 6.565Zm-11.402-8.1c.553.925.81 1.697.702 2.142a.517.517 0 0 1-.261.348l-.136.077c-1.532.88-4.096 2.353-2.625 4.99.513.917.465 1.956-.13 2.851-.579.872-1.533 1.391-2.48 1.372a8.455 8.455 0 0 1-.834-3.68 8.525 8.525 0 0 1 5.764-8.101Zm-4.467 12.63c1.073-.134 2.096-.766 2.744-1.74.77-1.159.832-2.565.164-3.759-.974-1.746.4-2.718 2.298-3.808l.138-.079c.346-.201.579-.512.672-.898.157-.653-.075-1.527-.688-2.603a8.564 8.564 0 0 1 6.785 1.264c-.538.664-.912 1.37-1.092 2.111-.624 2.572-1.344 2.675-3.055 2.675-.15 0-.295.015-.428.045A1.74 1.74 0 0 0 8.57 8c-.301.49-.39 1.136-.237 1.731.385 1.499 1.794 1.915 2.928 2.25l1.421.407a6.944 6.944 0 0 0-.037 1.227.283.283 0 0 1-.084.193l-2.24 1.365a.435.435 0 0 0-.21.372v1.192a.436.436 0 0 0 .558.419l2.102-.614.045.82-.218.08c-1 .395-2.059.596-3.144.596a8.54 8.54 0 0 1-7.286-4.053Zm14.919 2.17-2.071-.604a.437.437 0 0 0-.557.395l-.11 1.974a.435.435 0 0 0 .197.39l.84.546v.808l-1.08-.854a.435.435 0 0 0-.541 0l-1.08.854v-.808l.839-.547a.434.434 0 0 0 .197-.39l-.11-1.974a.437.437 0 0 0-.556-.395l-2.071.605v-.367l2.062-1.256a.454.454 0 0 0 .047-.034c.258-.208.416-.531.423-.903-.055-.83.078-2.082.52-2.369.441.287.573 1.542.518 2.407.007.333.165.657.423.865.015.012.03.024.047.034l2.063 1.256v.367Z'
            />
        </svg>
    ),
    comment: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={19}
            height={17}
            fill='none'
            {...props}>
            <path
                fill='#DA8907'
                d='M6.188 7.409a1.061 1.061 0 1 1-2.122 0 1.061 1.061 0 0 1 2.122 0ZM10.53 7.409a1.061 1.061 0 1 1-2.123 0 1.061 1.061 0 0 1 2.122 0ZM14.87 7.409a1.061 1.061 0 1 1-2.122 0 1.061 1.061 0 0 1 2.123 0Z'
            />
            <path
                fill='#DA8907'
                d='M.651 16.882A.65.65 0 0 1 0 16.23V3.568C0 1.601 1.601 0 3.568 0h11.864A3.573 3.573 0 0 1 19 3.568v6.962a3.572 3.572 0 0 1-3.568 3.568H3.83L1.1 16.701a.649.649 0 0 1-.45.18ZM3.57 1.302a2.268 2.268 0 0 0-2.266 2.266V14.71l1.816-1.733a.65.65 0 0 1 .45-.18h11.862a2.268 2.268 0 0 0 2.266-2.266V3.57a2.269 2.269 0 0 0-2.265-2.266H3.569Z'
            />
        </svg>
    ),
    rightArrow: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={23}
            height={10}
            fill='none'
            {...props}>
            <path fill='#596B86' d='M21.143 4.365v.76H0v-.76h21.143Z' />
            <path
                fill='#596B86'
                d='m14.614 8.844 6.263-4.1L14.614.646 15.032 0l7.25 4.745-7.25 4.745-.418-.646Z'
            />
        </svg>
    ),
    lightGrayTopArrow: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={39}
            height={39}
            fill='none'
            {...props}>
            <path
                fill='#D2DCE9'
                d='M39 19.764 19.764 39V19.764H0L19.764 0H39v19.764Z'
            />
        </svg>
    ),
    location: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={13}
            height={19}
            fill='none'
            {...props}>
            <path
                fill='#7587A0'
                d='M6.384 0A6.388 6.388 0 0 0 0 6.384C0 9.554 5.244 16.69 6.407 18.24c1.163-1.55 6.361-8.71 6.361-11.879C12.745 2.851 9.895 0 6.384 0Zm0 9.348a2.89 2.89 0 0 1-2.873-2.873c0-1.596 1.3-2.873 2.873-2.873a2.875 2.875 0 0 1 2.873 2.873c0 1.596-1.3 2.873-2.873 2.873Z'
            />
        </svg>
    ),
    call: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={15}
            fill='none'
            {...props}>
            <path
                fill='#7587A0'
                fillRule='evenodd'
                d='m15.79 11.93-4.045-2.935c-.257-.188-.513-.125-.706.062l-.321.313-1.027.999c-.321.312-.835.312-1.22 0l-3.788-3.31c-.193-.126-.257-.375-.257-.625a.79.79 0 0 1 .257-.625l1.091-1.062a.556.556 0 0 0 .064-.687L3.078.187C3.012.125 2.884 0 2.691 0c-.128 0-.32 0-.45.125L.639 1.375c-.642.499-.77 1.31-.514 2.06 2.119 5.497 6.677 9.62 12.456 11.494.642.187 1.412 0 1.862-.5.321-.375 1.092-1.312 1.22-1.437.064-.062.128-.187.193-.25.128-.124.128-.25.128-.437.064-.187-.064-.312-.193-.375Z'
                clipRule='evenodd'
            />
        </svg>
    ),
    mail: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={11}
            fill='none'
            {...props}>
            <path
                fill='#7587A0'
                d='M1.261 0C1.096 0 .939.035.795.092L8.11 6.318c.32.272.678.273.999 0L16.43.086a1.267 1.267 0 0 0-.46-.086H1.261ZM.013 1.077c-.008.06-.013.122-.013.184v8.406c0 .698.562 1.26 1.261 1.26h14.71c.699 0 1.261-.561 1.261-1.26V1.26a1.28 1.28 0 0 0-.013-.184l-7.29 6.2a2.047 2.047 0 0 1-2.64 0l-7.276-6.2Z'
            />
        </svg>
    ),
    facebook: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={16}
            fill='none'
            {...props}>
            <path
                fill='#00B2FF'
                d='M8.01.694C3.978.694.708 3.984.708 8.04c0 3.683 2.697 6.725 6.21 7.256v-5.31H5.113v-1.93h1.807V6.77c0-2.127 1.03-3.06 2.787-3.06.842 0 1.287.062 1.498.09v1.686h-1.199c-.746 0-1.007.712-1.007 1.514v1.055h2.187l-.296 1.93h-1.89v5.325c3.563-.486 6.313-3.552 6.313-7.27 0-4.058-3.27-7.347-7.302-7.347Z'
            />
        </svg>
    ),
    instagram: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={13}
            height={14}
            fill='none'
            {...props}>
            <path
                fill='#D23939'
                d='M3.862.936a3.698 3.698 0 0 0-3.69 3.696V9.91a3.698 3.698 0 0 0 3.692 3.694h5.273a3.698 3.698 0 0 0 3.691-3.695V4.63A3.698 3.698 0 0 0 9.136.936H3.862Zm6.435 2.027a.507.507 0 1 1 0 1.013.507.507 0 0 1 0-1.013ZM6.5 3.976A3.295 3.295 0 0 1 9.79 7.27a3.296 3.296 0 0 1-3.29 3.294A3.296 3.296 0 0 1 3.21 7.27 3.296 3.296 0 0 1 6.5 3.976Zm0 1.014a2.28 2.28 0 0 0-2.278 2.28A2.28 2.28 0 1 0 6.5 4.99Z'
            />
        </svg>
    ),
    twitter: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={17}
            height={15}
            fill='none'
            {...props}>
            <path
                fill='#00B2FF'
                d='M16.557 2.31a6.462 6.462 0 0 1-1.905.547A3.45 3.45 0 0 0 16.11.945c-.64.394-1.35.684-2.105.837A3.237 3.237 0 0 0 11.589.694c-1.83 0-3.314 1.545-3.314 3.45 0 .269.03.532.086.787-2.753-.146-5.195-1.52-6.83-3.608a3.54 3.54 0 0 0-.448 1.738 3.49 3.49 0 0 0 1.474 2.873 3.25 3.25 0 0 1-1.502-.431v.04c0 1.674 1.142 3.067 2.657 3.384-.277.08-.57.124-.871.124a3.37 3.37 0 0 1-.625-.063c.422 1.367 1.646 2.367 3.095 2.396a6.493 6.493 0 0 1-4.905 1.428 9.138 9.138 0 0 0 5.08 1.549c6.094 0 9.428-5.258 9.428-9.819 0-.15-.004-.298-.011-.445a6.705 6.705 0 0 0 1.654-1.787Z'
            />
        </svg>
    ),
};
