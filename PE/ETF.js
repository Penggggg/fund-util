
const calculate = json => {
  console.log(`========= ETF PE ==========`)
  Object.entries(json).map(([key, dataset]) => {
    const allWeight = Number(dataset.reduce((x, y) => x + y[0], 0).toFixed(2))
    const weightingPE = Number(dataset.reduce((x, [weight, pe]) => x + (weight / allWeight * pe), 0).toFixed(2)) // 个股权重占比 * 个股PE
    console.log(`${key}:  重仓占比: ${allWeight}%    PE: ${weightingPE}`)
  })
}

calculate(require(`./data.json`))