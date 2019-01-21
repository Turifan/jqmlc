/**
 * 存储localStorage
 */
export const setStore = (storage = localStorage, name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  storage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = (storage = localStorage, name) => {
  if (!name) return
  return storage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = (storage = localStorage, name) => {
  if (!name) return
  storage.removeItem(name)
}
