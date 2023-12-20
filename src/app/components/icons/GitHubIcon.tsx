interface Props {
  iconHeight: number,
  iconWidth: number,
  color: string
}

export default function IconOpenLink(props: Props) {
  return (
  <svg width={props.iconWidth} height={props.iconHeight} viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={props.color} d="M13.379 31.4027C13.379 31.564 13.1935 31.6931 12.9597 31.6931C12.6935 31.7173 12.5081 31.5882 12.5081 31.4027C12.5081 31.2415 12.6935 31.1124 12.9274 31.1124C13.1694 31.0882 13.379 31.2173 13.379 31.4027ZM10.871 31.0398C10.8145 31.2011 10.9758 31.3866 11.2177 31.435C11.4274 31.5156 11.6694 31.435 11.7177 31.2737C11.7661 31.1124 11.6129 30.9269 11.371 30.8544C11.1613 30.7979 10.9274 30.8786 10.871 31.0398ZM14.4355 30.9028C14.2016 30.9592 14.0403 31.1124 14.0645 31.2979C14.0887 31.4592 14.2984 31.564 14.5403 31.5076C14.7742 31.4511 14.9355 31.2979 14.9113 31.1366C14.8871 30.9834 14.6694 30.8786 14.4355 30.9028ZM19.7419 0C8.55645 0 0 8.49181 0 19.6771C0 28.6205 5.62903 36.2736 13.6694 38.9671C14.7016 39.1526 15.0645 38.5155 15.0645 37.9914C15.0645 37.4914 15.0403 34.7333 15.0403 33.0398C15.0403 33.0398 9.39516 34.2495 8.20968 30.6366C8.20968 30.6366 7.29032 28.2899 5.96774 27.6851C5.96774 27.6851 4.12097 26.4189 6.09677 26.4431C6.09677 26.4431 8.10484 26.6044 9.20968 28.5238C10.9758 31.6366 13.9355 30.7415 15.0887 30.2092C15.2742 28.9189 15.7984 28.0238 16.379 27.4915C11.871 26.9915 7.32258 26.3383 7.32258 18.5804C7.32258 16.3626 7.93548 15.2498 9.22581 13.8304C9.01613 13.3062 8.33065 11.145 9.43548 8.35471C11.121 7.83052 15 10.5321 15 10.5321C16.6129 10.0805 18.3468 9.84662 20.0645 9.84662C21.7823 9.84662 23.5161 10.0805 25.129 10.5321C25.129 10.5321 29.0081 7.82246 30.6935 8.35471C31.7984 11.1531 31.1129 13.3062 30.9032 13.8304C32.1935 15.2578 32.9839 16.3707 32.9839 18.5804C32.9839 26.3625 28.2339 26.9835 23.7258 27.4915C24.4677 28.1286 25.0968 29.3383 25.0968 31.2334C25.0968 33.9511 25.0726 37.3139 25.0726 37.9752C25.0726 38.4994 25.4436 39.1365 26.4677 38.951C34.5323 36.2736 40 28.6205 40 19.6771C40 8.49181 30.9274 0 19.7419 0ZM7.83871 27.8141C7.73387 27.8947 7.75806 28.0802 7.89516 28.2334C8.02419 28.3625 8.20968 28.4189 8.31452 28.3141C8.41935 28.2334 8.39516 28.048 8.25806 27.8947C8.12903 27.7657 7.94355 27.7093 7.83871 27.8141ZM6.96774 27.1609C6.91129 27.2657 6.99194 27.3947 7.15323 27.4754C7.28226 27.556 7.44355 27.5318 7.5 27.4189C7.55645 27.3141 7.47581 27.1851 7.31452 27.1044C7.15323 27.056 7.02419 27.0802 6.96774 27.1609ZM9.58065 30.0318C9.45161 30.1366 9.5 30.3786 9.68548 30.5318C9.87097 30.7173 10.1048 30.7415 10.2097 30.6124C10.3145 30.5076 10.2661 30.2657 10.1048 30.1124C9.92742 29.927 9.68548 29.9028 9.58065 30.0318ZM8.66129 28.8463C8.53226 28.927 8.53226 29.1367 8.66129 29.3221C8.79032 29.5076 9.00806 29.5883 9.1129 29.5076C9.24193 29.4028 9.24193 29.1931 9.1129 29.0076C9 28.8221 8.79032 28.7415 8.66129 28.8463Z"/>
  </svg>
  )
}