export interface User {
    email: string,
    gender: string,
    phone: string,
    picture : {
        large : string,
        medium : string,
        thumbnail : string,
    },
    name : {
        first : string,
        last : string,
        title : string
    }
}