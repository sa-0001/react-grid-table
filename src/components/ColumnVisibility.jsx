import React from 'react';
import { PopoverButton } from './';

const ColumnVisibility = ({ columns, onChange, tableManager }) => {

    const {
        config: {
            additionalProps: { columnVisibility: additionalProps = {} },
            texts: { columnVisibility: columnVisibilityText },
            icons: { columnVisibility: columnVisibilityIcon },
        }
    } = tableManager;

    return (
        <PopoverButton
            title={columnVisibilityText}
            buttonChildren={columnVisibilityIcon}
            popoverChildren={
                columns.filter(col => col.label).map((cd, idx) => (
                    <div key={idx} className='rgt-clickable rgt-columns-manager-popover-row'>
                        <label 
                            htmlFor={`checkbox-${idx}`} 
                            title={cd.label} 
                            onClick={e => onChange(cd.id)} 
                            className='rgt-clickable rgt-flex-child rgt-text-truncate'
                        >{cd.label}</label>
                        <input
                            id={`checkbox-${idx}`}
                            className='rgt-clickable'
                            type="checkbox"
                            onChange={e => { }}
                            checked={cd.visible !== false}
                        />
                    </div>
                ))
            }
            {...additionalProps}
        />
    )
};

export default ColumnVisibility;