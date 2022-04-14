import faker from '@faker-js/faker'
import { generateFinanceValue, generateObjectArray, generateUUID } from '../../helpers'

interface SignedResponseProps {
    id: string
    name: string
    email: string
    value: number
    attachments: AttachmentProps[]
}

interface AttachmentProps {
    id: string,
    fileName: string
    path: string
}

const numberOfMockedEntities = 10
const numberOfAttachments = 3

const createAttachment = (): AttachmentProps => ({
    id: generateUUID(),
    fileName: faker.system.commonFileName('jpg'),
    path: faker.image.sports(640, 480, true)
})

const constructMockedExample = (): SignedResponseProps => ({
    id: generateUUID(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    value: generateFinanceValue('small'),
    attachments: generateObjectArray(createAttachment, numberOfAttachments) as AttachmentProps[],
})

export default generateObjectArray(constructMockedExample, numberOfMockedEntities) as SignedResponseProps[]

