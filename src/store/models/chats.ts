export interface Careers {
    id: number,
    title: string,
}

export interface Chat {
    title: string,
    code: string,
    careerCode: number,
    numberMembers?: number,
    members: Array<number>,
    messages: messages[]
}

export interface messages {
    speaker: number,
    listener: string,
    message: string,
    speakerTitle?: string
}

export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    career: number,
    chats?: Array<string>
}

export interface voae {
    title: string,
    date: string,
    type: string,
    hours: string,
    location: string
}

export interface events {
    title: string,
    description: string,
    location: string,
    date: string,
    time: string,
    price: number
}

