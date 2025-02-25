'use client'
import { create } from '@functions/common/axios'
import { makeUrl } from '@functions/common/index'

// .env未設定の場合は空文字にする
//const domain = process.env.TTNOU_DOMAIN || "";

interface props {
  params: Record<string, string | number>
}

// postメソッド
export function postMapEndInput(params: props) {
  const API_URL = process.env.NEXT_PUBLIC_MAP_TTNOU_ENDINPUT_STORE || ''
  const domain = document.querySelector("meta[name='mapttnou-domain']")
  const ins = create()
  return ins.post(API_URL, {
    ...params,
    domain: domain?.getAttribute('content'),
  })
}

//////////////////////////////////////////////// コンテンツ型
export function getQAPagenation(params: props) {
  const apiQAList = makeUrl(
    process.env.NEXT_PUBLIC_MAP_QA_LIST,
    process.env.NEXT_PUBLIC_MAP_QA_LIST_PARAM
  )
  const ins = create()
  return ins.get(apiQAList, { params: params })
}

export function getNewsPagenation(params: props) {
  const apiQAList = makeUrl(process.env.NEXT_PUBLIC_MAP_NEWS_LIST)
  const ins = create()
  return ins.get(apiQAList, { params: params })
}

export function getNewsShow(uuid: string) {
  const apiNewsShow = process.env.NEXT_PUBLIC_MAP_NEWS_SHOW + uuid
  const ins = create()
  return ins.get(apiNewsShow)
}

export function postWdc(data: Record<string, props>) {
  const apiQAList = process.env.NEXT_PUBLIC_MAP_WDC
  if (!apiQAList) return
  const ins = create()
  return ins.post(apiQAList, data)
}
