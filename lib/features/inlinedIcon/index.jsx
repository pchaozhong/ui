import React, { PropTypes } from 'react'
import values from '../../values'

export const INLINED_ICONS = {
  CALENDAR: 'calendar',
  CARD: 'card',
  CHECK: 'check',
  CLOSE: 'close',
  EMAIL: 'email',
  LOCK: 'lock',
  LOGOUT: 'logout',
  PERSON: 'person',
  PHONE: 'phone',
  QUESTION: 'question',
  DETAILS: 'details'
}

export const renderInlinedIcon = ({ icon }, styles) => {
  if (icon) {
    switch (icon) {
      case INLINED_ICONS.CALENDAR:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <path className={styles.fill} d='M3,6.99715203 C3,5.34187067 4.34237885,4 6.00335124,4 L13.9966488,4 C15.6553538,4 17,5.34162278 17,6.99715203 L17,13.002848 C17,14.6581293 15.6576211,16 13.9966488,16 L6.00335124,16 C4.34464615,16 3,14.6583772 3,13.002848 L3,6.99715203 Z M4,6.99961498 C4,5.89525812 4.90195036,5 6.0085302,5 L13.9914698,5 C15.1007504,5 16,5.88743329 16,6.99961498 L16,13.000385 C16,14.1047419 15.0980496,15 13.9914698,15 L6.0085302,15 C4.8992496,15 4,14.1125667 4,13.000385 L4,6.99961498 Z'></path>

            <g className={styles.stroke}>
              <path
                d='M3.5,8.5 L16.5,8.5'
                strokeLinecap='square'></path>
              <path
                d='M6.5,2.5 L6.5,5.5'
                strokeLinecap='round'></path>
              <path
                d='M13.5,2.5 L13.5,5.5'
                strokeLinecap='round'></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.CARD:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <g
              className={styles.fill}
              transform='translate(2.000000, 4.000000)'>
              <path d='M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0'></path>
              <path d='M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8'></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.CHECK:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <g
              transform='translate(2.000000, 2.000000)'
              className={styles.stroke}>
              <circle cx='8' cy='8' r='7.5'></circle>
              <path d='M6.5,11 L4.5,9' strokeLinecap='round'></path>
              <path d='M11.5,11 L6.5,6' strokeLinecap='round' transform='translate(9.000000, 8.500000) scale(1, -1) translate(-9.000000, -8.500000) '></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.CLOSE:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <g
              className={styles.stroke}
              transform='translate(2.500000, 2.500000)'>
              <circle cx='7.5' cy='7.5' r='7.5'></circle>
              <path
                d='M10,10 L5,5'
                strokeLinecap='round'
                transform='translate(7.500000, 7.500000) scale(1, -1) translate(-7.500000, -7.500000) '></path>
              <path
                d='M10,10 L5,5'
                strokeLinecap='round'
                transform='translate(7.500000, 7.500000) scale(-1, -1) translate(-7.500000, -7.500000) '></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.EMAIL:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <path
              className={styles.fill}
              d='M3,6.99715203 L3,6.99715203 L3,13.002848 C3,14.1050732 3.89865845,15 5.00947762,15 L14.9905224,15 C16.1077336,15 17,14.1091884 17,13.002848 L17,6.99715203 C17,5.89492678 16.1013416,5 14.9905224,5 L5.00947762,5 C3.89226636,5 3,5.89081159 3,6.99715203 L3,6.99715203 Z M2,6.99715203 C2,5.34187067 3.33663106,4 5.00947762,4 L14.9905224,4 C16.652611,4 18,5.34162278 18,6.99715203 L18,13.002848 C18,14.6581293 16.6633689,16 14.9905224,16 L5.00947762,16 C3.34738902,16 2,14.6583772 2,13.002848 L2,6.99715203 L2,6.99715203 Z' ></path>
            <polyline
              className={styles.stroke}
              points='2.50244141 7.49822998 10 11 17.5 7.49822998'></polyline>
          </svg>
        )

      case INLINED_ICONS.LOCK:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <g className={styles.fill}>
              <path d='M3,9.99810135 C3,8.89458045 3.88649038,8 4.99654009,8 L13.6481934,8 L14.9963624,8 C16.1029409,8 17,8.88670635 17,9.99810135 L17,14.0018986 C17,15.1054196 16.1029399,16 14.9941413,16 L5.00585866,16 C3.89805351,16 3,15.1132936 3,14.0018986 L3,9.99810135 Z M4,9.99077797 C4,9.44358641 4.44625523,9 5.00233387,9 L13.1270229,9 L15.0011024,9 C15.5527783,9 16,9.45097518 16,9.99077797 L16,14.009222 C16,14.5564136 15.544239,15 14.9975267,15 L5.00247329,15 C4.44882258,15 4,14.5490248 4,14.009222 L4,9.99077797 Z'></path>
              <path d='M14,6.00650452 C14,3.79394555 12.209139,2 10,2 C7.79535615,2 6,3.79377317 6,6.00650452 L6,9 L14,9 L14,6.00650452 Z M13,5.86178894 C13,4.28138968 11.6568542,3 10,3 C8.34651712,3 7,4.28126655 7,5.86178894 L7,8 L13,8 L13,5.86178894 Z'></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.LOGOUT:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <g transform='translate(3.000000, 3.000000)'>
              <path d='M4.5,7 L13.5,7'
                className={styles.stroke}
                strokeLinecap='round'></path>
              <path d='M13.5,7 L11.5,5'
                className={styles.stroke}
                strokeLinecap='round'></path>
              <path d='M13.5,9 L11.5,7'
                className={styles.stroke}
                strokeLinecap='round'
                transform='translate(12.500000, 8.000000) scale(1, -1) translate(-12.500000, -8.000000) '></path>
              <path
                d='M9,3.50579834 C9,1.57156222 7.4277415,0 5.49074554,0 L3.50925446,0 C1.57289521,0 0,1.57023046 0,3.50579834 L0,10.4942017 C0,12.4284378 1.5722585,14 3.50925446,14 L5.49074554,14 C7.42710479,14 9,12.4297695 9,10.4942017 C9,10.2180593 8.77614237,9.99420166 8.5,9.99420166 C8.22385763,9.99420166 8,10.2180593 8,10.4942017 C8,11.8771049 6.87519926,13 5.49074554,13 L3.50925446,13 C2.12444412,13 1,11.8760538 1,10.4942017 L1,3.50579834 C1,2.12289514 2.12480074,1 3.50925446,1 L5.49074554,1 C6.87555588,1 8,2.12394616 8,3.50579834 C8,3.78194071 8.22385763,4.00579834 8.5,4.00579834 C8.77614237,4.00579834 9,3.78194071 9,3.50579834 L9,3.50579834 Z'
                className={styles.fill}></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.PERSON:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <g className={styles.fill} transform='translate(4.000000, 2.000000)'>
              <path d='M6,7 C7.93299662,7 9.5,5.43299662 9.5,3.5 C9.5,1.56700338 7.93299662,0 6,0 C4.06700338,0 2.5,1.56700338 2.5,3.5 C2.5,5.43299662 4.06700338,7 6,7 Z M6,6 C7.38071187,6 8.5,4.88071187 8.5,3.5 C8.5,2.11928813 7.38071187,1 6,1 C4.61928813,1 3.5,2.11928813 3.5,3.5 C3.5,4.88071187 4.61928813,6 6,6 Z'></path>
              <path d='M2.42087669,7.51338151 C0.899563265,8.95690818 2.63721597e-12,10.4595968 3.63797881e-12,12 C2.14105531e-12,13.5287504 1.66818438,15 3.50579834,15 L8.49420166,15 C10.4100544,15 12,13.6785348 12,12 C12,10.4595968 11.1004367,8.95690818 9.57912331,7.51338151 L9.30881113,7.25689074 L8.98575921,7.44261539 C8.08483012,7.96056539 7.06314723,8.23699945 6,8.23699945 C4.93685277,8.23699945 3.91516988,7.96056539 3.01424079,7.44261539 L2.69118887,7.25689074 L2.42087669,7.51338151 L2.42087669,7.51338151 Z M3.10919467,8.23879061 L2.51583058,8.30955672 C3.56740912,8.91411607 4.76076579,9.23699945 6,9.23699945 C7.23923421,9.23699945 8.43259088,8.91411607 9.48416942,8.30955672 L8.89080533,8.23879061 C10.2323638,9.51175346 11,10.7940625 11,12 C11,13.0811241 9.89443721,14 8.49420166,14 L3.50579834,14 C2.19445892,14 1,12.9465509 1,12 C1,10.7940625 1.76763616,9.51175346 3.10919467,8.23879061 L3.10919467,8.23879061 Z'></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.PHONE:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <path
              className={styles.fill}
              d='M16.1584935,15.0378927 L15.4704935,15.6337645 L15.3984935,15.6811001 C13.9224935,16.8190109 10.2464935,15.3599605 7.36749354,12.493836 C4.48949354,9.62863958 3.17849354,6.12209216 4.51449354,4.82268337 L4.55549354,4.77534776 L5.24649354,4.17669157 C5.44049354,4.00869658 5.71849354,3.91959426 5.96249354,3.9298039 C6.23049354,3.93908539 6.47749354,4.0430381 6.65949354,4.22309903 L8.02249354,5.58005306 C8.20449354,5.76011399 8.29949354,5.99679202 8.28949354,6.24553599 C8.27949354,6.49427996 8.16849354,6.72353279 7.97349354,6.89245594 L7.13749354,7.61548411 L7.12849354,7.80389839 C7.12449354,7.86422808 7.06849354,9.31214073 8.94549354,11.1795768 C10.7664935,12.9931802 12.3264935,13.0414439 12.3914935,13.0433002 L12.5954935,13.0460847 L13.4294935,12.3230565 C13.8334935,11.9731443 14.4674935,11.9944917 14.8444935,12.369464 L16.2074935,13.7254899 C16.3884935,13.9064789 16.4834935,14.143157 16.4734935,14.3919009 C16.4644935,14.6406449 16.3524935,14.8698977 16.1584935,15.0378927 M15.5754935,11.7355381 C14.8234935,10.9883781 13.5564935,10.9466114 12.7484935,11.6436514 L12.2344935,12.0882348 C11.8384935,12.0102703 10.8424935,11.7076936 9.67649354,10.5475072 C8.46549354,9.34091335 8.20049354,8.38491974 8.14249354,8.01551639 L8.65549354,7.57093295 C9.04549354,7.23401482 9.26949354,6.774581 9.28849354,6.27802121 C9.30749354,5.78146142 9.11749354,5.30903351 8.75449354,4.94705535 L7.39049354,3.59010132 C7.02749354,3.22812316 6.53249354,3.0192896 5.99749354,3.00258292 C5.47749354,2.97566659 4.95349354,3.16036827 4.56449354,3.49821456 L3.77949354,4.19432641 C2.04349354,5.87984523 3.29849354,9.80405977 6.63649354,13.1259055 C9.09649354,15.5762192 11.9864935,17 14.0834935,17 C14.8314935,17 15.4774935,16.8190109 15.9684935,16.4384698 L16.8404935,15.7163697 C17.6464935,15.0184016 17.6914935,13.8415085 16.9384935,13.0924921 L15.5754935,11.7355381 Z'></path>
          </svg>
        )

      case INLINED_ICONS.QUESTION:
        return (
          <svg className={styles.icon} viewBox='0 0 20 20'>
            <g transform='translate(2.000000, 2.000000)'>
              <path
                d='M8,16 C12.418278,16 16,12.418278 16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 L8,16 Z M8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 L8,15 Z'
                className={styles.fill}></path>
              <path
                d='M8.5,9.54003906 C8.5,9.25177955 8.61326781,9.11890691 9.06315953,8.85553321 C8.97875302,8.90494611 9.37878081,8.67380503 9.48395355,8.60897505 C9.72920228,8.45780023 9.92654737,8.31148899 10.1066093,8.13591664 C10.8475673,7.41343344 11,6.98233157 11,6 C11,4.34314575 9.65685425,3 8,3 C6.34314575,3 5,4.34314575 5,6 C5,6.27614237 5.22385763,6.5 5.5,6.5 C5.77614237,6.5 6,6.27614237 6,6 C6,4.8954305 6.8954305,4 8,4 C9.1045695,4 10,4.8954305 10,6 C10,6.73058436 9.93924203,6.90241678 9.40848485,7.41994024 C9.28805746,7.53736493 9.14689108,7.64202538 8.9592205,7.75770822 C8.86825969,7.81377776 8.48665124,8.03427591 8.55794825,7.99253752 C7.8332105,8.41681042 7.5,8.80769425 7.5,9.54003906 C7.5,9.81618144 7.72385763,10.0400391 8,10.0400391 C8.27614237,10.0400391 8.5,9.81618144 8.5,9.54003906 L8.5,9.54003906 Z'
                className={styles.fill}></path>
              <path
                d='M8,13 C8.27614237,13 8.5,12.7761424 8.5,12.5 C8.5,12.2238576 8.27614237,12 8,12 C7.72385763,12 7.5,12.2238576 7.5,12.5 C7.5,12.7761424 7.72385763,13 8,13 Z'
                className={styles.fill}></path>
              <path
                d='M8,10.5 L8,9.5'
                className={styles.stroke}
                strokeLinecap='round'></path>
            </g>
          </svg>
        )

      case INLINED_ICONS.DETAILS:
        return (
          <svg className={styles.icon} viewBox='0 0 22 22'>
            <g transform='translate(3, 2)'>
              <path className={styles.fill}
                d='M13.5,17 L2.5,17 C1.673,17 1,16.327 1,15.5 L1,2.5 C1,1.673 1.673,1 2.5,1 L10,1 L10,3.5 C10,4.879 11.121,6 12.5,6 L15,6 L15,15.5 C15,16.327 14.327,17 13.5,17 L13.5,17 Z M11,1.707 L14.293,5 L12.5,5 C11.673,5 11,4.327 11,3.5 L11,1.707 Z M15.962,5.309 C15.936,5.248 15.899,5.192 15.853,5.146 L10.854,0.147 C10.808,0.101 10.752,0.064 10.691,0.038 C10.63,0.013 10.565,0 10.5,0 L2.5,0 C1.121,0 0,1.121 0,2.5 L0,15.5 C0,16.879 1.121,18 2.5,18 L13.5,18 C14.879,18 16,16.879 16,15.5 L16,5.5 C16,5.435 15.987,5.37 15.962,5.309 L15.962,5.309 Z' />
            </g>

            <g className={styles.stroke}
              strokeLinecap='round'
              strokeWidth='1'>
              <line x1='5.72' x2='12.12' y1='10.5' y2='10.5' />
              <line x1='5.72' x2='14.25' y1='13.55' y2='13.55' />
              <line x1='5.72' x2='14.25' y1='16.52' y2='16.52' />
            </g>
          </svg>
        )
    }
  }
}

renderInlinedIcon.defaultProps = {
  icon: undefined
}

renderInlinedIcon.propTypes = {
  icon: PropTypes.oneOf(values(INLINED_ICONS))
}
