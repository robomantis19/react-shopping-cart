import { useState } from 'react';


export const useLocalStorage = (key, initValue) => { 

    const [value, setValue] = useState(() => { 
        const HistList = window.localStorage.getItem(key); 
        return HistList ? JSON.parse(HistList) : initValue;
    })
    

    const SetValue = itemValue => { 
        setValue(itemValue); 
        window.localStorage.setItem(key, JSON.stringify(itemValue)); 
    }
    return [value, SetValue]
}