// store interfaces
export interface IRate {
    max: number,
    rate: number
}

export interface IInvesment {
    principal: number
    interestRate: number
    interest: number
    netInterest: number
    monthly: number
}

export interface ITotalYearInvest {
    invertions: IInvesment[]
    totalInterest: number
    totalMontlhy: number
    totalInverted: number
    total: number
}
