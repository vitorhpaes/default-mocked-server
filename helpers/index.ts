import faker from '@faker-js/faker'

const financeValuesFromGroup = {
    smallest: (hasDecimalValue?: boolean) => Number(faker.finance.amount(0, 1, hasDecimalValue ? 2 : 0)),
    small: (hasDecimalValue?: boolean) => Number(faker.finance.amount(0, 200, hasDecimalValue ? 2 : 0)),
    medium: (hasDecimalValue?: boolean) => Number(faker.finance.amount(500, 5000, hasDecimalValue ? 2 : 0)),
    big: (hasDecimalValue?: boolean) => Number(faker.finance.amount(10000, 500000, hasDecimalValue ? 2 : 0)),
    biggest: (hasDecimalValue?: boolean) => Number(faker.finance.amount(500000, 5000000, hasDecimalValue ? 2 : 0)),
}

export const generateUUID = () => faker.datatype.uuid()

export const generateFinanceValue = (group: 'smallest' | 'small' | 'medium' | 'big' | 'biggest', hasDecimalValue?: boolean): number => financeValuesFromGroup[group](hasDecimalValue)  

export const generateObjectArray = (handleGenerageObject: () => {}, numberOfObjects: number) => {
    const objects = []
    for (let i = 0; i < numberOfObjects; i++) objects.push(handleGenerageObject())
    return objects
}