import React, { memo, ReactElement } from 'react'

import { Box, InputAdornment, MenuItem, TextField, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@material-ui/core'
import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

import useDashboard from './dashboard.hook'
import { IRate, ITotalYearInvest, IInvesment } from 'types'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({

  }),
)

const format = (num: number): string => {
  return num.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

function Dashboard(): ReactElement {
  const classes = useStyles()

  const {
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
  } = useDashboard()

  return (
    <Box mx={4} my={6}>
      <form className={classes.root} noValidate autoComplete="off">
        <Box display="flex" justifyContent="space-around">
          <Box>
            <TextField label="Intial Investment" value={intialPrincipal} InputProps={{ onChange: handlePrincipalChange }} />
          </Box>
          <Box>
            <TextField label="Saved per month" value={savedPerMonth} InputProps={{ onChange: handleMonthChange }} />
          </Box>
          <Box>
            <TextField label="Travel per year" value={travel} InputProps={{ onChange: handleTravelChange }} />
          </Box>
          <Box>
            <TextField label="Taxes rate" value={rentTax} InputProps={{
              onChange: handleRentChange,
              endAdornment: (
                <InputAdornment position="end">
                  %
            </InputAdornment>
              ),
            }} />
          </Box>
          <Box width={200} >
            <TextField label="Target Interest Rate %" select value={targetRate} InputProps={{
              onChange: handleRateChange,

            }} fullWidth >
              {rate.map((val: IRate, i: number) => <MenuItem key={i} value={val.rate}>{val.rate}</MenuItem>)}
            </TextField>
          </Box>
        </Box>
      </form>
      <Box my={10}>
        <Grid container spacing={5}>
          {totals.map((yearly: ITotalYearInvest, index: number) => (
            <Grid item xs={6} key={index}>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={4}>
                        Investment - Year {index + 1}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Principal</TableCell>
                      <TableCell align="right">Interest</TableCell>
                      <TableCell align="right">NetInterest</TableCell>
                      <TableCell align="right">Monthly</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {yearly.invertions.map((investment: IInvesment, key: number) => (
                      <TableRow key={key}>
                        <TableCell>${investment.principal.toLocaleString('en-US', { maximumFractionDigits: 2 })}</TableCell>
                        <TableCell align="right">${format(investment.interest)}</TableCell>
                        <TableCell align="right">${format(investment.netInterest)}</TableCell>
                        <TableCell align="right">${format(investment.monthly)}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell rowSpan={4} />
                      <TableCell colSpan={2}>Total Inverted</TableCell>
                      <TableCell align="right">${format(yearly.totalInverted)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total Interest</TableCell>
                      <TableCell align="right">${format(yearly.totalInterest)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total Monthly</TableCell>
                      <TableCell align="right">${format(yearly.totalMontlhy)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">${format(yearly.total)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

  )
}

export default memo(Dashboard)
