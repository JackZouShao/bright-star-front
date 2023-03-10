export type ConsumerQueryCommand = {
  customerName: string,
  customerAddress: string
}

export type ConsumerType = {
  torihikiNameAll: string,
  torihikiNameRyaku: string,
  yuubin: string,
  jyusyo1: string,
  jyusyo2: string,
  tel: string,
  fax: string,
  url: string,
  bikou: string,
  seikyusyoKubun1: number,
  seikyusyoKubun2: number,
  seikyusyoKubun3: number,
  seikyusyoKubun4: number,
  seikyusyoKubun5: number,
  seikyusyoKubun6: number,
  seikyusyoKubun7: string,
  seikyusyoKubun8: string,
  seikyusyoKubun9: string,
  seikyusyoKubun10: string,
  seikyusyoKubun11: string,
  honsya: number,
  honsyaKouza: number,
  kinyukikanCode: string,
  kinyukikanName: string,
  sitenCode: string,
  sitenName: string,
  kouzaKind: number,
  kouzaNum: string,
  meigiName: string,
  tourokubi: string,
  kousinnbi: string,
}

export type TorihikisakiTantou = {
  firstName : string,
  lastName : string,
  mail : string,
  tel : string,

}
export type  ConsumerWithWorker = {
  consumer: ConsumerType,
  consumerTantou: ConsumerWithWorker
}