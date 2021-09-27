import React, {useState} from 'react';
import classNames from 'classnames';

import './header.scss';

import User from '../User';
import Image from '../ImageComponent';
import HeaderMediaBlock from '../HeaderMediaBlock';

const Navbar = () => {

    interface navBlock {
        classes: string,
        src: string,
        active?: boolean | undefined,        
        id: number
    }

    const [state, setState] = useState<navBlock[]>(
        [
            {   
                id: 1,
                classes: 'tv',
                src: 'icons/Header/headerTV.svg',
            },
            {
                id: 2,
                classes: 'radio',
                src: 'icons/Header/headerRadio.svg',
            },
            {
                id: 3,
                classes: 'bell',
                src: 'icons/Header/headerBell.svg'
            },

        ]
    )

    const toggleActiveBlock = (idBlock: number) => { 
        // setState(state.filter(({id}) => id !== idD));
        setState(state.map(({id, classes, src, active}) => {
            if (id === idBlock) {
                active = !active                      
            } return {
                id,
                classes,
                src,
                active
            }
     } ))
    }

    return (
        <header className="header-panel">
            <div className="header-panel__search-block">
                <div className="custom-input">
                    <input type="text" placeholder = "Search your entertainment"/>                  
                </div>
            </div>
            {
                state.map(({id, classes, src, active}) => {
                    const a = src.slice(0, -4);
                    const b = "Active.svg";
                    const c = a + b;
                    return (
                        <HeaderMediaBlock 
                            className={classNames(classes, active ? 'active' : '')}
                            onBlockClick={toggleActiveBlock}
                            id={id}
                            key={id}
                            >
                                <Image src={active ? c : src}/>
                        </HeaderMediaBlock>
                    )                    
                })
            }
            <User active="active"/>
        </header>
    );
};

export default Navbar;