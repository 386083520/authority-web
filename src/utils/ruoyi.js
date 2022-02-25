// 添加日期范围
export function addDateRange (params, dateRange, propName) {
  const search = params
  return search
}

// 数据合并
export function mergeRecursive (source, target) {
  for (var p in target) {
    try {
      if (target[p].constructor === Object) {
        source[p] = mergeRecursive(source[p], target[p])
      } else {
        source[p] = target[p]
      }
    } catch (e) {
      source[p] = target[p]
    }
  }
  return source
}
