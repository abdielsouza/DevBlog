import React from 'react';
import Link from 'next/link';

export interface MenuItemProps {
    href: string;
    title: string;
};

const SidebarMenu = ({props}: {props: MenuItemProps[]}) => {

    return (
        <aside className='w-full md:w-60'>
            <nav>
                <ul>
                    {props.map(({href, title}) => (
                        <li className='m-2' key={title}>
                            <Link href={href}>
                                <a className='flex p-2 rounded cursor-pointer'>
                                    {title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SidebarMenu;