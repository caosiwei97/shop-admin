export const setItem = (key: string, value: object | null | string) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const getItem = <T>(key: string) => {
  const data = localStorage.getItem(key)
  if (!data) return null

  try {
    return JSON.parse(data) as T
  } catch (error) {
    return null
  }
}

export const removeItem = (key: string) => {
  localStorage.removeItem(key)
}
