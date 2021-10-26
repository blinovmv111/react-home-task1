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

export interface IdataTable {
    id: number,
    empty1: string,
    song: string,
    artis: string,
    dailyPlays: number,
    time: string,
    option: string,
    empty2: string,
    empty3: string
}

export interface IbuttonProps {
    onClick: (() => void),
    className: string,
    disabled?: boolean,
    href?: string
}

