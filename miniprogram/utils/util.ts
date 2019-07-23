export function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}

export var prjData = {
  projects: [
    {
      name: '', 
      content: {
        pics: [
          ''
        ],
        links: [
          { srcPic: 0, destPic: 0, x: 0, y: 0, trans: '' }
        ]
      },
    }
  ],
}

export function savePrjData(): void {
  
}