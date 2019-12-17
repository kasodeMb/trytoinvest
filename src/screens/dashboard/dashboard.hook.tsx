import { useState, useCallback, ChangeEvent, useEffect } from 'react'
import { IRate, IInvesment, ITotalYearInvest } from 'types'

interface IType {
  rate: IRate[]
  targetRate: string
  savedPerMonth: string
  intialPrincipal: string
  travel: string
  rentTax: string
  totals: ITotalYearInvest[]
  handleMonthChange(e: ChangeEvent<HTMLInputElement>): void
  handleTravelChange(e: ChangeEvent<HTMLInputElement>): void
  handleRentChange(e: ChangeEvent<HTMLInputElement>): void
  handlePrincipalChange(e: ChangeEvent<HTMLInputElement>): void
  handleRateChange(event: ChangeEvent<{ name?: string | undefined; value: unknown; }>): void
}

const rate = [{ max: 10000, rate: 3.28 }, { max: 25000, rate: 3.45 }, { max: 100000, rate: 3.63 }]

const calcInvesment = (principal: number, rate: number, taxes: number): IInvesment => {
  const interest = principal * (rate / 100)
  const netInterest = interest - (interest * taxes)
  const monthly = netInterest / 12
  return {
    principal,
    interestRate: rate,
    interest,
    netInterest,
    monthly
  }
}

function useDashboard(): IType {
  const [targetYears] = useState(34)
  const [intialPrincipal, setInitialPrinciapl] = useState('25100')
  const [savedPerMonth, setSavedperMonth] = useState('2000')
  const [travel, setTravel] = useState('4000')
  const [targetRate, setTargetRate] = useState('3.63')
  const [rentTax, setRentTax] = useState('15')
  const [totals, setTotals] = useState<ITotalYearInvest[]>([])

  const handleMonthChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSavedperMonth(e.currentTarget.value)
  }, [])
  const handleTravelChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setTravel(e.currentTarget.value)
  }, [])
  const handleRentChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setRentTax(e.currentTarget.value)
  }, [])
  const handleRateChange = useCallback((event: ChangeEvent<{ name?: string | undefined; value: unknown; }>): void => {
    setTargetRate(String(event.target.value))
  }, [])
  const handlePrincipalChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setInitialPrinciapl(e.currentTarget.value)
  }, [])

  useEffect(() => {
    const saved = Number(savedPerMonth) || 0
    const $travel = Number(travel) || 0
    const taxes = Number(rentTax) / 100 || 0
    const initalInvestment = Number(intialPrincipal) || 0
    const currentRate = rate.find((val: IRate) => val.rate === Number(targetRate)) || { max: 0, rate: 0 }

    let totals: ITotalYearInvest[] = []
    console.log('initial values', saved, $travel, taxes, initalInvestment, currentRate)
    let totalInvestment = initalInvestment

    for (let year = 0; year < targetYears; year++) {
      let current = []
      let totalGenerated = 0
      totalInvestment = year === 0 ? initalInvestment : totalInvestment + (saved * 12) - $travel
      const invesmentsNeeded = (Math.floor(totalInvestment / currentRate.max) + 1)
      for (let deposit = 0; deposit < invesmentsNeeded; deposit++) {
        const currInv = calcInvesment(totalInvestment / invesmentsNeeded, currentRate.rate, taxes)
        current.push(currInv)
        totalGenerated = totalGenerated + currInv.netInterest
      }
      totals.push({
        invertions: current,
        totalInterest: totalGenerated,
        totalInverted: totalInvestment,
        totalMontlhy: totalGenerated / 12,
        total: totalInvestment + totalGenerated
      })
      totalInvestment = totalInvestment + totalGenerated

    }

    setTotals(totals)


  }, [savedPerMonth, travel, rentTax, targetRate, intialPrincipal, targetYears])

  return {
    rate,
    targetRate,
    savedPerMonth,
    rentTax,
    intialPrincipal,
    travel,
    totals,
    handleMonthChange,
    handleTravelChange,
    handleRentChange,
    handleRateChange,
    handlePrincipalChange
  }
}

export default useDashboard
