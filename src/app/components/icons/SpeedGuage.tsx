interface Props {
  iconHeight: number,
  iconWidth: number,
  color: string
}

export default function SpeedGuage(props: Props) {
  return (
    <svg width={props.iconWidth} height={props.iconHeight} viewBox="0 0 252 162" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke={props.color} d="M6 126C6 110.241 9.10395 94.6365 15.1344 80.0775C21.165 65.519 30.0042 52.2901 41.1473 41.1471C52.2903 30.0042 65.5189 21.165 80.0779 15.1344C94.6371 9.10395 110.241 6 126 6C141.759 6 157.363 9.10395 171.922 15.1346C186.481 21.165 199.71 30.0042 210.854 41.1473C221.996 52.2903 230.835 65.519 236.865 80.0775C242.897 94.6365 246 110.241 246 126" stroke="white" stroke-width="12" stroke-linejoin="round"/>
      <path stroke={props.color} d="M96 141C96 137.061 96.7755 133.16 98.283 129.519C99.792 125.88 102.002 122.573 104.787 119.787C107.573 117.002 110.88 114.792 114.519 113.283C118.16 111.775 122.061 111 126 111C129.939 111 133.84 111.775 137.481 113.283C141.12 114.792 144.427 117.002 147.213 119.787C149.998 122.573 152.21 125.88 153.717 129.519C155.225 133.16 156 137.061 156 141" stroke="white" stroke-width="12" stroke-linejoin="round"/>
      <path stroke={props.color} d="M141 111L171 66" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <path stroke={props.color} d="M246 126V141C246 149.284 239.284 156 231 156H21C12.7158 156 6 149.284 6 141V126" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>    
    </svg>
  )
}