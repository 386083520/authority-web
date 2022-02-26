import Vue from 'vue'
import { mergeRecursive } from '@/utils/ruoyi'
import DictMeta from './DictMeta'
const DEFAULT_DICT_OPTIONS = {
  types: []
}
export default class Dict {
  constructor () {
    this.owner = null
    this.label = {}
    this.type = {}
  }

  init (options) {
    if (options instanceof Array) {
      options = { types: options }
    }
    const opts = mergeRecursive(DEFAULT_DICT_OPTIONS, options)
    if (opts.types === undefined) {
      throw new Error('need dict types')
    }
    const ps = []
    this._dictMetas = opts.types.map(t => DictMeta.parse(t))
    this._dictMetas.forEach(dictMeta => {
      const type = dictMeta.type
      Vue.set(this.label, type, {})
      Vue.set(this.type, type, [])
      if (dictMeta.lazy) {
        return
      }
      ps.push(loadDict(this, dictMeta))
    })
    return Promise.all(ps)
  }
}

function loadDict (dict, dictMeta) {
  return dictMeta.request(dictMeta).then(response => {
    const type = dictMeta.type
    const dicts = dictMeta.responseConverter(response, dictMeta)
    dict.type[type].splice(0, Number.MAX_SAFE_INTEGER, ...dicts)
    dicts.forEach(d => {
      Vue.set(dict.label[type], d.value, d.label)
    })
    return dicts
  })
}
