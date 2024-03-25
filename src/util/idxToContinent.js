export const arrContinent = [
    'Navjeevan Society',
    'Sindhi Society',
    'Nitanand Society',
    'Gurumukh Sadan Society',
    'Tolaram Colony',
    'Collector Colony'
]

export const continentToIdx = (continent) => {
    return arrContinent.findIndex((cont) => cont.toLowerCase() === continent.toLowerCase())
}

export const idxToContinent = (idx) => {
    return (arrContinent.filter((_, index) => index === Number(idx)))[0]
}