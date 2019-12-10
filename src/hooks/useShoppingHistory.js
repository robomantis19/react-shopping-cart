import { useLocalStorage } from './useLocalStorage'; 




export const useShoppingHistory = (key, initValue) => { 
    const [hist, setHist] = useLocalStorage(key, initValue); 

    
    const HistListHook = (elements) => { 
        
        setHist(elements)
    }
    return [hist, HistListHook]; 
}