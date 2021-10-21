export interface Iicons {
    name: string,    
    className?: string,
    width: string,
    height: string,
    fill?: string,
    opacity?: string,
    stroke?: string,
    active?: boolean,
    onClick?: (() => void) | any,
    hidden?: boolean,
    pointer?: string
}

export interface IitemSidebar {
    id: number,
    name: string,
    width: string,
    height: string,
    fill: string,
    opacity?: string,
    pathRoute?: string | undefined
}

export interface IimgProps {
    src?: string,
    alt?: string,
    circle?: boolean,
    className?: string,
    active?: boolean,
    onClick?: (() => void) | any
}

