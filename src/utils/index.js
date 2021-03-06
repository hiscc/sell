/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}

export function filterParams(params = {}) {
  for (const key in params) {
    if (!params[key]) {
      delete params[key]
    }
  }
  return params
}

export function handleRes(r, res = _ => { }, rej = _ => { }) {
  const { code, msg } = r
  if (code == '200') {
    this.$message({
      message: msg,
      type: 'success'
    })
    res()
    return
  }
  // this.$message({
  //   message: msg,
  //   type: 'error'
  // })
  rej()
}

export function handleFile(fileName = '导出文件.xls', data) {
  const blob = new Blob([data], { type: 'application/vnd.ms-exce' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = decodeURIComponent(fileName)
  link.click()
}


export function getTimestamp(d) {
  const Time = d ? new Date(d) : new Date()
  const year = Time.getFullYear()
  const month = `${Time.getMonth() + 1}`.padStart(2, '0')
  const date = `${Time.getDate()}`.padStart(2, '0')
  const hours = `${Time.getHours()}`.padStart(2, '0')
  const minuts = `${Time.getMinutes()}`.padStart(2, '0')
  const seconds = `${Time.getSeconds()}`.padStart(2, '0')
  const milliseconds = `${Time.getMilliseconds()}`.padStart(3, '0')

  return `${year}${month}${date}${hours}${minuts}${seconds}${milliseconds}`
}
