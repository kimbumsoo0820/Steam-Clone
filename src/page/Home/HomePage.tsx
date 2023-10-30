import React from 'react';


const hello = 'HELLO WORLD'

function Header() {
    return (
        <div>
            {hello}
        </div>
    );
}

export default Header; //다른 JS파일에서 불러올 수 있도록 내보내주기