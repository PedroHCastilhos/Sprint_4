export interface SignupDTO {
    name: string
    email: string
    password: string
    level: number
    profile_image: string
}

export interface SigninDTO {
    email: string
    password: string
}