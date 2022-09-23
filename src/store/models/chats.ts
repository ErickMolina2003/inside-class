export interface Chat {
    title: string,
    code: string,
    numberMembers: number,
    members: Array<number>,
    messages: messages[]
}

export interface messages {
    speaker: number,
    listener: number,
    message: string
}

export interface User {
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    career: number
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

